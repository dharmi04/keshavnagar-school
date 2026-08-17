import { Upload } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import Button from "../components/Button.jsx";
import GalleryGrid from "../components/GalleryGrid.jsx";
import ImageModal from "../components/ImageModal.jsx";
import LoadingSpinner from "../components/LoadingSpinner.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import UploadModal from "../components/UploadModal.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { getPhotos, uploadPhotos } from "../services/galleryService.js";

const categories = ["All", "Events", "Sports", "Annual Function", "School Activities", "Campus", "Students", "Celebrations", "Uploaded"];

export default function Gallery() {
  const { isAuthenticated } = useAuth();
  const [photos, setPhotos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [uploadOpen, setUploadOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadPhotos();
  }, []);

  const loadPhotos = async () => {
    setLoading(true);
    setError("");
    try {
      setPhotos(await getPhotos());
    } catch {
      setError("Gallery photos could not be loaded.");
    } finally {
      setLoading(false);
    }
  };

  const visiblePhotos = useMemo(
    () => photos.filter((photo) => selectedCategory === "All" || photo.category === selectedCategory),
    [photos, selectedCategory],
  );

  const handleUpload = async (files) => {
    const uploaded = await uploadPhotos(files);
    setPhotos((current) => [...uploaded, ...current]);
  };

  return (
    <section className="py-20">
      <div className="container-pad">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle
            align="left"
            eyebrow="Photo gallery"
            title="Explore life on campus"
            description="Browse recent school activities, sports, celebrations, student learning, and campus moments."
          />
          {isAuthenticated && (
            <Button onClick={() => setUploadOpen(true)}>
              <Upload size={18} />
              Upload Photos
            </Button>
          )}
        </div>

        <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`focus-ring whitespace-nowrap rounded-md px-4 py-2 text-sm font-semibold transition ${
                selectedCategory === category
                  ? "bg-primary-700 text-white"
                  : "bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-primary-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {loading && <LoadingSpinner label="Loading gallery photos" />}
        {error && <p className="mt-8 rounded-md bg-red-50 p-4 font-semibold text-red-700">{error}</p>}
        {!loading && !error && <div className="mt-8"><GalleryGrid photos={visiblePhotos} onOpen={setSelectedPhoto} /></div>}
      </div>

      {selectedPhoto && <ImageModal photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} />}
      {uploadOpen && <UploadModal onClose={() => setUploadOpen(false)} onUpload={handleUpload} />}
    </section>
  );
}
