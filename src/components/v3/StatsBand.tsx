const STATS = [
  { v: "50,000+", l: "Farmer Families", te: "రైతు కుటుంబాలు", icon: <path d="M4 20a8 8 0 0116 0M12 12a4 4 0 100-8 4 4 0 000 8z" /> },
  { v: "2M+", l: "Litres Daily Supply", te: "రోజువారీ సరఫరా", icon: <path d="M12 3l4 6a5 5 0 11-8 0l4-6z" /> },
  { v: "100+", l: "Cities & Towns", te: "నగరాలు · పట్టణాలు", icon: <path d="M12 22s7-7 7-12a7 7 0 10-14 0c0 5 7 12 7 12zm0-10a2 2 0 100-4 2 2 0 000 4z" /> },
  { v: "4 Generations", l: "Of Trust", te: "నాలుగు తరాల నమ్మకం", icon: <path d="M12 3l8 4v6c0 5-4 8-8 9-4-1-8-4-8-9V7l8-4z" /> },
];

export default function StatsBand() {
  return (
    <section className="relative -mt-24 bg-transparent">
      <div className="mx-auto max-w-7xl px-5">
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-vijaya-forest/95 p-2 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.6)] backdrop-blur">
          <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-[24px] bg-white/5 md:grid-cols-4">
            {STATS.map((s) => (
              <li
                key={s.l}
                className="flex items-center gap-4 bg-vijaya-forest/95 px-6 py-6"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-vijaya-gold/30 bg-vijaya-gold/10 text-vijaya-gold">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    {s.icon}
                  </svg>
                </span>
                <div>
                  <p className="font-display text-2xl font-medium leading-none tracking-tight text-vijaya-ivory">
                    {s.v}
                  </p>
                  <p className="mt-1.5 text-[13px] text-vijaya-ivory/65">{s.l}</p>
                  <p className="te text-[11px] text-vijaya-ivory/45">{s.te}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
