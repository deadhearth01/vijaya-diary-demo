const BADGES = [
  { en: "Fresh Daily Supply", te: "తాజా సరఫరా", desc: "Pasteurised & packed within hours" },
  { en: "Quality Assured", te: "నాణ్యత హామీ", desc: "Tested at every stage of processing" },
  { en: "Trusted Since 1965", te: "60 ఏళ్ల నమ్మకం", desc: "Six decades of co-operative care" },
  { en: "Farmer Supported", te: "రైతుకు అండగా", desc: "Fair price, training & welfare" },
];

export default function TrustBadges() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-5">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {BADGES.map((b) => (
            <li
              key={b.en}
              className="flex items-start gap-3 rounded-2xl border border-vijaya-line bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-vijaya-blueSoft"
            >
              <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-vijaya-mint/10 text-vijaya-mint">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M4 12.5l5 5L20 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div>
                <p className="text-sm font-semibold text-vijaya-slate">{b.en}</p>
                <p className="te text-[11px] text-vijaya-blueDeep/70">{b.te}</p>
                <p className="mt-1 text-[12px] leading-snug text-vijaya-slateMute">
                  {b.desc}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
