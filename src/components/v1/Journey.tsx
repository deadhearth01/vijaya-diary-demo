const STEPS = [
  { en: "Farm Collection", te: "సేకరణ", pos: "0% 0%" },
  { en: "Quality Testing", te: "నాణ్యత", pos: "50% 0%" },
  { en: "Processing", te: "ప్రాసెసింగ్", pos: "100% 0%" },
  { en: "Packaging", te: "ప్యాకింగ్", pos: "0% 100%" },
  { en: "Distribution", te: "పంపిణీ", pos: "50% 100%" },
  { en: "Delivery", te: "డెలివరీ", pos: "100% 100%" },
];

export default function Journey() {
  return (
    <section className="bg-vijaya-sand/60 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-vijaya-ink/55">
            The Journey of Purity
          </p>
          <h2 className="mt-3 font-serif text-4xl leading-[1.1] text-vijaya-ink sm:text-5xl">
            From Our Farms
            <br />
            To Your Homes.
          </h2>
          <p className="te mt-2 text-base text-vijaya-ink/65">
            మా పొలాల నుండి · మీ ఇంటి వరకు.
          </p>
        </div>

        <ol className="mt-12 grid grid-cols-2 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {STEPS.map((s, i) => (
            <li
              key={s.en}
              className="relative flex flex-col items-center text-center"
            >
              <span
                aria-hidden
                className="h-20 w-20 rounded-full border border-vijaya-border bg-vijaya-cream"
                style={{
                  backgroundImage: "url(/v1/journey-icons.png)",
                  backgroundSize: "300% 200%",
                  backgroundPosition: s.pos,
                  backgroundRepeat: "no-repeat",
                }}
              />
              <p className="mt-4 font-serif text-sm text-vijaya-ink/55">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="mt-1 text-sm font-semibold text-vijaya-ink">
                {s.en}
              </p>
              <p className="te text-[12px] text-vijaya-ink/55">{s.te}</p>

              {i < STEPS.length - 1 && (
                <span
                  aria-hidden
                  className="absolute right-0 top-10 hidden h-px w-1/2 translate-x-1/2 bg-vijaya-border lg:block"
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
