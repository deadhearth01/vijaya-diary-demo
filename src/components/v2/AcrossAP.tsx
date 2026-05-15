import Image from "next/image";

const CITIES = [
  { name: "Vijayawada", te: "విజయవాడ" },
  { name: "Guntur", te: "గుంటూరు" },
  { name: "Visakhapatnam", te: "విశాఖపట్నం" },
  { name: "Nellore", te: "నెల్లూరు" },
  { name: "Tirupati", te: "తిరుపతి" },
  { name: "Kakinada", te: "కాకినాడ" },
  { name: "Rajahmundry", te: "రాజమండ్రి" },
  { name: "Kurnool", te: "కర్నూలు" },
];

export default function AcrossAP() {
  return (
    <section className="bg-vijaya-skywash/50 py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid items-end gap-8 md:grid-cols-[1.1fr_1fr] md:gap-12">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-vijaya-blueDeep">
              Network
            </p>
            <h2 className="mt-2 font-display text-[44px] font-semibold leading-[1.05] tracking-tight text-vijaya-slate sm:text-[56px]">
              Across Andhra Pradesh,
              <br />
              <span className="text-vijaya-blue">For You.</span>
            </h2>
            <p className="te mt-3 text-base text-vijaya-blueDeep/75">
              ఆంధ్రప్రదేశ్ అంతటా · మీ కోసం.
            </p>
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-vijaya-slateMute">
            From the coast to the Rayalaseema interior — Vijaya&apos;s cold-chain
            network reaches more than 100 towns and cities every single morning.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-vijaya-line bg-white">
            <Image
              src="/v2/ap-map.png"
              alt="Stylised map of Andhra Pradesh highlighting Vijaya distribution"
              fill
              className="object-contain p-6"
              sizes="(min-width: 1024px) 700px, 100vw"
            />
          </div>

          <div className="flex flex-col gap-4">
            <ul className="grid grid-cols-2 gap-2">
              {CITIES.map((c) => (
                <li
                  key={c.name}
                  className="flex items-center gap-2 rounded-xl border border-vijaya-line bg-white px-3 py-2"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-vijaya-blue" />
                  <div className="leading-tight">
                    <p className="text-sm font-semibold text-vijaya-slate">
                      {c.name}
                    </p>
                    <p className="te text-[11px] text-vijaya-blueDeep/65">
                      {c.te}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="mt-auto inline-flex items-center justify-between gap-3 rounded-2xl bg-vijaya-blue px-5 py-4 text-sm font-semibold text-white shadow-soft transition hover:bg-vijaya-blueDeep"
            >
              <span>Find a Vijaya outlet near you</span>
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
