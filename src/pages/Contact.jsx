import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Button from "../components/Button.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { schoolConfig } from "../config/schoolConfig.js";

export default function Contact() {
  return (
    <section className="py-20">
      <div className="container-pad">
        <SectionTitle eyebrow="Contact" title="Connect with our school office" description="Reach us for admissions, school visits, documents, and general information." />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card icon={MapPin} title="Address" text={schoolConfig.address} />
          <Card icon={Phone} title="Phone" text={schoolConfig.phone} />
          <Card icon={Mail} title="Email" text={schoolConfig.email} />
          <Card icon={Clock} title="Office Hours" text={schoolConfig.officeHours} />
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-slate-200">
            <iframe title="School location map" src={schoolConfig.mapUrl} className="h-96 w-full border-0" loading="lazy" />
          </div>
          <form className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl font-bold text-slate-950">Quick message</h3>
            <div className="mt-5 grid gap-4">
              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                Name
                <input className="rounded-md border border-slate-300 px-4 py-3" type="text" placeholder="Parent or student name" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                Email
                <input className="rounded-md border border-slate-300 px-4 py-3" type="email" placeholder="you@example.com" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                Message
                <textarea className="min-h-32 rounded-md border border-slate-300 px-4 py-3" placeholder="How can we help?" />
              </label>
              <Button type="submit">Send Message</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Card({ icon: Icon, title, text }) {
  return (
    <div className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-slate-200">
      <Icon className="text-primary-700" aria-hidden="true" />
      <h3 className="mt-3 font-bold text-slate-950">{title}</h3>
      <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
    </div>
  );
}
