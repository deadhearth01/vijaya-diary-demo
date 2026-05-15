const STATS = [
  { v: "50,000+", l: "Farmer Families", te: "రైతు కుటుంబాలు" },
  { v: "2M+", l: "Litres Daily Supply", te: "రోజువారీ సరఫరా" },
  { v: "100+", l: "Cities & Towns", te: "నగరాలు · పట్టణాలు" },
  { v: "60 Years", l: "Of Trust · Since 1965", te: "60 ఏళ్ల నమ్మకం" },
];

export default function StatsBand() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-10 md:py-12">
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {STATS.map((s) => (
            <li
              key={s.l}
              className="group flex items-start gap-3 rounded-2xl border border-vijaya-flagLine bg-vijaya-paperFlag px-5 py-4 transition hover:-translate-y-0.5 hover:border-vijaya-leafBright/50 hover:shadow-soft"
            >
              <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-vijaya-leafLight text-vijaya-leafBright transition group-hover:bg-vijaya-leafBright group-hover:text-white">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M4 12.5l5 5L20 7" />
                </svg>
              </span>
              <div>
                <p className="font-display text-2xl font-medium leading-none tracking-tight text-vijaya-leafDeepFlag">
                  {s.v}
                </p>
                <p className="mt-1.5 text-[12.5px] text-vijaya-inkWarm/70">{s.l}</p>
                <p className="te text-[11px] text-vijaya-inkWarm/45">{s.te}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
