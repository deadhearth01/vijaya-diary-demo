import Image from "next/image";

const PILLARS = [
  {
    en: "Pure & Farm Fresh",
    te: "స్వచ్ఛం · తాజా",
    desc: "Collected and chilled within hours, never compromised.",
    src: "/v3/pillar-pure-fresh.png",
  },
  {
    en: "Ethically Sourced",
    te: "నైతిక సేకరణ",
    desc: "Fair prices and welfare for every farmer family.",
    src: "/v3/pillar-ethical.png",
  },
  {
    en: "Hygienic Processing",
    te: "శుభ్రత ప్రక్రియ",
    desc: "Modern cold-chain plants with lab-tested batches.",
    src: "/v3/pillar-hygienic.png",
  },
  {
    en: "Sustainable Practices",
    te: "స్థిర సాగు",
    desc: "Water, energy and feed practices built for tomorrow.",
    src: "/v3/pillar-sustainable.png",
  },
];

export default function TrustPillars() {
  return (
    <section className="bg-vijaya-forest text-vijaya-ivory">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-[1fr_2fr] md:gap-16">
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-vijaya-gold/35 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-vijaya-goldSoft">
            <span className="h-1.5 w-1.5 rounded-full bg-vijaya-gold" />
            Our Promise
          </span>
          <h2 className="mt-5 font-display text-[48px] font-medium leading-[1.02] tracking-[-0.02em] sm:text-[56px]">
            Trust. Purity.
            <br />
            <em className="not-italic text-vijaya-gold" style={{ fontStyle: "italic", fontWeight: 500 }}>
              Quality.
            </em>
          </h2>
          <p className="te mt-3 text-base text-vijaya-ivory/70">
            నమ్మకం · స్వచ్ఛత · నాణ్యత.
          </p>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-vijaya-ivory/65">
            We are committed to delivering pure, nutritious and wholesome dairy
            products from the heart of Krishna District to your family table.
          </p>
          <a
            href="#story"
            className="mt-7 inline-flex w-fit items-center gap-2 rounded-full border border-vijaya-gold/50 px-5 py-2.5 text-sm font-semibold text-vijaya-gold transition hover:bg-vijaya-gold hover:text-vijaya-forest"
          >
            Our Story
            <span aria-hidden>→</span>
          </a>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {PILLARS.map((p) => (
            <li
              key={p.en}
              className="group relative overflow-hidden rounded-3xl border border-white/8 bg-vijaya-forestSoft/70 transition hover:-translate-y-1 hover:border-vijaya-gold/40"
            >
              <div className="relative aspect-[5/4] w-full overflow-hidden">
                <Image
                  src={p.src}
                  alt={p.en}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  sizes="(min-width: 768px) 360px, 100vw"
                />
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 30%, rgba(8,19,16,0.85) 100%)",
                  }}
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="font-display text-lg font-medium tracking-tight text-vijaya-ivory">
                  {p.en}
                </p>
                <p className="te text-[11px] text-vijaya-goldSoft">{p.te}</p>
                <p className="mt-2 text-[12.5px] leading-relaxed text-vijaya-ivory/70">
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
