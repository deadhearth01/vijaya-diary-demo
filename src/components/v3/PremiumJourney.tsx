const STEPS = [
  { en: "Farm Collection", te: "సేకరణ" },
  { en: "Quality Testing", te: "నాణ్యత పరీక్ష" },
  { en: "Pasteurisation", te: "పాశ్చరైజేషన్" },
  { en: "Packaging", te: "ప్యాకింగ్" },
  { en: "Cold Chain", te: "కోల్డ్ చైన్" },
  { en: "Delivered Fresh", te: "డెలివరీ" },
];

export default function PremiumJourney() {
  return (
    <section className="relative overflow-hidden bg-vijaya-parchment py-24 text-vijaya-inkWarm">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-vijaya-gold/30 to-transparent"
      />
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-vijaya-gold/40 bg-white/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-vijaya-goldDeep">
            <span className="h-1.5 w-1.5 rounded-full bg-vijaya-gold" />
            The Journey of Purity
          </span>
          <h2 className="mt-5 font-display text-[44px] font-medium leading-[1.05] tracking-[-0.02em] sm:text-[56px]">
            From Our Farms
            <span className="px-3 italic text-vijaya-goldDeep" style={{ fontStyle: "italic", fontWeight: 500 }}>
              to
            </span>
            Your Family.
          </h2>
          <p className="te mt-3 text-base text-vijaya-inkWarm/65">
            మా పొలాల నుండి · మీ కుటుంబం వరకు.
          </p>
        </div>

        <ol className="relative mt-16 grid grid-cols-2 gap-y-12 sm:grid-cols-3 lg:grid-cols-6">
          <span
            aria-hidden
            className="absolute left-[8%] right-[8%] top-[36px] hidden border-t border-dashed border-vijaya-gold/45 lg:block"
          />
          {STEPS.map((s, i) => (
            <li
              key={s.en}
              className="relative flex flex-col items-center text-center"
            >
              <span className="relative grid h-[72px] w-[72px] place-items-center rounded-full border border-vijaya-gold/40 bg-white shadow-[0_10px_30px_-15px_rgba(28,51,40,0.35)]">
                <span className="absolute inset-1.5 rounded-full border border-vijaya-gold/30" />
                <span className="font-display text-xl font-medium text-vijaya-goldDeep">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </span>
              <p className="mt-5 font-display text-base font-medium tracking-tight text-vijaya-inkWarm">
                {s.en}
              </p>
              <p className="te text-[12px] text-vijaya-goldDeep/80">{s.te}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
