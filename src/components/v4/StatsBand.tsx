"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

type Stat = {
  v: string;
  l: string;
  te: string;
  target: number;
  suffix: string;
  duration: number;
};

const STATS: Stat[] = [
  { v: "50,000+", l: "Farmer Families", te: "రైతు కుటుంబాలు", target: 50000, suffix: "+", duration: 2.4 },
  { v: "2M+", l: "Litres Daily Supply", te: "రోజువారీ సరఫరా", target: 2, suffix: "M+", duration: 1.4 },
  { v: "100+", l: "Cities & Towns", te: "నగరాలు · పట్టణాలు", target: 100, suffix: "+", duration: 1.8 },
  { v: "60", l: "Years · Since 1965", te: "60 ఏళ్ల నమ్మకం", target: 60, suffix: " Years", duration: 1.6 },
];

function formatNumber(n: number, target: number) {
  if (target >= 1000) return Math.round(n).toLocaleString("en-IN");
  if (target < 10 && !Number.isInteger(target)) return n.toFixed(1);
  return Math.round(n).toString();
}

function StatCard({ s, idx }: { s: Stat; idx: number }) {
  const ref = useRef<HTMLLIElement>(null);
  const mx = useMotionValue(-9999);
  const my = useMotionValue(-9999);
  const sx = useSpring(mx, { stiffness: 220, damping: 22 });
  const sy = useSpring(my, { stiffness: 220, damping: 22 });
  const spot = useMotionTemplate`radial-gradient(220px circle at ${sx}px ${sy}px, rgba(242,181,68,0.28), transparent 65%)`;

  return (
    <li
      ref={ref}
      data-stat
      data-target={s.target}
      data-duration={s.duration}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set(e.clientX - r.left);
        my.set(e.clientY - r.top);
      }}
      onMouseLeave={() => {
        mx.set(-9999);
        my.set(-9999);
      }}
      className="group relative overflow-hidden rounded-2xl border border-vijaya-flagLine bg-vijaya-paperFlag px-5 py-5 transition hover:-translate-y-0.5 hover:border-vijaya-leafBright/50 hover:shadow-[0_24px_50px_-28px_rgba(28,51,40,0.35)]"
    >
      <motion.span aria-hidden className="pointer-events-none absolute inset-0" style={{ background: spot }} />
      <div className="relative flex items-start gap-3">
        <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-vijaya-leafLight text-vijaya-leafBright transition group-hover:bg-vijaya-leafBright group-hover:text-white">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M4 12.5l5 5L20 7" />
          </svg>
        </span>
        <div className="min-w-0 flex-1">
          <p className="font-display text-2xl font-medium leading-none tracking-tight text-vijaya-leafDeepFlag">
            <span data-num>0</span>
            <span>{s.suffix}</span>
          </p>
          <svg
            aria-hidden
            viewBox="0 0 120 6"
            preserveAspectRatio="none"
            className="mt-2 block h-[6px] w-24"
          >
            <path
              data-underline
              d="M2 3 Q 30 1, 60 3 T 118 3"
              fill="none"
              stroke="rgba(232,155,43,0.85)"
              strokeWidth="1.6"
              strokeLinecap="round"
              pathLength={1}
              style={{ strokeDasharray: 1, strokeDashoffset: 1 }}
            />
          </svg>
          <p className="mt-1.5 text-[12.5px] text-vijaya-inkWarm/70">{s.l}</p>
          <p className="te text-[11px] text-vijaya-inkWarm/45">{s.te}</p>
        </div>
        <span className="text-[10px] font-semibold text-vijaya-inkWarm/30">0{idx + 1}</span>
      </div>
    </li>
  );
}

export default function StatsBand() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!root.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-stat]");

      gsap.from(cards, {
        y: 52,
        opacity: 0,
        rotateX: -18,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: root.current!, start: "top 82%", once: true },
      });

      cards.forEach((card) => {
        const numEl = card.querySelector<HTMLElement>("[data-num]");
        const underline = card.querySelector<SVGPathElement>("[data-underline]");
        const target = Number(card.dataset.target ?? 0);
        const duration = Number(card.dataset.duration ?? 1.6);
        const obj = { v: 0 };
        if (numEl) {
          gsap.to(obj, {
            v: target,
            duration,
            ease: "power2.out",
            onUpdate: () => {
              numEl.textContent = formatNumber(obj.v, target);
            },
            scrollTrigger: { trigger: card, start: "top 85%", once: true },
          });
        }
        if (underline) {
          gsap.to(underline, {
            strokeDashoffset: 0,
            duration: 1.2,
            delay: 0.3,
            ease: "power2.inOut",
            scrollTrigger: { trigger: card, start: "top 85%", once: true },
          });
        }
      });

      gsap.to(root.current, {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: root.current!,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-white">
      <div ref={root} className="mx-auto max-w-7xl px-5 py-10 md:py-14">
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6" style={{ perspective: 1200 }}>
          {STATS.map((s, i) => (
            <StatCard key={s.l} s={s} idx={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}
