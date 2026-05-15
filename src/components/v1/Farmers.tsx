import Image from "next/image";

export default function Farmers() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <div className="relative aspect-[5/4] overflow-hidden rounded-[24px] border border-vijaya-border bg-vijaya-sand">
            <Image
              src="/v1/farmers-group.png"
              alt="Vijaya dairy farmers from Krishna District"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 540px, 100vw"
            />
          </div>
        </div>

        <div className="order-1 md:order-2">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-vijaya-ink/55">
            Farmer Welfare
          </p>
          <h2 className="mt-3 font-serif text-4xl leading-[1.1] text-vijaya-ink sm:text-5xl">
            Stronger Farmers.
            <br />
            <span className="text-vijaya-leafDeep">Stronger Communities.</span>
          </h2>
          <p className="te mt-3 text-base text-vijaya-ink/65">
            రైతు బలంగా ఉంటేనే · గ్రామం బలంగా ఉంటుంది.
          </p>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-vijaya-ink/70">
            We work alongside our farmers — investing in fair prices, training,
            health support and sustainable practices for a brighter tomorrow.
          </p>

          <ul className="mt-6 grid max-w-md grid-cols-2 gap-3">
            {[
              { en: "Fair Prices", te: "న్యాయమైన ధర" },
              { en: "Training & Support", te: "శిక్షణ" },
              { en: "Health & Insurance", te: "ఆరోగ్యం" },
              { en: "Sustainable Farming", te: "స్థిర సాగు" },
            ].map((b) => (
              <li
                key={b.en}
                className="flex items-center gap-2 rounded-xl border border-vijaya-border bg-white px-3 py-2"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-vijaya-leaf" />
                <span className="text-sm text-vijaya-ink/80">{b.en}</span>
                <span className="te ml-auto text-[11px] text-vijaya-ink/45">
                  {b.te}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
