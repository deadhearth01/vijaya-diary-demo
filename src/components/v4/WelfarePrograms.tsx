"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Program = {
  id: string;
  te: string;
  en: string;
  short: string;
  long: string;
  benefit: string;
  src: string;
  accent: string;
  badge: string;
};

const PROGRAMS: Program[] = [
  {
    id: "palasekarana",
    te: "పాలసేకరణ ధర",
    en: "Fair Procurement Price",
    short: "Country&apos;s highest procurement price for farmer milk.",
    long: "Vijaya pays Krishna District farmers up to ₹20 above the prevailing market rate per litre, ensuring dignity in every transaction. Daily settlements direct to the farmer&apos;s bank.",
    benefit: "+ ₹20 / litre above market",
    src: "/v4/welfare-palasekarana.png",
    accent: "#E89B2B",
    badge: "₹",
  },
  {
    id: "vatsa-krishna",
    te: "వత్స కృష్ణా",
    en: "Vatsa Krishna",
    short: "Free calf-care for 100+ days from birth.",
    long: "Newborn calves receive supplementary feed worth ₹150 per day for the first 100+ days, protecting Krishna District&apos;s next generation of milch cattle.",
    benefit: "₹150 / day · 100 days",
    src: "/v4/welfare-vatsa.png",
    accent: "#2C7A47",
    badge: "🐄",
  },
  {
    id: "kalyanamasthu",
    te: "కల్యాణమస్తు",
    en: "Kalyanamasthu",
    short: "Wedding gift for daughters of farmer families.",
    long: "When a daughter of a registered Vijaya farmer family marries, the union contributes a celebration gift towards the wedding — a thank-you to the families who pour their lives into our work.",
    benefit: "Wedding gift · per daughter",
    src: "/v4/welfare-kalyanamasthu.png",
    accent: "#C2412B",
    badge: "♡",
  },
  {
    id: "pashuposhaka",
    te: "పశుపోషక గోకులం",
    en: "Pashuposhaka Gokulam",
    short: "Subsidised cattle shelters & nutrition support.",
    long: "Concrete shelters, balanced cattle feed and veterinary support distributed at subsidised rates across 100+ partner villages.",
    benefit: "Shelter + feed · villages 100+",
    src: "/v4/welfare-pashuposhaka.png",
    accent: "#0F6B6B",
    badge: "⛯",
  },
  {
    id: "kshira-bandhu",
    te: "క్షీర బంధు",
    en: "Kshira Bandhu",
    short: "₹50,000 family support on a farmer&apos;s passing.",
    long: "Should any registered Vijaya dairy farmer pass away — whatever the cause — the union immediately provides ₹50,000 in family support, helping spouses and children find their footing.",
    benefit: "₹50,000 family aid",
    src: "/v4/welfare-kshira-bandhu.png",
    accent: "#2E4A7A",
    badge: "✺",
  },
  {
    id: "arogya-krishna",
    te: "ఆరోగ్యకృష్ణ",
    en: "Arogya Krishna",
    short: "Annual health camps + insurance cover.",
    long: "Free annual health check-ups, women&apos;s health camps and a group insurance policy for every registered Vijaya farmer and their immediate family.",
    benefit: "Health camps · insurance",
    src: "/v4/welfare-arogya.png",
    accent: "#F2B544",
    badge: "✚",
  },
];

export default function WelfarePrograms() {
  const [activeId, setActiveId] = useState<string>(PROGRAMS[0].id);
  const [paused, setPaused] = useState(false);
  const active = PROGRAMS.find((p) => p.id === activeId) ?? PROGRAMS[0];
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setActiveId((prev) => {
        const i = PROGRAMS.findIndex((p) => p.id === prev);
        return PROGRAMS[(i + 1) % PROGRAMS.length].id;
      });
    }, 4500);
    return () => clearInterval(t);
  }, [paused, activeId]);

  const pick = (id: string) => {
    setActiveId(id);
    setPaused(true);
  };

  return (
    <section
      id="welfare"
      ref={sectionRef}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative isolate overflow-hidden bg-vijaya-leafDeepFlag text-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 90% 0%, rgba(242,181,68,0.18), transparent 50%), radial-gradient(ellipse at 0% 100%, rgba(232,155,43,0.12), transparent 55%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-5 py-24 md:py-28">
        <div className="grid items-end gap-8 md:grid-cols-[1.1fr_1fr] md:gap-12">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-vijaya-saffron/40 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-vijaya-marigold backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-vijaya-marigold" />
              Six Pillars · Farmer Welfare
            </span>
            <h2 className="mt-5 font-display text-[44px] font-medium leading-[1.02] tracking-[-0.02em] sm:text-[58px]">
              Stronger Farmers.
              <br />
              <em
                className="not-italic text-vijaya-marigold"
                style={{ fontStyle: "italic", fontWeight: 500 }}
              >
                Stronger Villages.
              </em>
            </h2>
          </div>
          <p className="te max-w-md text-[15px] leading-relaxed text-vijaya-paperFlag/75">
            మన పాడిరైతు బలంగా ఉంటేనే · మన గ్రామం బలంగా ఉంటుంది · మన భవిష్యత్తు బలంగా ఉంటుంది.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-col gap-5">
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2">
            {PROGRAMS.map((p) => {
              const isActive = p.id === activeId;
              return (
                <li key={p.id}>
                  <button
                    onClick={() => pick(p.id)}
                    aria-pressed={isActive}
                    className={[
                      "group relative flex h-full w-full flex-col items-start gap-3 overflow-hidden rounded-2xl border p-4 text-left transition",
                      isActive
                        ? "border-transparent shadow-[0_18px_44px_-22px_rgba(0,0,0,0.55)]"
                        : "border-white/12 bg-white/5 hover:border-white/30 hover:bg-white/10",
                    ].join(" ")}
                    style={
                      isActive
                        ? {
                            background: `linear-gradient(135deg, ${p.accent}22 0%, rgba(255,255,255,0.04) 100%)`,
                            borderColor: `${p.accent}66`,
                          }
                        : undefined
                    }
                  >
                    <span
                      className={[
                        "grid h-10 w-10 place-items-center rounded-full font-display text-lg font-medium transition",
                        isActive ? "text-vijaya-leafDeepFlag" : "text-white",
                      ].join(" ")}
                      style={{
                        background: isActive ? p.accent : "rgba(255,255,255,0.08)",
                      }}
                    >
                      {p.badge}
                    </span>
                    <div>
                      <p className="te text-[14px] font-semibold leading-tight text-vijaya-marigold">
                        {p.te}
                      </p>
                      <p className="mt-1 text-[12.5px] font-semibold leading-tight text-white/85">
                        {p.en}
                      </p>
                    </div>
                    {isActive && (
                      <span
                        aria-hidden
                        className="absolute right-3 top-3 h-1.5 w-1.5 rounded-full"
                        style={{ background: p.accent }}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <div className="flex items-center justify-between gap-3">
              <p className="te text-[12px] uppercase tracking-[0.18em] text-vijaya-marigold">
                మన గ్రామాల నుండి · Live moments
              </p>
              <div className="flex items-center gap-1.5">
                {PROGRAMS.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => pick(p.id)}
                    aria-label={`Show ${p.en}`}
                    className={[
                      "h-1.5 rounded-full transition",
                      p.id === activeId ? "w-6 bg-vijaya-marigold" : "w-1.5 bg-white/25 hover:bg-white/50",
                    ].join(" ")}
                  />
                ))}
              </div>
            </div>

            <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-6">
              {PROGRAMS.map((p) => {
                const isActive = p.id === activeId;
                return (
                  <button
                    key={p.id}
                    onClick={() => pick(p.id)}
                    aria-label={p.en}
                    className={[
                      "group relative aspect-square overflow-hidden rounded-xl border transition",
                      isActive
                        ? "border-vijaya-marigold shadow-[0_0_0_2px_rgba(242,181,68,0.35)]"
                        : "border-white/10 opacity-60 hover:opacity-100",
                    ].join(" ")}
                  >
                    <Image
                      src={p.src}
                      alt=""
                      fill
                      className="object-cover transition group-hover:scale-105"
                      sizes="80px"
                    />
                    <span
                      aria-hidden
                      className="absolute inset-0"
                      style={{
                        background: isActive
                          ? `linear-gradient(180deg, transparent 50%, ${p.accent}AA 100%)`
                          : "linear-gradient(180deg, transparent 50%, rgba(8,19,16,0.65) 100%)",
                      }}
                    />
                  </button>
                );
              })}
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3 border-t border-white/10 pt-4 text-center">
              <div>
                <p className="font-display text-xl font-medium leading-none text-vijaya-marigold">60 yrs</p>
                <p className="mt-1 text-[10.5px] uppercase tracking-wider text-white/55">Since 1965</p>
              </div>
              <div>
                <p className="font-display text-xl font-medium leading-none text-vijaya-marigold">6</p>
                <p className="mt-1 text-[10.5px] uppercase tracking-wider text-white/55">Programmes</p>
              </div>
              <div>
                <p className="font-display text-xl font-medium leading-none text-vijaya-marigold">50K+</p>
                <p className="mt-1 text-[10.5px] uppercase tracking-wider text-white/55">Families</p>
              </div>
            </div>
          </div>
          </div>

          <article
            key={active.id}
            className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-2"
          >
            <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[22px]">
              <Image
                src={active.src}
                alt={active.en}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 560px, 100vw"
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 35%, rgba(20,62,38,0.92) 100%)",
                }}
              />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div
                  className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] backdrop-blur"
                  style={{ color: active.accent }}
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ background: active.accent }}
                  />
                  {active.benefit}
                </div>
                <p className="te mt-3 font-display text-2xl font-medium leading-tight text-white">
                  {active.te}
                </p>
                <p className="font-display text-lg font-medium leading-tight text-vijaya-marigold">
                  {active.en}
                </p>
              </div>
            </div>
            <div className="space-y-3 p-6">
              <p
                className="text-[14px] leading-relaxed text-white/80"
                dangerouslySetInnerHTML={{ __html: active.short }}
              />
              <p
                className="text-[14.5px] leading-relaxed text-white/65"
                dangerouslySetInnerHTML={{ __html: active.long }}
              />
              <a
                href="#"
                className="mt-2 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[12.5px] font-semibold transition"
                style={{ borderColor: `${active.accent}88`, color: active.accent }}
              >
                Learn more about {active.en}
                <span aria-hidden>→</span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
