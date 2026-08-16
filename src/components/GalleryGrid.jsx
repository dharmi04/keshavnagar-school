import GalleryCard from "./GalleryCard.jsx";

export default function GalleryGrid({ photos, onOpen }) {
  if (!photos.length) {
    return (
      <div className="rounded-lg border border-dashed border-slate-300 bg-white p-12 text-center">
        <h3 className="text-lg font-bold text-slate-950">No photos found</h3>
        <p className="mt-2 text-slate-600">Try another category or upload new school photos.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {photos.map((photo) => (
        <GalleryCard key={photo.id} photo={photo} onOpen={onOpen} />
      ))}
    </div>
  );
}
