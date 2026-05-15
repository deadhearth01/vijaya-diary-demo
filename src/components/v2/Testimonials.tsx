const QUOTES = [
  {
    quote:
      "We&apos;ve been Vijaya customers for over fifteen years. The freshness is unmatched and the curd tastes like home.",
    name: "S. Ramesh",
    role: "Father of two · Vijayawada",
    initial: "R",
  },
  {
    quote:
      "What I love most is how Vijaya looks after our farmers. It feels good buying from a brand that gives back.",
    name: "Lakshmi Devi",
    role: "Teacher · Guntur",
    initial: "L",
  },
  {
    quote:
      "The morning delivery is always on time. My kids drink only Vijaya milk now — even the chocolate one!",
    name: "Prasad Babu",
    role: "Engineer · Visakhapatnam",
    initial: "P",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-vijaya-skywash/50 py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid items-end gap-8 md:grid-cols-[1.1fr_1fr] md:gap-12">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-vijaya-blueDeep">
              Loved by Andhra · Trusted by families
            </p>
            <h2 className="mt-2 font-display text-[44px] font-semibold leading-[1.05] tracking-tight text-vijaya-slate sm:text-[52px]">
              Stories from
              <br />
              <span className="text-vijaya-blue">Our Families.</span>
            </h2>
          </div>
          <p className="te max-w-md text-[15px] leading-relaxed text-vijaya-slateMute">
            కుటుంబాల మాటలే విజయ ముఖచిత్రం · ప్రతి కథ ఒక నమ్మకం.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {QUOTES.map((q) => (
            <li
              key={q.name}
              className="group relative flex h-full flex-col gap-5 rounded-3xl border border-vijaya-line bg-white p-7 transition hover:-translate-y-0.5 hover:border-vijaya-blueSoft hover:shadow-card"
            >
              <svg
                aria-hidden
                width="40"
                height="32"
                viewBox="0 0 40 32"
                className="text-vijaya-blue/20 transition group-hover:text-vijaya-blue/35"
                fill="currentColor"
              >
                <path d="M0 32V20C0 9 6 2 16 0v8c-5 1-8 5-8 10h8v14H0zm24 0V20C24 9 30 2 40 0v8c-5 1-8 5-8 10h8v14H24z" />
              </svg>

              <p
                className="font-display text-[18px] leading-snug text-vijaya-slate"
                dangerouslySetInnerHTML={{ __html: `&ldquo;${q.quote}&rdquo;` }}
              />

              <div className="mt-auto flex items-center gap-3 border-t border-vijaya-line pt-4">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-vijaya-skywash font-display text-base font-semibold text-vijaya-blueDeep">
                  {q.initial}
                </div>
                <div>
                  <p className="text-sm font-semibold text-vijaya-slate">
                    {q.name}
                  </p>
                  <p className="text-[12px] text-vijaya-slateMute">{q.role}</p>
                </div>
                <div className="ml-auto flex gap-0.5 text-vijaya-blue">
                  {"★★★★★".split("").map((s, i) => (
                    <span key={i} className="text-[13px]">
                      {s}
                    </span>
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
