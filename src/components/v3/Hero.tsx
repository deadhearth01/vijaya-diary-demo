import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[820px] overflow-hidden bg-vijaya-forestDeep text-white">
      <Image
        src="/v3/hero-pastoral.png"
        alt="Vijaya farmer at golden hour with cows and farmhouse"
        fill
        priority
        className="absolute inset-0 -z-10 object-cover"
        sizes="100vw"
      />

      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(8,19,16,0.55) 0%, rgba(8,19,16,0.15) 32%, rgba(8,19,16,0.18) 60%, rgba(8,19,16,0.85) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 18% 70%, rgba(8,19,16,0.7), transparent 55%), radial-gradient(ellipse at 95% 10%, rgba(201,162,78,0.18), transparent 50%)",
        }}
      />

      <div className="relative mx-auto flex min-h-[820px] max-w-7xl flex-col justify-end px-5 pb-44 pt-40">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-vijaya-gold/40 bg-black/30 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-vijaya-goldSoft backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-vijaya-gold" />
            Since 1965
          </span>

          <h1 className="mt-6 font-display text-[64px] font-medium leading-[0.98] tracking-[-0.02em] text-vijaya-ivory sm:text-[88px]">
            From Farmers
            <br />
            to <em className="not-italic text-vijaya-gold" style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 500 }}>Families.</em>
          </h1>

          <p className="te mt-5 text-lg text-vijaya-ivory/85">
            మా రైతుల నుండి · మీ కుటుంబాల వరకు.
          </p>

          <p className="mt-4 max-w-lg text-[15.5px] leading-relaxed text-vijaya-ivory/75">
            Every drop of Vijaya is a promise of purity, nutrition and trust —
            crafted in the heart of Krishna District for six decades by
            generations of farmer families.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-full bg-vijaya-redWarm px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-[0_10px_28px_-12px_rgba(193,60,46,0.7)] transition hover:bg-vijaya-redDeep"
            >
              Explore Products
              <span aria-hidden>→</span>
            </a>
            <a
              href="#story"
              className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/5 px-6 py-3 text-sm font-semibold tracking-wide text-white backdrop-blur transition hover:border-vijaya-gold hover:text-vijaya-gold"
            >
              Our Story
            </a>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-24"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(8,19,16,0.95) 100%)",
        }}
      />
    </section>
  );
}
