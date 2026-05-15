import Image from "next/image";

const PILLARS = [
  {
    en: "Pure & Farm Fresh",
    te: "స్వచ్ఛం · తాజా",
    desc: "Collected at the source, chilled within hours.",
    src: "/v4/pillar-pure-fresh.png",
    accent: "from-vijaya-leafBright/15 to-transparent",
  },
  {
    en: "Ethically Sourced",
    te: "నైతిక సేకరణ",
    desc: "Fair prices, dignity and welfare for every farmer.",
    src: "/v4/pillar-ethical.png",
    accent: "from-vijaya-saffron/15 to-transparent",
  },
  {
    en: "Hygienic Processing",
    te: "శుభ్రత ప్రక్రియ",
    desc: "Modern cold-chain plants, lab-tested batches.",
    src: "/v4/pillar-hygienic.png",
    accent: "from-vijaya-peacock/15 to-transparent",
  },
  {
    en: "Sustainable Practices",
    te: "స్థిర సాగు",
    desc: "Water, energy and feed practices for tomorrow.",
    src: "/v4/pillar-sustainable.png",
    accent: "from-vijaya-marigold/15 to-transparent",
  },
];

export default function TrustPillars() {
  return (
    <section className="relative bg-white py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid items-end gap-8 md:grid-cols-[1.05fr_1fr] md:gap-14">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-vijaya-saffron/40 bg-vijaya-paperFlag px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-vijaya-saffron">
              <span className="h-1.5 w-1.5 rounded-full bg-vijaya-saffron" />
              Our Promise
            </span>
            <h2 className="mt-4 font-display text-[48px] font-medium leading-[1.02] tracking-[-0.02em] text-vijaya-inkWarm sm:text-[60px]">
              Trust. Purity.
              <br />
              <em
                className="not-italic text-vijaya-leafDeepFlag"
                style={{ fontStyle: "italic", fontWeight: 500 }}
              >
                Quality.
              </em>
            </h2>
            <p className="te mt-3 text-base text-vijaya-leafDeepFlag/80">
              నమ్మకం · స్వచ్ఛత · నాణ్యత.
            </p>
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-vijaya-inkWarm/65">
            Four promises that have guided every drop of Vijaya for six decades —
            from the Krishna District pastures all the way to your kitchen.
          </p>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p) => (
            <li
              key={p.en}
              className="group relative overflow-hidden rounded-[28px] border border-vijaya-flagLine bg-white transition hover:-translate-y-1 hover:border-vijaya-leafBright/45 hover:shadow-card"
            >
              <div className="relative aspect-[5/4] w-full overflow-hidden">
                <Image
                  src={p.src}
                  alt={p.en}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.06]"
                  sizes="(min-width: 1024px) 280px, 50vw"
                />
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-t ${p.accent}`} />
              </div>
              <div className="p-5">
                <p className="font-display text-lg font-medium tracking-tight text-vijaya-inkWarm">
                  {p.en}
                </p>
                <p className="te text-[11.5px] text-vijaya-leafDeepFlag/70">{p.te}</p>
                <p className="mt-2 text-[13px] leading-relaxed text-vijaya-inkWarm/65">
                  {p.desc}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
