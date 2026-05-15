import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-vijaya-paperFlag">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 80% 10%, rgba(242,181,68,0.22), transparent 55%), radial-gradient(ellipse at 0% 80%, rgba(46,122,71,0.12), transparent 50%), linear-gradient(180deg, #FBF6E7 0%, #F4ECCC 100%)",
        }}
      />

      <Image
        src="/v4/hero-krishna.png"
        alt=""
        fill
        aria-hidden
        sizes="100vw"
        className="absolute inset-0 -z-10 object-cover object-right opacity-90"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(90deg, rgba(251,246,231,0.96) 0%, rgba(251,246,231,0.82) 32%, rgba(251,246,231,0.4) 56%, rgba(251,246,231,0.1) 80%, rgba(251,246,231,0) 100%)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-24 md:grid-cols-[1.1fr_1fr] md:gap-10 md:pb-32 md:pt-28">
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-vijaya-saffron/40 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-vijaya-saffron backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-vijaya-saffron" />
              Serving Since 1965 · 60 Years
            </span>
            <span className="te hidden text-[12px] font-semibold text-vijaya-leafDeepFlag md:inline">
              · అరవైయేళ్ళ ప్రయాణం
            </span>
          </div>

          <h1 className="mt-6 font-display text-[60px] font-medium leading-[0.96] tracking-[-0.025em] text-vijaya-inkWarm sm:text-[88px]">
            From our farmers
            <br />
            to your{" "}
            <em
              className="not-italic text-vijaya-leafDeepFlag"
              style={{ fontStyle: "italic", fontWeight: 500 }}
            >
              families.
            </em>
          </h1>

          <p className="te mt-5 max-w-md text-[18px] leading-snug text-vijaya-leafDeepFlag/85">
            మా రైతుల చేతుల నుండి · మీ కుటుంబాల హృదయాలకు.
          </p>

          <p className="mt-5 max-w-md text-[15.5px] leading-relaxed text-vijaya-inkWarm/75">
            Krishna District Milk Producers&apos; Mutually Aided Co-operative
            Union — built by 50,000+ farmer families, celebrating six decades
            of trust, purity and care.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-full bg-vijaya-leafDeepFlag px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_30px_-14px_rgba(20,62,38,0.7)] transition hover:bg-vijaya-leafBright"
            >
              Explore Our Collection
              <span aria-hidden>→</span>
            </a>
            <a
              href="#welfare"
              className="inline-flex items-center gap-2 rounded-full border border-vijaya-leafDeepFlag/30 bg-white/70 px-6 py-3.5 text-sm font-semibold text-vijaya-leafDeepFlag backdrop-blur transition hover:border-vijaya-leafDeepFlag hover:bg-white"
            >
              Welfare Programmes
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-3 text-[12px] uppercase tracking-[0.18em] text-vijaya-inkWarm/55">
            <span className="rounded-full border border-vijaya-flagLine bg-white/60 px-3 py-1.5">Trusted by 4M+ families</span>
            <span className="rounded-full border border-vijaya-flagLine bg-white/60 px-3 py-1.5">2M+ litres / day</span>
            <span className="rounded-full border border-vijaya-flagLine bg-white/60 px-3 py-1.5">100+ towns served</span>
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="absolute -right-4 top-12 grid h-32 w-32 place-items-center rounded-full border-2 border-vijaya-saffron bg-white/95 shadow-[0_18px_44px_-22px_rgba(232,155,43,0.6)]">
            <div className="text-center leading-none">
              <p className="font-display text-[40px] font-medium leading-none text-vijaya-vermilion">60</p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-vijaya-ochre">Years</p>
              <p className="te mt-0.5 text-[10px] text-vijaya-leafDeepFlag">అరవైయేళ్ళ</p>
            </div>
          </div>
        </div>
      </div>

      <svg
        aria-hidden
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
        className="block h-12 w-full text-white"
      >
        <path
          fill="currentColor"
          d="M0 80 V 30 Q 60 0 120 30 T 240 30 T 360 30 T 480 30 T 600 30 T 720 30 T 840 30 T 960 30 T 1080 30 T 1200 30 V80 Z"
        />
      </svg>
    </section>
  );
}
