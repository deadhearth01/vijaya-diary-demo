import Image from "next/image";

const MILESTONES = [
  { year: "1965", en: "Co-operative founded", te: "సహకార సంఘం స్థాపన" },
  { year: "1988", en: "Cold-chain network rolled out", te: "కోల్డ్ చైన్" },
  { year: "2008", en: "50,000+ farmer families", te: "యాభై వేల కుటుంబాలు" },
  { year: "2025", en: "60 years · 100+ towns daily", te: "60 ఏళ్ల ప్రయాణం" },
];

export default function BuiltOnTrust() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[1fr_1fr] md:gap-16">
        <div className="relative">
          <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[28px] border border-vijaya-line bg-vijaya-skywash">
            <Image
              src="/v2/farm-illustration.png"
              alt="Illustrated Vijaya dairy farm in Krishna District"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 540px, 100vw"
            />
          </div>

          <div className="absolute -bottom-6 right-6 hidden rounded-2xl border border-vijaya-line bg-white px-4 py-3 shadow-card sm:block">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-vijaya-blueDeep">
              Krishna District
            </p>
            <p className="mt-1 font-display text-xl font-semibold text-vijaya-slate">
              Where it all begins
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-vijaya-blueDeep">
            Our Story
          </p>
          <h2 className="mt-2 font-display text-[44px] font-semibold leading-[1.05] tracking-tight text-vijaya-slate sm:text-[52px]">
            Built on Trust.
            <br />
            <span className="text-vijaya-blue">Driven by Purpose.</span>
          </h2>
          <p className="te mt-3 text-base text-vijaya-blueDeep/75">
            నమ్మకంతో నడుస్తోంది · ఉద్దేశంతో ఎదుగుతోంది.
          </p>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-vijaya-slateMute">
            Vijaya began as a small farmer co-operative in Krishna District in
            1965 and grew, year after year, into one of Andhra&apos;s most
            trusted dairy names — sixty years on, without ever losing sight of
            the people who made it possible.
          </p>

          <ol className="mt-8 space-y-4 border-l border-vijaya-line pl-5">
            {MILESTONES.map((m) => (
              <li key={m.year} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[27px] top-1.5 grid h-3 w-3 place-items-center rounded-full border-2 border-vijaya-blue bg-white"
                />
                <p className="font-display text-lg font-semibold text-vijaya-slate">
                  {m.year}
                  <span className="ml-2 text-vijaya-slateMute font-sans text-sm font-normal">
                    {m.en}
                  </span>
                </p>
                <p className="te text-[11px] text-vijaya-blueDeep/60">{m.te}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
