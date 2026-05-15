const STEPS = [
  { en: "Farm Collection", te: "సేకరణ" },
  { en: "Quality Testing", te: "నాణ్యత పరీక్ష" },
  { en: "Pasteurisation", te: "పాశ్చరైజేషన్" },
  { en: "Packaging", te: "ప్యాకింగ్" },
  { en: "Cold Chain", te: "కోల్డ్ చైన్" },
  { en: "Delivered Fresh", te: "డెలివరీ" },
];

export default function Journey() {
  return (
    <section className="relative overflow-hidden bg-white py-24 text-vijaya-inkWarm">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-vijaya-saffron/40 bg-vijaya-paperFlag px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-vijaya-saffron">
            <span className="h-1.5 w-1.5 rounded-full bg-vijaya-saffron" />
            The Journey of Purity
          </span>
          <h2 className="mt-5 font-display text-[44px] font-medium leading-[1.05] tracking-[-0.02em] sm:text-[56px]">
            From Our Farms
            <em
              className="not-italic px-3 text-vijaya-leafDeepFlag"
              style={{ fontStyle: "italic", fontWeight: 500 }}
            >
              to
            </em>
            Your Family.
          </h2>
          <p className="te mt-3 text-base text-vijaya-leafDeepFlag/75">
            మా పొలాల నుండి · మీ కుటుంబం వరకు · ఆరు దశలు.
          </p>
        </div>

        <ol className="relative mt-16 grid grid-cols-2 gap-y-12 sm:grid-cols-3 lg:grid-cols-6">
          <span
            aria-hidden
            className="absolute left-[8%] right-[8%] top-[36px] hidden border-t-2 border-dotted border-vijaya-saffron/40 lg:block"
          />
          {STEPS.map((s, i) => (
            <li
              key={s.en}
              className="group relative flex flex-col items-center text-center"
            >
              <span className="relative grid h-[76px] w-[76px] place-items-center rounded-full border border-vijaya-saffron/40 bg-white shadow-[0_12px_28px_-14px_rgba(232,155,43,0.45)] transition group-hover:-translate-y-1 group-hover:border-vijaya-leafBright group-hover:shadow-card">
                <span className="absolute inset-1.5 rounded-full border border-vijaya-saffron/40" />
                <span className="font-display text-xl font-medium text-vijaya-leafDeepFlag">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </span>
              <p className="mt-5 font-display text-base font-medium tracking-tight text-vijaya-inkWarm">
                {s.en}
              </p>
              <p className="te text-[12px] text-vijaya-leafDeepFlag/75">{s.te}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
