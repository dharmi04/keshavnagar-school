import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AUTH_STORAGE_KEY, USERS } from "../config/authConfig.js";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem(AUTH_STORAGE_KEY);
    if (saved) {
      setUser(JSON.parse(saved));
    }
  }, []);

  const login = (username, password) => {
    const found = USERS.find(
      (candidate) =>
        candidate.username.toLowerCase() === username.trim().toLowerCase() &&
        candidate.password === password,
    );

    if (!found) {
      return { success: false, message: "Invalid username or password." };
    }

    const safeUser = { username: found.username, name: found.name };
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(safeUser));
    setUser(safeUser);
    return { success: true };
  };

  const logout = () => {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    setUser(null);
    navigate("/signin");
  };

  const value = useMemo(
    () => ({ user, isAuthenticated: Boolean(user), login, logout }),
    [user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
