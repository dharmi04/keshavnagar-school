export default function GalleryCard({ photo, onOpen }) {
  return (
    <button
      className="focus-ring group overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-soft"
      onClick={() => onOpen(photo)}
      aria-label={`Open ${photo.title}`}
    >
      <img
        src={photo.src}
        alt={photo.alt}
        loading="lazy"
        className="h-64 w-full object-cover transition duration-300 group-hover:scale-105"
      />
    </button>
  );
}
