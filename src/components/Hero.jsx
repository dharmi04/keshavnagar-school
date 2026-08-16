import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { schoolConfig } from "../config/schoolConfig.js";
import Button from "./Button.jsx";

export default function Hero() {
  return (
    <section className="relative min-h-[640px] overflow-hidden bg-primary-900 text-white">
      <img
        src={schoolConfig.coverImageUrl}
        alt={`${schoolConfig.schoolName} entrance and campus`}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-primary-900/35" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/86 via-primary-800/44 to-secondary-500/16" />
      <div className="container-pad relative flex min-h-[640px] items-center pb-20 pt-24">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-secondary-100">Ahmedabad municipal primary school</p>
          <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {schoolConfig.schoolName}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-primary-50">{schoolConfig.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/inquiry">
              <Button variant="accent">
                Enquire Now <ArrowRight size={18} aria-hidden="true" />
              </Button>
            </Link>
            <Link to="/gallery">
              <Button variant="secondary">View Gallery</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
