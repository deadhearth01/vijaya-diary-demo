import Image from "next/image";

const PERKS = [
  { en: "Exclusive zone rights", te: "ప్రత్యేక ప్రాంత హక్కు" },
  { en: "Daily-fresh stock", te: "రోజువారీ తాజా సరుకు" },
  { en: "Marketing support", te: "మార్కెటింగ్ మద్దతు" },
  { en: "Six decades of brand trust", te: "60 ఏళ్ల నమ్మకం" },
];

export default function DistributorCTA() {
  return (
    <section
      id="distributor"
      className="relative isolate overflow-hidden bg-vijaya-leafDeepFlag text-white"
    >
      <Image
        src="/v4/distributor-van.png"
        alt=""
        fill
        aria-hidden
        sizes="100vw"
        className="absolute inset-0 -z-10 object-cover object-right"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(90deg, rgba(20,62,38,0.96) 0%, rgba(20,62,38,0.84) 30%, rgba(20,62,38,0.35) 56%, rgba(20,62,38,0.08) 80%, rgba(20,62,38,0) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 18% 70%, rgba(242,181,68,0.22), transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 py-24 md:py-28">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-vijaya-marigold/45 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-vijaya-marigold backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-vijaya-marigold" />
            Partnership Programme
          </span>
          <h2 className="mt-5 font-display text-[42px] font-medium leading-[1.02] tracking-[-0.02em] sm:text-[56px]">
            Be a Part of the
            <br />
            <em
              className="not-italic text-vijaya-marigold"
              style={{ fontStyle: "italic", fontWeight: 500 }}
            >
              Vijaya Family.
            </em>
          </h2>
          <p className="te mt-3 text-base text-white/80">
            విజయ కుటుంబంలో చేరండి · మీ నగరానికి తాజాదనం తీసుకురండి.
          </p>

          <ul className="mt-7 grid grid-cols-2 gap-2.5">
            {PERKS.map((p) => (
              <li
                key={p.en}
                className="flex items-start gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 backdrop-blur"
              >
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-vijaya-marigold/25 text-vijaya-marigold">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M4 12.5l5 5L20 7" />
                  </svg>
                </span>
                <div className="leading-tight">
                  <p className="text-[13px] font-semibold">{p.en}</p>
                  <p className="te text-[11px] text-white/60">{p.te}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-vijaya-vermilion px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_32px_-14px_rgba(194,65,43,0.7)] transition hover:bg-vijaya-redDeep"
            >
              Apply to Become a Distributor
              <span aria-hidden>→</span>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-vijaya-marigold/55 bg-black/15 px-6 py-3.5 text-sm font-semibold text-vijaya-marigold backdrop-blur transition hover:bg-vijaya-marigold hover:text-vijaya-leafDeepFlag"
            >
              Download Brochure
            </a>
          </div>
          <p className="mt-4 text-[12px] text-white/60">
            Limited zone allocations open every quarter.
          </p>
        </div>
      </div>
    </section>
  );
}
