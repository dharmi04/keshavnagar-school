import { Clock, Mail, Phone } from "lucide-react";
import Button from "../components/Button.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { schoolConfig } from "../config/schoolConfig.js";

const GOOGLE_FORM_URL = schoolConfig.googleFormUrl;

export default function Inquiry() {
  const openForm = () => {
    window.open(GOOGLE_FORM_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-20">
      <div className="container-pad">
        <SectionTitle
          eyebrow="Admission inquiry"
          title="We would be happy to hear from your family"
          description="Submit an inquiry form and our admissions office will contact you with details about availability, documents, school visits, and next steps."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-200 lg:col-span-2">
            <h3 className="text-xl font-bold text-slate-950">Admission support</h3>
            <p className="mt-3 leading-7 text-slate-600">
              Parents and students can use the inquiry form to ask about admission criteria, fee details, transportation, facilities, and campus visits.
            </p>
            <Button className="mt-6" onClick={openForm}>Submit Inquiry</Button>
          </div>
          <div className="grid gap-4">
            <Info icon={Phone} title="Phone" text={schoolConfig.phone} />
            <Info icon={Mail} title="Email" text={schoolConfig.email} />
            <Info icon={Clock} title="Office Hours" text={schoolConfig.officeHours} />
          </div>
        </div>
        <div className="mt-10 rounded-lg bg-primary-800 p-8 text-white">
          <h3 className="text-2xl font-bold">Visit our office for admission guidance</h3>
          <p className="mt-2 text-primary-100">Bring previous academic records if available. Our team will help you understand the process clearly.</p>
        </div>
      </div>
    </section>
  );
}

function Info({ icon: Icon, title, text }) {
  return (
    <div className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-slate-200">
      <Icon className="text-secondary-600" aria-hidden="true" />
      <h3 className="mt-3 font-bold text-slate-950">{title}</h3>
      <p className="mt-1 text-sm text-slate-600">{text}</p>
    </div>
  );
}
