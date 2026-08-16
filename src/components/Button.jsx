export default function Button({
  children,
  variant = "primary",
  className = "",
  type = "button",
  ...props
}) {
  const variants = {
    primary: "bg-primary-700 text-white hover:bg-primary-800",
    secondary: "bg-white text-primary-800 ring-1 ring-secondary-100 hover:bg-secondary-100",
    accent: "bg-secondary-500 text-primary-950 hover:bg-secondary-600",
    ghost: "bg-transparent text-slate-700 hover:bg-slate-100",
  };

  return (
    <button
      type={type}
      className={`focus-ring inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold shadow-sm transition disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
