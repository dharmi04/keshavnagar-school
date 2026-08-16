import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { schoolConfig } from "../config/schoolConfig.js";

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container-pad grid gap-10 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <h2 className="text-xl font-bold">{schoolConfig.schoolName}</h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-primary-100">
            {schoolConfig.shortDescription}
          </p>
          <div className="mt-5 flex gap-3">
            <a className="focus-ring rounded-md bg-white/10 p-2 hover:bg-white/20" href={schoolConfig.socialLinks.facebook} aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a className="focus-ring rounded-md bg-white/10 p-2 hover:bg-white/20" href={schoolConfig.socialLinks.instagram} aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a className="focus-ring rounded-md bg-white/10 p-2 hover:bg-white/20" href={schoolConfig.socialLinks.youtube} aria-label="YouTube">
              <Youtube size={18} />
            </a>
          </div>
        </div>
        <div>
          <h3 className="font-semibold">Quick Links</h3>
          <div className="mt-4 grid gap-2 text-sm text-primary-100">
            <Link to="/" className="hover:text-accent-300">Home</Link>
            <Link to="/inquiry" className="hover:text-accent-300">Inquiry</Link>
            <Link to="/gallery" className="hover:text-accent-300">Gallery</Link>
            <Link to="/contact" className="hover:text-accent-300">Contact</Link>
          </div>
        </div>
        <div>
          <h3 className="font-semibold">Contact</h3>
          <div className="mt-4 grid gap-3 text-sm text-primary-100">
            <span className="flex gap-2"><MapPin size={17} />{schoolConfig.address}</span>
            <span className="flex gap-2"><Phone size={17} />{schoolConfig.phone}</span>
            <span className="flex gap-2"><Mail size={17} />{schoolConfig.email}</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-primary-100">
        © 2026 {schoolConfig.schoolName}. All Rights Reserved.
      </div>
    </footer>
  );
}
