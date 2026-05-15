const QUOTES = [
  {
    name: "S. Ramesh",
    role: "Vijayawada",
    quote:
      "Vijaya milk has been part of our home for years. Always fresh, always trusted.",
  },
  {
    name: "Lakshmi Devi",
    role: "Guntur",
    quote:
      "I've seen Vijaya grow alongside our village. The co-operative truly cares for its farmers.",
  },
  {
    name: "Prasad Babu",
    role: "Visakhapatnam",
    quote:
      "Quality is the reason we never switched. Curd and ghee taste exactly like home.",
  },
  {
    name: "Rani Kumari",
    role: "Nellore",
    quote:
      "Delivered on time every morning. My children drink only Vijaya milk now.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-vijaya-ink/55">
            Voices of Trust
          </p>
          <h2 className="mt-3 font-serif text-4xl leading-[1.1] text-vijaya-ink sm:text-5xl">
            Loved by Families. Trusted by Generations.
          </h2>
          <p className="te mt-2 text-base text-vijaya-ink/65">
            కుటుంబాల ఇష్టం · తరాల నమ్మకం.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {QUOTES.map((q) => (
            <li
              key={q.name}
              className="flex h-full flex-col gap-4 rounded-2xl border border-vijaya-border bg-vijaya-cream p-5"
            >
              <div className="flex gap-0.5 text-vijaya-red text-sm">
                {"★★★★★".split("").map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
              </div>
              <p className="text-[14px] leading-relaxed text-vijaya-ink/80">
                &ldquo;{q.quote}&rdquo;
              </p>
              <div className="mt-auto flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-vijaya-sand text-sm font-semibold text-vijaya-ink/65">
                  {q.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-vijaya-ink">
                    {q.name}
                  </p>
                  <p className="text-[12px] text-vijaya-ink/55">{q.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
