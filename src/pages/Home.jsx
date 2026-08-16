import { Award, BookOpen, ShieldCheck, Smile, Sparkles, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/Button.jsx";
import Hero from "../components/Hero.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { schoolConfig } from "../config/schoolConfig.js";

const features = [
  { icon: BookOpen, title: "Strong Academics", text: "Thoughtful teaching, regular assessments, and support for every learner." },
  { icon: Users, title: "Caring Faculty", text: "Experienced educators who know students by name and guide them with patience." },
  { icon: ShieldCheck, title: "Safe Campus", text: "A disciplined, inclusive environment where students feel secure and respected." },
  { icon: Sparkles, title: "Creative Growth", text: "Clubs, activities, arts, and events that build confidence beyond textbooks." },
];

const highlights = ["Smart classrooms", "Sports and wellness", "Library and labs", "Parent communication"];

const galleryPreview = [
  "/assets/gallery/image2.jpeg",
  "/assets/gallery/image8.jpeg",
  "/assets/gallery/image12.jpeg",
];

export default function Home() {
  return (
    <>
      <Hero />
      <section className="bg-white py-20">
        <div className="container-pad grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionTitle
              align="left"
              eyebrow="About us"
              title="A school where children are known, encouraged, and prepared."
              description={schoolConfig.shortDescription}
            />
            <p className="mt-5 leading-7 text-slate-600">
              We combine academic discipline with warmth, curiosity, and practical opportunities. Students learn to think clearly, communicate well, and contribute with integrity.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <div key={item} className="rounded-lg border border-primary-100 bg-primary-50 p-5">
                <Award className="text-secondary-600" aria-hidden="true" />
                <h3 className="mt-3 font-bold text-slate-950">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f9f4] py-20">
        <div className="container-pad">
          <SectionTitle eyebrow="Why choose us" title="Balanced learning for confident students" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <Icon className="text-primary-700" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-bold text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-pad">
          <SectionTitle eyebrow="Campus life" title="Recent moments from our school" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {galleryPreview.map((src, index) => (
              <img key={src} src={src} alt={`School gallery preview ${index + 1}`} className="h-72 w-full rounded-lg object-cover shadow-sm" loading="lazy" />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary-800 py-16 text-white">
        <div className="container-pad flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <Smile className="text-accent-300" aria-hidden="true" />
            <h2 className="mt-3 text-3xl font-bold">Start your admission inquiry today.</h2>
            <p className="mt-2 text-primary-100">Our office team will guide you through the next steps.</p>
          </div>
          <Link to="/inquiry">
            <Button variant="accent">Enquire Now</Button>
          </Link>
        </div>
      </section>
    </>
  );
}
