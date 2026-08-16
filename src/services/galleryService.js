const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];

const seedPhotos = [
  {
    id: "keshav-gallery-1",
    title: "School Entrance",
    category: "Campus",
    alt: "Keshavnagar School campus photo",
    src: "/assets/gallery/image1.jpeg",
  },
  {
    id: "keshav-gallery-2",
    title: "Campus Moment",
    category: "Campus",
    alt: "Keshavnagar School campus activity photo",
    src: "/assets/gallery/image2.jpeg",
  },
  {
    id: "keshav-gallery-3",
    title: "Student Activity",
    category: "Students",
    alt: "Students participating in a school activity",
    src: "/assets/gallery/image3.jpeg",
  },
  {
    id: "keshav-gallery-4",
    title: "Learning Together",
    category: "School Activities",
    alt: "Keshavnagar School learning activity",
    src: "/assets/gallery/image4.jpeg",
  },
  {
    id: "keshav-gallery-5",
    title: "Classroom Activity",
    category: "School Activities",
    alt: "Classroom activity at Keshavnagar School",
    src: "/assets/gallery/image5.jpeg",
  },
  {
    id: "keshav-gallery-6",
    title: "Creative Learning",
    category: "School Activities",
    alt: "Creative school activity photo",
    src: "/assets/gallery/image6.jpeg",
  },
  {
    id: "keshav-gallery-7",
    title: "Student Participation",
    category: "Students",
    alt: "Students participating in school program",
    src: "/assets/gallery/image7.jpeg",
  },
  {
    id: "keshav-gallery-8",
    title: "School Program",
    category: "Events",
    alt: "School event at Keshavnagar School",
    src: "/assets/gallery/image8.jpeg",
  },
  {
    id: "keshav-gallery-9",
    title: "School Activity",
    category: "School Activities",
    alt: "School activity photo",
    src: "/assets/gallery/image9.jpeg",
  },
  {
    id: "keshav-gallery-10",
    title: "Student Moment",
    category: "Students",
    alt: "Student moment at Keshavnagar School",
    src: "/assets/gallery/image10.jpeg",
  },
  {
    id: "keshav-gallery-11",
    title: "Campus Life",
    category: "Campus",
    alt: "Campus life at Keshavnagar School",
    src: "/assets/gallery/image11.jpeg",
  },
  {
    id: "keshav-gallery-12",
    title: "School Gathering",
    category: "Events",
    alt: "School gathering photo",
    src: "/assets/gallery/image12.jpeg",
  },
  {
    id: "keshav-gallery-13",
    title: "Celebration",
    category: "Celebrations",
    alt: "Celebration at Keshavnagar School",
    src: "/assets/gallery/image13.jpeg",
  },
  {
    id: "keshav-gallery-14",
    title: "Annual Function Highlight",
    category: "Annual Function",
    alt: "Event highlight from Keshavnagar School",
    src: "/assets/gallery/image14.jpeg",
  },
  {
    id: "keshav-gallery-15",
    title: "Sports and Play",
    category: "Sports",
    alt: "School celebration highlight",
    src: "/assets/gallery/image15.jpeg",
  },
];

let localPhotos = [...seedPhotos];

export async function getPhotos() {
  await wait(350);
  return [...localPhotos];
}

export async function uploadPhotos(files) {
  await wait(700);
  const prepared = Array.from(files).map(validateAndPreparePhoto);
  localPhotos = [...prepared, ...localPhotos];
  return prepared;
}

export async function deletePhoto(photoId) {
  await wait(250);
  localPhotos = localPhotos.filter((photo) => photo.id !== photoId);
}

function validateAndPreparePhoto(file) {
  if (!ALLOWED_TYPES.includes(file.type)) {
    throw new Error(`${file.name} must be a JPG, PNG, or WEBP image.`);
  }

  if (file.size > MAX_FILE_SIZE) {
    throw new Error(`${file.name} is too large. Maximum size is 5 MB.`);
  }

  return {
    id: `${file.name}-${file.lastModified}-${crypto.randomUUID()}`,
    title: file.name.replace(/\.[^/.]+$/, ""),
    category: "Uploaded",
    alt: `Uploaded photo ${file.name}`,
    src: URL.createObjectURL(file),
    isLocalUpload: true,
  };
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
