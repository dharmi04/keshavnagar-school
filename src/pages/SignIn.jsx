import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button.jsx";
import { useAuth } from "../context/AuthContext.jsx";

export default function SignIn() {
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setError("");
  }, [username, password]);

  if (isAuthenticated) {
    return <Navigate to="/gallery" replace />;
  }

  const submit = async (event) => {
    event.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 450));
    const result = login(username, password);
    setLoading(false);

    if (!result.success) {
      setError(result.message);
      return;
    }

    navigate(location.state?.from || "/gallery", { replace: true });
  };

  return (
    <section className="py-20">
      <div className="container-pad grid min-h-[560px] items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-secondary-600">Authorized access</p>
          <h1 className="mt-3 text-4xl font-bold text-slate-950">Sign in to manage gallery uploads</h1>
          <p className="mt-4 max-w-xl leading-7 text-slate-600">
            Gallery viewing is public. Upload tools are limited to configured school users and can later be connected to a secure backend.
          </p>
        </div>
        <form onSubmit={submit} className="rounded-lg bg-white p-6 shadow-soft ring-1 ring-slate-200">
          <h2 className="text-2xl font-bold text-slate-950">Sign In</h2>
          <div className="mt-6 grid gap-5">
            <label className="grid gap-2 text-sm font-semibold text-slate-700">
              Username or Email
              <span className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} aria-hidden="true" />
                <input className="w-full rounded-md border border-slate-300 py-3 pl-10 pr-4" value={username} onChange={(event) => setUsername(event.target.value)} required />
              </span>
            </label>
            <label className="grid gap-2 text-sm font-semibold text-slate-700">
              Password
              <span className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} aria-hidden="true" />
                <input className="w-full rounded-md border border-slate-300 py-3 pl-10 pr-12" type={showPassword ? "text" : "password"} value={password} onChange={(event) => setPassword(event.target.value)} required />
                <button type="button" className="focus-ring absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-2 text-slate-500" onClick={() => setShowPassword((value) => !value)} aria-label={showPassword ? "Hide password" : "Show password"}>
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </span>
            </label>
            {error && <p className="rounded-md bg-red-50 p-3 text-sm font-semibold text-red-700">{error}</p>}
            <Button type="submit" disabled={loading}>{loading ? "Signing in..." : "Sign In"}</Button>
          </div>
        </form>
      </div>
    </section>
  );
}
