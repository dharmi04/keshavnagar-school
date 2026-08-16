export default function LoadingSpinner({ label = "Loading" }) {
  return (
    <div className="flex items-center justify-center gap-3 py-10 text-slate-600" role="status">
      <span className="h-5 w-5 animate-spin rounded-full border-2 border-primary-200 border-t-primary-700" />
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}
