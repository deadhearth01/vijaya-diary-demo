import Image from "next/image";

const PROGRAMS = [
  { en: "Fair Prices", te: "న్యాయమైన ధర" },
  { en: "Training & Skills", te: "శిక్షణ · నైపుణ్యం" },
  { en: "Cattle Insurance", te: "పశు బీమా" },
  { en: "Health Support", te: "ఆరోగ్య సహాయం" },
  { en: "Sustainable Farming", te: "స్థిర సాగు" },
  { en: "Children's Education", te: "పిల్లల చదువు" },
];

export default function EmpoweringFarmers() {
  return (
    <section className="bg-vijaya-forest text-vijaya-ivory">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-[1.05fr_1fr] md:gap-16">
        <div className="relative">
          <div className="relative aspect-[5/6] w-full overflow-hidden rounded-[28px] border border-white/10 bg-vijaya-forestSoft">
            <Image
              src="/v3/farmers-portrait.png"
              alt="Vijaya farmers from Krishna District"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 540px, 100vw"
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent 50%, rgba(8,19,16,0.7) 100%)",
              }}
            />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="te text-[12px] uppercase tracking-[0.22em] text-vijaya-goldSoft">
                మన రైతులు
              </p>
              <p className="mt-1 font-display text-2xl font-medium text-vijaya-ivory">
                The hands behind every drop.
              </p>
            </div>
          </div>

          <div className="absolute -top-6 -right-3 hidden rounded-2xl border border-vijaya-gold/30 bg-vijaya-forestSoft px-4 py-3 shadow-card sm:block">
            <p className="text-[11px] uppercase tracking-[0.22em] text-vijaya-goldSoft">
              Since 1965
            </p>
            <p className="font-display text-xl font-medium text-vijaya-ivory">
              50,000 families
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-vijaya-gold/35 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-vijaya-goldSoft">
            <span className="h-1.5 w-1.5 rounded-full bg-vijaya-gold" />
            Farmer Welfare
          </span>
          <h2 className="mt-5 font-display text-[44px] font-medium leading-[1.02] tracking-[-0.02em] sm:text-[54px]">
            Empowering Farmers.
            <br />
            <em className="not-italic text-vijaya-gold" style={{ fontStyle: "italic", fontWeight: 500 }}>
              Building Communities.
            </em>
          </h2>
          <p className="te mt-3 text-base text-vijaya-ivory/70">
            రైతుల అభివృద్ధే · ఊరి అభివృద్ధి.
          </p>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-vijaya-ivory/70">
            For six decades, Vijaya has stood beside the farmer — not as a
            buyer, but as a partner. Through training, insurance, fair prices
            and welfare programs, we invest back into the families that built
            this co-operative.
          </p>

          <ul className="mt-7 grid max-w-lg grid-cols-2 gap-2">
            {PROGRAMS.map((p) => (
              <li
                key={p.en}
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-vijaya-forestSoft/60 px-3 py-2"
              >
                <span className="grid h-5 w-5 place-items-center rounded-full bg-vijaya-gold/15 text-vijaya-gold">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M4 12.5l5 5L20 7" />
                  </svg>
                </span>
                <div className="leading-tight">
                  <span className="block text-sm font-semibold text-vijaya-ivory">
                    {p.en}
                  </span>
                  <span className="te block text-[11px] text-vijaya-ivory/55">
                    {p.te}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          <a
            href="#"
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-vijaya-gold/50 px-5 py-2.5 text-sm font-semibold text-vijaya-gold transition hover:bg-vijaya-gold hover:text-vijaya-forest"
          >
            Read the Welfare Report
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
