"use client";

import { useState } from "react";
import Image from "next/image";

type Hub = {
  id: string;
  name: string;
  te: string;
  role: string;
  pin: { x: number; y: number };
  metric: string;
};

const HUBS: Hub[] = [
  { id: "vja", name: "Vijayawada", te: "విజయవాడ", role: "Headquarters · Krishna District", pin: { x: 38, y: 32 }, metric: "HQ" },
  { id: "krs", name: "Krishna District", te: "కృష్ణా జిల్లా", role: "50,000+ farmer families", pin: { x: 30, y: 38 }, metric: "Heartland" },
  { id: "gnt", name: "Guntur", te: "గుంటూరు", role: "Collection & processing hub", pin: { x: 36, y: 50 }, metric: "Hub" },
  { id: "vsk", name: "Visakhapatnam", te: "విశాఖపట్నం", role: "Eastern distribution centre", pin: { x: 78, y: 22 }, metric: "Distribution" },
  { id: "nll", name: "Nellore", te: "నెల్లూరు", role: "Southern distribution centre", pin: { x: 50, y: 78 }, metric: "Distribution" },
  { id: "tpt", name: "Tirupati", te: "తిరుపతి", role: "Temple-town outlets", pin: { x: 44, y: 88 }, metric: "Outlet" },
  { id: "kak", name: "Kakinada", te: "కాకినాడ", role: "Coastal logistics", pin: { x: 70, y: 40 }, metric: "Logistics" },
  { id: "knl", name: "Kurnool", te: "కర్నూలు", role: "Rayalaseema gateway", pin: { x: 18, y: 64 }, metric: "Gateway" },
];

export default function AcrossAndhra() {
  const [activeId, setActiveId] = useState<string>(HUBS[0].id);
  const active = HUBS.find((h) => h.id === activeId) ?? HUBS[0];

  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid items-end gap-8 md:grid-cols-[1.1fr_1fr] md:gap-12">
          <div>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-vijaya-saffron/40 bg-vijaya-paperFlag px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-vijaya-saffron">
              <span className="h-1.5 w-1.5 rounded-full bg-vijaya-saffron" />
              The Network · Across Districts
            </span>
            <h2 className="mt-5 font-display text-[44px] font-medium leading-[1.02] tracking-[-0.02em] text-vijaya-inkWarm sm:text-[58px]">
              From Krishna District,
              <br />
              <em
                className="not-italic text-vijaya-leafDeepFlag"
                style={{ fontStyle: "italic", fontWeight: 500 }}
              >
                across Andhra Pradesh.
              </em>
            </h2>
            <p className="te mt-3 text-base text-vijaya-leafDeepFlag/80">
              కృష్ణా జిల్లా నుండి · ఆంధ్రప్రదేశ్ అంతటా.
            </p>
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-vijaya-inkWarm/65">
            From the coastal Krishna heartland to the Rayalaseema interior —
            Vijaya&apos;s cold-chain network reaches 100+ towns and cities
            every single morning.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.25fr_1fr]">
          <div className="relative overflow-hidden rounded-[28px] border border-vijaya-flagLine bg-vijaya-paperFlag p-4 shadow-card">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-0"
              style={{
                background:
                  "radial-gradient(ellipse at 30% 30%, rgba(46,122,71,0.10), transparent 55%), radial-gradient(ellipse at 80% 80%, rgba(232,155,43,0.08), transparent 55%)",
              }}
            />
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/v4/v4-ap-map.png"
                alt="Stylised map of Andhra Pradesh showing Vijaya hubs"
                fill
                className="object-contain p-3"
                sizes="(min-width: 1024px) 700px, 100vw"
              />

              {HUBS.map((h) => {
                const isActive = h.id === activeId;
                return (
                  <button
                    key={h.id}
                    onClick={() => setActiveId(h.id)}
                    aria-label={h.name}
                    className="group absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${h.pin.x}%`, top: `${h.pin.y}%` }}
                  >
                    <span
                      aria-hidden
                      className={[
                        "relative grid place-items-center rounded-full border-2 transition",
                        isActive
                          ? "h-4 w-4 border-vijaya-vermilion bg-white"
                          : "h-3 w-3 border-vijaya-leafDeepFlag bg-vijaya-marigold hover:scale-125",
                      ].join(" ")}
                    >
                      {isActive && (
                        <span className="h-1.5 w-1.5 rounded-full bg-vijaya-vermilion" />
                      )}
                    </span>
                    <span
                      className={[
                        "absolute left-1/2 mt-1 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/95 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider shadow-soft transition",
                        isActive
                          ? "text-vijaya-vermilion opacity-100"
                          : "text-vijaya-leafDeepFlag opacity-0 group-hover:opacity-100",
                      ].join(" ")}
                    >
                      {h.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <article className="rounded-[24px] border border-vijaya-flagLine bg-white p-6 shadow-soft">
              <span
                className="inline-flex items-center gap-2 rounded-full bg-vijaya-leafLight px-3 py-1 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-vijaya-leafDeepFlag"
              >
                {active.metric}
              </span>
              <p className="te mt-3 font-display text-2xl font-medium text-vijaya-leafDeepFlag">
                {active.te}
              </p>
              <h3 className="font-display text-2xl font-medium tracking-tight text-vijaya-inkWarm">
                {active.name}
              </h3>
              <p className="mt-1 text-[13px] text-vijaya-inkWarm/65">{active.role}</p>
            </article>

            <ul className="grid grid-cols-2 gap-2">
              {HUBS.map((h) => {
                const isActive = h.id === activeId;
                return (
                  <li key={h.id}>
                    <button
                      onClick={() => setActiveId(h.id)}
                      className={[
                        "flex w-full items-center gap-2 rounded-xl border px-3 py-2 text-left transition",
                        isActive
                          ? "border-vijaya-leafDeepFlag bg-vijaya-leafLight text-vijaya-leafDeepFlag"
                          : "border-vijaya-flagLine bg-white hover:border-vijaya-leafBright/50",
                      ].join(" ")}
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-vijaya-saffron" />
                      <div className="leading-tight">
                        <p className="text-sm font-semibold text-vijaya-inkWarm">
                          {h.name}
                        </p>
                        <p className="te text-[11px] text-vijaya-leafDeepFlag/70">
                          {h.te}
                        </p>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>

            <a
              href="#"
              className="mt-2 inline-flex items-center justify-between gap-3 rounded-2xl bg-vijaya-leafDeepFlag px-5 py-4 text-sm font-semibold text-white shadow-soft transition hover:bg-vijaya-leafBright"
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
