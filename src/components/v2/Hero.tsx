import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-vijaya-skywash via-white to-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px]"
        style={{
          background:
            "radial-gradient(ellipse at 80% 0%, rgba(27,97,214,0.18), transparent 55%), radial-gradient(ellipse at 0% 10%, rgba(65,135,232,0.14), transparent 50%)",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-14 md:grid-cols-[1.05fr_1fr] md:gap-10 md:pb-28 md:pt-20">
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-vijaya-line bg-white px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-vijaya-blueDeep">
            <span className="h-1.5 w-1.5 rounded-full bg-vijaya-mint" />
            Fresh daily · since generations
          </span>

          <h1 className="mt-5 font-display text-[52px] font-semibold leading-[1.02] tracking-tight text-vijaya-slate sm:text-[68px]">
            Fresh Every <span className="text-vijaya-blue">Morning,</span>
            <br />
            Trusted Every Day.
          </h1>

          <p className="te mt-4 text-lg text-vijaya-blueDeep/80">
            ప్రతి ఉదయం తాజాగా · ప్రతి రోజూ నమ్మకంగా.
          </p>

          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-vijaya-slateMute">
            From the farms of Krishna District to your doorstep — pure, pasteurized
            and packed within hours. The dairy your family has known for six
            decades, ready for the morning ahead.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-full bg-vijaya-blue px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-vijaya-blueDeep"
            >
              Explore Products
              <span aria-hidden>→</span>
            </a>
            <a
              href="#why"
              className="inline-flex items-center gap-2 rounded-full border border-vijaya-line bg-white px-5 py-3 text-sm font-semibold text-vijaya-slate hover:border-vijaya-blueSoft hover:text-vijaya-blueDeep"
            >
              Why Choose Vijaya
            </a>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4">
            {[
              { v: "50K+", l: "Farmer families", te: "రైతు కుటుంబాలు" },
              { v: "2M L", l: "Litres / day", te: "రోజువారీ సరఫరా" },
              { v: "60 yrs", l: "Of trust · 1965", te: "60 ఏళ్ల నమ్మకం" },
            ].map((s) => (
              <div key={s.l}>
                <dt className="font-display text-2xl font-semibold text-vijaya-blueDeep">
                  {s.v}
                </dt>
                <dd className="text-[12px] text-vijaya-slateMute">{s.l}</dd>
                <dd className="te text-[11px] text-vijaya-slateMute/75">
                  {s.te}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] border border-vijaya-line bg-vijaya-skywash">
            <Image
              src="/v2/hero-family.png"
              alt="A family enjoying fresh Vijaya dairy at home"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 520px, 100vw"
              priority
            />
          </div>

          <div className="absolute -left-3 top-6 hidden rounded-2xl border border-vijaya-line bg-white px-3 py-2 text-[12px] shadow-card sm:flex sm:items-center sm:gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-vijaya-mint/15 text-vijaya-mint">
              ✓
            </span>
            <div className="leading-tight">
              <p className="font-semibold text-vijaya-slate">Fresh Daily Supply</p>
              <p className="te text-[10px] text-vijaya-slateMute">తాజా సరఫరా</p>
            </div>
          </div>

          <div className="absolute -bottom-6 left-4 right-4 flex items-end justify-between gap-2 rounded-2xl border border-vijaya-line bg-white/95 p-3 shadow-card backdrop-blur sm:left-8 sm:right-8">
            {[
              "/v2/products/full-cream-milk.png",
              "/v2/products/ghee.png",
              "/v2/products/curd.png",
              "/v2/products/butter-milk.png",
            ].map((src) => (
              <div key={src} className="relative h-16 w-16 sm:h-20 sm:w-20">
                <Image src={src} alt="" fill className="object-contain" sizes="80px" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
