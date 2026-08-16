export default function SectionTitle({ eyebrow, title, description, align = "center" }) {
  return (
    <div className={`mx-auto max-w-3xl ${align === "center" ? "text-center" : "text-left"}`}>
      {eyebrow && (
        <p className="text-sm font-bold uppercase tracking-widest text-accent-500">{eyebrow}</p>
      )}
      <h2 className="mt-2 text-3xl font-bold text-slate-950 sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>}
    </div>
  );
}
