const QUOTES = [
  {
    quote: "Three generations of my family have grown up on Vijaya milk. The taste, the freshness, the trust — nothing has changed.",
    name: "Padma S.",
    role: "Vijayawada · 28 years a customer",
  },
  {
    quote: "I&apos;ve been a Vijaya farmer since 2002. They don&apos;t just buy our milk — they invest in our schools, our health, our future.",
    name: "Subba Rao",
    role: "Farmer · Krishna District",
  },
  {
    quote: "The ghee reminds me of my grandmother&apos;s kitchen. You can taste the care that goes into every batch.",
    name: "Anu Reddy",
    role: "Chef · Hyderabad",
  },
  {
    quote: "Vijaya curd is the only one my kids accept. Six decades — and still the standard.",
    name: "Rani K.",
    role: "Nellore · Mother of three",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-vijaya-paperFlag py-24 text-vijaya-inkWarm">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid items-end gap-8 md:grid-cols-[1.1fr_1fr] md:gap-12">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-vijaya-saffron/40 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-vijaya-saffron">
              <span className="h-1.5 w-1.5 rounded-full bg-vijaya-saffron" />
              Loved by Families · Trusted by Generations
            </span>
            <h2 className="mt-5 font-display text-[44px] font-medium leading-[1.02] tracking-[-0.02em] sm:text-[56px]">
              Stories that
              <em
                className="not-italic px-2 text-vijaya-leafDeepFlag"
                style={{ fontStyle: "italic", fontWeight: 500 }}
              >
                live on.
              </em>
            </h2>
          </div>
          <p className="te max-w-md text-[15px] leading-relaxed text-vijaya-leafDeepFlag/80">
            కుటుంబాల ప్రేమ · తరాల నమ్మకం · అదే విజయ గాథ.
          </p>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {QUOTES.map((q, i) => (
            <li
              key={q.name}
              className={[
                "group relative flex h-full flex-col gap-5 rounded-[24px] border p-6 transition hover:-translate-y-1",
                i === 1
                  ? "border-vijaya-leafDeepFlag bg-vijaya-leafDeepFlag text-white shadow-card lg:scale-[1.02]"
                  : "border-vijaya-flagLine bg-white shadow-[0_18px_44px_-26px_rgba(28,51,40,0.18)] hover:border-vijaya-saffron/55",
              ].join(" ")}
            >
              <svg
                aria-hidden
                width="36"
                height="28"
                viewBox="0 0 40 32"
                fill="currentColor"
                className={i === 1 ? "text-vijaya-marigold/60" : "text-vijaya-saffron/35"}
              >
                <path d="M0 32V20C0 9 6 2 16 0v8c-5 1-8 5-8 10h8v14H0zm24 0V20C24 9 30 2 40 0v8c-5 1-8 5-8 10h8v14H24z" />
              </svg>
              <p
                className={[
                  "font-display text-[16.5px] leading-snug tracking-tight",
                  i === 1 ? "text-white" : "text-vijaya-inkWarm",
                ].join(" ")}
                dangerouslySetInnerHTML={{ __html: `&ldquo;${q.quote}&rdquo;` }}
              />
              <div className={[
                "mt-auto border-t pt-3",
                i === 1 ? "border-white/15" : "border-vijaya-flagLine",
              ].join(" ")}>
                <p className="text-sm font-semibold">{q.name}</p>
                <p className={[
                  "text-[12px]",
                  i === 1 ? "text-white/65" : "text-vijaya-inkWarm/60",
                ].join(" ")}>
                  {q.role}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
