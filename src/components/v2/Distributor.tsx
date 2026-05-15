import Image from "next/image";

const PERKS = [
  "Exclusive zone rights",
  "Daily-fresh stock",
  "Marketing support",
  "Trusted brand recall",
];

export default function Distributor() {
  return (
    <section id="distributor" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="relative overflow-hidden rounded-[36px] border border-vijaya-line bg-gradient-to-br from-vijaya-blueDeep via-vijaya-blue to-vijaya-blueSoft p-8 text-white shadow-card sm:p-12">
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 80% 0%, rgba(255,255,255,0.16), transparent 50%), radial-gradient(ellipse at 0% 100%, rgba(31,176,126,0.22), transparent 60%)",
            }}
          />

          <div className="relative grid items-center gap-12 md:grid-cols-[1.05fr_1fr]">
            <div>
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]">
                <span className="h-1.5 w-1.5 rounded-full bg-vijaya-mint" />
                Distributor Programme
              </span>
              <h2 className="mt-5 font-display text-[40px] font-semibold leading-[1.05] sm:text-[52px]">
                Grow Your Business
                <br />
                <span className="text-vijaya-mint">with Vijaya.</span>
              </h2>
              <p className="te mt-3 text-base text-white/75">
                మీ వ్యాపారాన్ని విస్తరించండి · విజయతో కలిసి.
              </p>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/80">
                Become a Vijaya distributor and bring fresh dairy to your town
                every morning. We back you with stock, marketing and four
                decades of trust.
              </p>

              <ul className="mt-6 grid max-w-md grid-cols-2 gap-2">
                {PERKS.map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-[13px]"
                  >
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-vijaya-mint/30 text-vijaya-mint">
                      ✓
                    </span>
                    {p}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-vijaya-blueDeep transition hover:bg-vijaya-skywash"
                >
                  Apply to Become a Distributor
                  <span aria-hidden>→</span>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15"
                >
                  Download Brochure
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[5/4] w-full overflow-hidden rounded-3xl border border-white/15 bg-white/10">
                <Image
                  src="/v2/distributor-van.png"
                  alt="Vijaya milk delivery van"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 500px, 100vw"
                />
              </div>
              <div className="absolute -bottom-5 -left-2 rounded-2xl border border-white/15 bg-vijaya-slate/85 px-4 py-3 text-[12px] backdrop-blur">
                <p className="font-semibold">100+ towns served</p>
                <p className="te text-[11px] text-white/65">
                  100+ పట్టణాలు
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
