import { ImagePlus, Trash2, Upload, X } from "lucide-react";
import { useMemo, useState } from "react";
import Button from "./Button.jsx";

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];
const MAX_SIZE = 5 * 1024 * 1024;

export default function UploadModal({ onClose, onUpload }) {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const [uploading, setUploading] = useState(false);

  const previews = useMemo(
    () =>
      files.map((file) => ({
        file,
        url: URL.createObjectURL(file),
      })),
    [files],
  );

  const handleFiles = (selectedFiles) => {
    const nextFiles = Array.from(selectedFiles);
    const invalid = nextFiles.find((file) => !ALLOWED_TYPES.includes(file.type) || file.size > MAX_SIZE);

    if (invalid) {
      setError(
        !ALLOWED_TYPES.includes(invalid.type)
          ? `${invalid.name} must be JPG, PNG, or WEBP.`
          : `${invalid.name} is too large. Maximum size is 5 MB.`,
      );
      return;
    }

    setError("");
    setStatus("");
    setFiles((current) => [...current, ...nextFiles]);
  };

  const removeFile = (name) => {
    setFiles((current) => current.filter((file) => file.name !== name));
  };

  const submit = async () => {
    if (!files.length) {
      setError("Select at least one image before uploading.");
      return;
    }

    setUploading(true);
    setError("");
    setStatus("Uploading photos...");
    try {
      await onUpload(files);
      setStatus("Photos uploaded successfully.");
      setFiles([]);
    } catch (uploadError) {
      setError(uploadError.message || "Upload failed. Please try again.");
      setStatus("");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/70 p-4" role="dialog" aria-modal="true" aria-label="Upload photos">
      <div className="max-h-[90vh] w-full max-w-3xl overflow-auto rounded-lg bg-white shadow-soft">
        <div className="flex items-center justify-between border-b border-slate-200 p-5">
          <div>
            <h2 className="text-xl font-bold text-slate-950">Upload Photos</h2>
            <p className="mt-1 text-sm text-slate-600">JPG, PNG, or WEBP files up to 5 MB each.</p>
          </div>
          <button className="focus-ring rounded-md p-2 text-slate-700 hover:bg-slate-100" onClick={onClose} aria-label="Close upload dialog">
            <X />
          </button>
        </div>

        <div className="p-5">
          <label className="focus-within:ring-accent-400 flex cursor-pointer flex-col items-center rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 p-8 text-center ring-offset-2 transition hover:border-secondary-500">
            <ImagePlus className="text-primary-700" size={34} />
            <span className="mt-3 font-semibold text-slate-950">Select multiple images</span>
            <span className="mt-1 text-sm text-slate-600">Preview and remove files before upload.</span>
            <input
              className="sr-only"
              type="file"
              accept="image/jpeg,image/png,image/webp"
              multiple
              onChange={(event) => handleFiles(event.target.files)}
            />
          </label>

          {error && <p className="mt-4 rounded-md bg-red-50 p-3 text-sm font-semibold text-red-700">{error}</p>}
          {status && <p className="mt-4 rounded-md bg-green-50 p-3 text-sm font-semibold text-green-700">{status}</p>}

          {previews.length > 0 && (
            <div className="mt-5 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {previews.map(({ file, url }) => (
                <div key={`${file.name}-${file.lastModified}`} className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                  <img src={url} alt={`Preview of ${file.name}`} className="h-32 w-full object-cover" />
                  <div className="flex items-center justify-between gap-2 p-3">
                    <span className="truncate text-sm font-medium text-slate-700">{file.name}</span>
                    <button className="focus-ring rounded-md p-2 text-red-600 hover:bg-red-50" onClick={() => removeFile(file.name)} aria-label={`Remove ${file.name}`}>
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-6 flex flex-wrap justify-end gap-3">
            <Button variant="secondary" onClick={onClose}>Cancel</Button>
            <Button onClick={submit} disabled={uploading}>
              <Upload size={18} />
              {uploading ? "Uploading..." : "Upload Images"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
