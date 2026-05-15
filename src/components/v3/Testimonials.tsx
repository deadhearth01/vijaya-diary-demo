const QUOTES = [
  {
    quote:
      "Three generations of my family have grown up on Vijaya milk. The taste, the freshness, the trust — nothing has changed.",
    name: "Padma S.",
    role: "Vijayawada · 28 years a customer",
  },
  {
    quote:
      "I&apos;ve been a Vijaya farmer since 2002. They don&apos;t just buy our milk — they invest in our schools, our health, our future.",
    name: "Subba Rao",
    role: "Farmer · Krishna District",
  },
  {
    quote:
      "The ghee reminds me of my grandmother&apos;s kitchen. You can taste the care that goes into every batch.",
    name: "Anu Reddy",
    role: "Chef · Hyderabad",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-vijaya-parchment py-24 text-vijaya-inkWarm">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-vijaya-gold/40 bg-white/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-vijaya-goldDeep">
            <span className="h-1.5 w-1.5 rounded-full bg-vijaya-gold" />
            Loved by families · Trusted by generations
          </span>
          <h2 className="mt-5 font-display text-[44px] font-medium leading-[1.02] tracking-[-0.02em] sm:text-[56px]">
            Stories That
            <em className="not-italic px-2 text-vijaya-goldDeep" style={{ fontStyle: "italic", fontWeight: 500 }}>
              Live On.
            </em>
          </h2>
          <p className="te mt-3 text-base text-vijaya-inkWarm/65">
            నాలుగు తరాల ప్రేమ · అదే నమ్మకం.
          </p>
        </div>

        <ul className="mt-14 grid gap-5 md:grid-cols-3">
          {QUOTES.map((q, i) => (
            <li
              key={q.name}
              className={[
                "relative flex h-full flex-col gap-6 rounded-[28px] border border-vijaya-gold/20 bg-white p-8 shadow-[0_18px_44px_-26px_rgba(28,51,40,0.25)] transition hover:-translate-y-1 hover:border-vijaya-gold/55",
                i === 1 ? "md:-translate-y-4 md:border-vijaya-gold/45 md:bg-vijaya-forest md:text-vijaya-ivory" : "",
              ].join(" ")}
            >
              <svg
                aria-hidden
                width="42"
                height="34"
                viewBox="0 0 40 32"
                fill="currentColor"
                className={i === 1 ? "text-vijaya-gold/60" : "text-vijaya-gold/45"}
              >
                <path d="M0 32V20C0 9 6 2 16 0v8c-5 1-8 5-8 10h8v14H0zm24 0V20C24 9 30 2 40 0v8c-5 1-8 5-8 10h8v14H24z" />
              </svg>
              <p
                className={[
                  "font-display text-[19px] leading-snug tracking-tight",
                  i === 1 ? "text-vijaya-ivory" : "text-vijaya-inkWarm",
                ].join(" ")}
                dangerouslySetInnerHTML={{ __html: `&ldquo;${q.quote}&rdquo;` }}
              />
              <div className={[
                "mt-auto flex items-center justify-between border-t pt-4",
                i === 1 ? "border-white/15" : "border-vijaya-gold/15",
              ].join(" ")}>
                <div className="leading-tight">
                  <p className="text-sm font-semibold">{q.name}</p>
                  <p className={[
                    "text-[12px]",
                    i === 1 ? "text-vijaya-ivory/65" : "text-vijaya-inkWarm/60",
                  ].join(" ")}>{q.role}</p>
                </div>
                <div className="flex gap-0.5 text-vijaya-gold">
                  {"★★★★★".split("").map((s, k) => (
                    <span key={k} className="text-[14px]">{s}</span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
