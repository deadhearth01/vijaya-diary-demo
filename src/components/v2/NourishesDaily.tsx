import Image from "next/image";

const PILLARS = [
  { v: "12g", l: "Protein per serve", te: "మాంసకృత్తులు" },
  { v: "240mg", l: "Calcium per serve", te: "కాల్షియం" },
  { v: "0", l: "Preservatives", te: "సంరక్షణలు లేవు" },
  { v: "24h", l: "Farm-to-pack", te: "తాజా 24 గం." },
];

export default function NourishesDaily() {
  return (
    <section className="relative overflow-hidden bg-vijaya-slate text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 70% 30%, rgba(65,135,232,0.45), transparent 50%), radial-gradient(ellipse at 10% 80%, rgba(31,176,126,0.18), transparent 50%)",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-[1.1fr_1fr] md:gap-16">
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/85">
            <span className="h-1.5 w-1.5 rounded-full bg-vijaya-mint" />
            Goodness · Daily
          </span>

          <h2 className="mt-5 font-display text-[44px] font-semibold leading-[1.05] tracking-tight sm:text-[58px]">
            Goodness That Nourishes
            <br />
            <span className="text-vijaya-blueSoft">Every Single Day.</span>
          </h2>

          <p className="te mt-4 text-lg text-white/75">
            ప్రతి రోజు · ప్రతి గ్లాస్ · పోషకాహారం.
          </p>

          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/70">
            From a child&apos;s morning glass to a grandparent&apos;s evening
            chai — Vijaya keeps the goodness consistent. Pure nutrition, never
            compromised, delivered fresh wherever life takes you.
          </p>

          <dl className="mt-10 grid max-w-lg grid-cols-2 gap-x-6 gap-y-6">
            {PILLARS.map((p) => (
              <div
                key={p.l}
                className="border-l border-white/15 pl-4"
              >
                <dt className="font-display text-3xl font-semibold text-white">
                  {p.v}
                </dt>
                <dd className="mt-1 text-[13px] text-white/75">{p.l}</dd>
                <dd className="te text-[11px] text-white/45">{p.te}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="relative mx-auto aspect-[5/6] w-full max-w-md overflow-hidden rounded-[28px] border border-white/10 bg-vijaya-blueDeep/30">
            <Image
              src="/v2/kid-milk.png"
              alt="A child smiling with a glass of Vijaya milk"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 460px, 100vw"
            />
          </div>

          <div className="absolute -bottom-4 -left-4 hidden rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-[12px] backdrop-blur sm:block">
            <p className="font-semibold text-white">Loved by 4M+ families</p>
            <p className="te text-[11px] text-white/65">4M+ కుటుంబాలు · నమ్మకం</p>
          </div>
        </div>
      </div>
    </section>
  );
}
