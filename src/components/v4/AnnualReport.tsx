import Image from "next/image";

export default function AnnualReport() {
  return (
    <section className="relative bg-white py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="relative overflow-hidden rounded-[36px] border border-vijaya-flagLine bg-gradient-to-br from-vijaya-paperFlag via-white to-vijaya-paperFlag p-8 shadow-card md:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 90% 0%, rgba(232,155,43,0.18), transparent 55%), radial-gradient(ellipse at 0% 100%, rgba(46,122,71,0.10), transparent 55%)",
            }}
          />

          <div className="relative grid items-center gap-12 md:grid-cols-[1.1fr_1fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-vijaya-saffron/40 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-vijaya-saffron">
                <span className="h-1.5 w-1.5 rounded-full bg-vijaya-saffron" />
                Annual Report 2024-25
              </span>
              <h2 className="mt-5 font-display text-[40px] font-medium leading-[1.02] tracking-[-0.02em] text-vijaya-inkWarm sm:text-[52px]">
                Sixty years
                <em
                  className="not-italic px-2 text-vijaya-leafDeepFlag"
                  style={{ fontStyle: "italic", fontWeight: 500 }}
                >
                  on record.
                </em>
              </h2>
              <p className="te mt-3 text-base text-vijaya-leafDeepFlag/80">
                60 ఏళ్ల ప్రయాణం · వార్షిక నివేదిక 2024-25.
              </p>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-vijaya-inkWarm/65">
                A complete account of the year — the farmers we paid, the
                schemes we ran, the villages we reached, and the milk we
                poured. Open, audited, and written for you.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full bg-vijaya-leafDeepFlag px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-vijaya-leafBright"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download PDF · 18 MB
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full border border-vijaya-leafDeepFlag/30 bg-white px-6 py-3 text-sm font-semibold text-vijaya-leafDeepFlag transition hover:bg-vijaya-leafDeepFlag hover:text-white"
                >
                  Read Online
                  <span aria-hidden>→</span>
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-sm">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[24px] border border-vijaya-flagLine bg-vijaya-paperFlag shadow-card transition hover:-rotate-1 hover:scale-[1.02]">
                <Image
                  src="/v4/annual-report-cover.png"
                  alt="Krishna Milk Union Annual Report 2024-25 cover"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 400px, 80vw"
                />
              </div>
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-vijaya-saffron bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-vijaya-saffron shadow-soft">
                2024-25 Edition
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
