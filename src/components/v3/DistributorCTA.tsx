import Image from "next/image";

export default function DistributorCTA() {
  return (
    <section
      id="distributor"
      className="relative isolate overflow-hidden bg-vijaya-forestDeep text-vijaya-ivory"
    >
      <Image
        src="/v3/distributor-band.png"
        alt=""
        fill
        aria-hidden
        priority={false}
        className="absolute inset-0 -z-10 object-cover object-right"
        sizes="100vw"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(90deg, rgba(8,19,16,0.94) 0%, rgba(8,19,16,0.82) 28%, rgba(8,19,16,0.35) 55%, rgba(8,19,16,0.0) 78%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 12% 50%, rgba(201,162,78,0.16), transparent 45%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 py-20 md:py-28">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-vijaya-gold/40 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-vijaya-goldSoft backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-vijaya-gold" />
            Partnership Programme
          </span>
          <h2 className="mt-5 font-display text-[40px] font-medium leading-[1.02] tracking-[-0.02em] sm:text-[52px]">
            Join the Vijaya Family.
            <br />
            <em
              className="not-italic text-vijaya-gold"
              style={{ fontStyle: "italic", fontWeight: 500 }}
            >
              Become a Distributor Today.
            </em>
          </h2>
          <p className="te mt-3 text-base text-vijaya-ivory/75">
            విజయ కుటుంబంలో చేరండి · మీ నగరానికి తాజాదనం తీసుకురండి.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-vijaya-redWarm px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_32px_-14px_rgba(193,60,46,0.7)] transition hover:bg-vijaya-redDeep"
            >
              Apply to Become a Distributor
              <span aria-hidden>→</span>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-vijaya-gold/50 bg-black/20 px-6 py-3.5 text-sm font-semibold text-vijaya-gold backdrop-blur transition hover:bg-vijaya-gold hover:text-vijaya-forest"
            >
              Download Brochure
            </a>
          </div>

          <p className="mt-4 text-[12px] text-vijaya-ivory/60">
            Limited zone allocations open every quarter.
          </p>
        </div>
      </div>
    </section>
  );
}
