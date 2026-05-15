const FEATURES = [
  {
    en: "Pure & Safe",
    te: "స్వచ్ఛం · సురక్షితం",
    desc: "Pasteurised, no preservatives, lab-tested daily.",
    icon: (
      <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3z" />
    ),
  },
  {
    en: "Rich in Nutrition",
    te: "పోషక సమృద్ధం",
    desc: "Protein, calcium and good fats for every age.",
    icon: <path d="M4 12c0-4 4-8 8-8s8 4 8 8-4 8-8 8-8-4-8-8zm6-2v8m4-8v8" />,
  },
  {
    en: "Trusted Quality",
    te: "నాణ్యత హామీ",
    desc: "ISO-grade cold chain from farm to family.",
    icon: <path d="M5 5h14v6a7 7 0 01-14 0V5zm4 14h6" />,
  },
  {
    en: "Daily Fresh Delivery",
    te: "రోజువారీ తాజా డెలివరీ",
    desc: "Doorstep delivery across 100+ towns at sunrise.",
    icon: <path d="M3 13h11l3-4h4v8h-2a2 2 0 11-4 0H9a2 2 0 11-4 0H3v-4z" />,
  },
  {
    en: "Farmer Welfare",
    te: "రైతు సంక్షేమం",
    desc: "Fair prices, insurance and training for our farmers.",
    icon: <path d="M12 12a4 4 0 100-8 4 4 0 000 8zm-7 8a7 7 0 0114 0H5z" />,
  },
  {
    en: "Regional Strength",
    te: "ప్రాంతీయ బలం",
    desc: "Built in Andhra. Serving Andhra. Of Andhra.",
    icon: <path d="M12 2c4 4 6 8 6 12a6 6 0 11-12 0c0-4 2-8 6-12zm0 14a2 2 0 100-4 2 2 0 000 4z" />,
  },
];

export default function WhyChoose() {
  return (
    <section id="why" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid items-end gap-8 md:grid-cols-[1.1fr_1fr] md:gap-12">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-vijaya-blueDeep">
              Why Choose Vijaya
            </p>
            <h2 className="mt-2 font-display text-4xl font-semibold leading-[1.1] text-vijaya-slate sm:text-5xl">
              Built for Families.
              <br />
              <span className="text-vijaya-blue">Backed by Farmers.</span>
            </h2>
          </div>
          <p className="te max-w-md text-[15px] leading-relaxed text-vijaya-slateMute">
            విజయ అంటే నాణ్యత · విజయ అంటే నమ్మకం · విజయ అంటే మీ కుటుంబంలో ఒక భాగం.
          </p>
        </div>

        <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <li
              key={f.en}
              className="group relative overflow-hidden rounded-2xl border border-vijaya-line bg-white p-6 transition hover:-translate-y-0.5 hover:border-vijaya-blueSoft hover:shadow-card"
            >
              <span
                aria-hidden
                className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-vijaya-skywash transition group-hover:bg-vijaya-skywashDeep"
              />
              <span className="relative grid h-11 w-11 place-items-center rounded-xl bg-vijaya-blue/10 text-vijaya-blueDeep">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  {f.icon}
                </svg>
              </span>
              <p className="relative mt-4 text-base font-semibold text-vijaya-slate">
                {f.en}
              </p>
              <p className="te relative text-[12px] text-vijaya-blueDeep/70">
                {f.te}
              </p>
              <p className="relative mt-2 text-[13px] leading-relaxed text-vijaya-slateMute">
                {f.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
