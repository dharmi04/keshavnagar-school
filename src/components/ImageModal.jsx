import { X } from "lucide-react";
import { useEffect } from "react";

export default function ImageModal({ photo, onClose }) {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  if (!photo) return null;

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-slate-950/80 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={photo.title}
      onMouseDown={onClose}
    >
      <div className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-lg bg-white shadow-soft" onMouseDown={(event) => event.stopPropagation()}>
        <button
          className="focus-ring absolute right-3 top-3 z-10 rounded-md bg-white/95 p-2 text-slate-800 shadow-sm hover:bg-white"
          onClick={onClose}
          aria-label="Close image preview"
        >
          <X />
        </button>
        <img src={photo.src} alt={photo.alt} className="max-h-[90vh] w-full object-contain bg-slate-100" />
      </div>
    </div>
  );
}
