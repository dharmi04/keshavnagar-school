import { GraduationCap, LogOut, Menu, User, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { schoolConfig } from "../config/schoolConfig.js";
import { useAuth } from "../context/AuthContext.jsx";
import Button from "./Button.jsx";

const links = [
  { to: "/", label: "Home" },
  { to: "/inquiry", label: "Inquiry" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();

  const linkClass = ({ isActive }) =>
    `rounded-md px-3 py-2 text-sm font-semibold transition ${
      isActive ? "bg-secondary-100 text-primary-900" : "text-slate-700 hover:bg-primary-50"
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-primary-100 bg-white/95 backdrop-blur">
      <nav className="container-pad flex h-18 min-h-16 items-center justify-between py-3">
        <NavLink to="/" className="focus-ring flex items-center gap-3 rounded-md">
          <span className="grid h-11 w-11 place-items-center rounded-md bg-primary-800 text-secondary-100">
            <GraduationCap aria-hidden="true" />
          </span>
          <span>
            <span className="block text-base font-bold text-slate-950">{schoolConfig.schoolName}</span>
            <span className="block text-xs font-medium text-slate-500">Excellence in education</span>
          </span>
        </NavLink>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
          {isAuthenticated ? (
            <>
              <span className="ml-3 inline-flex items-center gap-2 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700">
                <User size={16} aria-hidden="true" />
                {user.name}
              </span>
              <Button variant="ghost" className="px-3 py-2" onClick={logout}>
                <LogOut size={16} aria-hidden="true" />
                Logout
              </Button>
            </>
          ) : (
            <NavLink to="/signin" className={linkClass}>
              Sign In
            </NavLink>
          )}
        </div>

        <button
          className="focus-ring rounded-md p-2 text-slate-800 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="container-pad flex flex-col gap-2 py-4">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} className={linkClass} onClick={() => setOpen(false)}>
                {link.label}
              </NavLink>
            ))}
            {isAuthenticated ? (
              <>
                <div className="rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700">
                  {user.name}
                </div>
                <Button variant="ghost" className="justify-start px-3 py-2" onClick={logout}>
                  <LogOut size={16} aria-hidden="true" />
                  Logout
                </Button>
              </>
            ) : (
              <NavLink to="/signin" className={linkClass} onClick={() => setOpen(false)}>
                Sign In
              </NavLink>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
