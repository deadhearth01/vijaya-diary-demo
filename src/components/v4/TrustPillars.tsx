"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

const PILLARS = [
  {
    en: "Pure & Farm Fresh",
    te: "స్వచ్ఛం · తాజా",
    desc: "Collected at the source, chilled within hours.",
    src: "/v4/pillar-pure-fresh.png",
    accent: "from-vijaya-leafBright/15 to-transparent",
  },
  {
    en: "Ethically Sourced",
    te: "నైతిక సేకరణ",
    desc: "Fair prices, dignity and welfare for every farmer.",
    src: "/v4/pillar-ethical.png",
    accent: "from-vijaya-saffron/15 to-transparent",
  },
  {
    en: "Hygienic Processing",
    te: "శుభ్రత ప్రక్రియ",
    desc: "Modern cold-chain plants, lab-tested batches.",
    src: "/v4/pillar-hygienic.png",
    accent: "from-vijaya-peacock/15 to-transparent",
  },
  {
    en: "Sustainable Practices",
    te: "స్థిర సాగు",
    desc: "Water, energy and feed practices for tomorrow.",
    src: "/v4/pillar-sustainable.png",
    accent: "from-vijaya-marigold/15 to-transparent",
  },
];

function PillarCard({ p, idx }: { p: (typeof PILLARS)[number]; idx: number }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 220, damping: 22 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 220, damping: 22 });
  const imgX = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 180, damping: 24 });
  const imgY = useSpring(useTransform(my, [-0.5, 0.5], [-6, 6]), { stiffness: 180, damping: 24 });
  const glowX = useTransform(mx, [-0.5, 0.5], ["0%", "100%"]);
  const glowY = useTransform(my, [-0.5, 0.5], ["0%", "100%"]);
  const glow = useMotionTemplate`radial-gradient(280px circle at ${glowX} ${glowY}, rgba(242,181,68,0.22), transparent 65%)`;

  return (
    <motion.li
      data-pillar
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
      className="group relative overflow-hidden rounded-[28px] border border-vijaya-flagLine bg-white shadow-[0_22px_60px_-30px_rgba(28,51,40,0.25)] transition hover:border-vijaya-leafBright/45"
    >
      <motion.span aria-hidden className="pointer-events-none absolute inset-0 z-10" style={{ background: glow }} />
      <div className="relative aspect-[5/4] w-full overflow-hidden">
        <motion.div style={{ x: imgX, y: imgY }} className="absolute inset-0">
          <Image
            src={p.src}
            alt={p.en}
            fill
            className="scale-[1.1] object-cover transition duration-700 group-hover:scale-[1.18]"
            sizes="(min-width: 1024px) 280px, 50vw"
          />
        </motion.div>
        <div className={`pointer-events-none absolute inset-0 bg-gradient-to-t ${p.accent}`} />
        <span className="absolute left-4 top-4 z-10 inline-flex items-center gap-1 rounded-full border border-white/40 bg-black/25 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur">
          0{idx + 1}
        </span>
      </div>
      <motion.div style={{ translateZ: 30 }} className="relative p-5">
        <p className="font-display text-lg font-medium tracking-tight text-vijaya-inkWarm">
          {p.en}
        </p>
        <p className="te text-[11.5px] text-vijaya-leafDeepFlag/70">{p.te}</p>
        <p className="mt-2 text-[13px] leading-relaxed text-vijaya-inkWarm/65">
          {p.desc}
        </p>
        <span
          aria-hidden
          className="mt-4 block h-[2px] w-0 bg-vijaya-saffron transition-all duration-500 group-hover:w-full"
        />
      </motion.div>
    </motion.li>
  );
}

export default function TrustPillars() {
  const root = useRef<HTMLElement>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  const badge = useRef<HTMLSpanElement>(null);
  const teLine = useRef<HTMLParagraphElement>(null);
  const intro = useRef<HTMLParagraphElement>(null);

  const spotX = useMotionValue(-9999);
  const spotY = useMotionValue(-9999);
  const sx = useSpring(spotX, { stiffness: 180, damping: 24 });
  const sy = useSpring(spotY, { stiffness: 180, damping: 24 });
  const spotlight = useMotionTemplate`radial-gradient(440px circle at ${sx}px ${sy}px, rgba(46,122,71,0.08), transparent 60%)`;

  useEffect(() => {
    if (!root.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const headingEl = heading.current!;
      const lines = headingEl.querySelectorAll<HTMLElement>("[data-line]");
      lines.forEach((line) => {
        const html = line.innerHTML;
        const wrapped = html
          .split(/(<[^>]+>|\s+)/g)
          .map((seg) => {
            if (!seg || seg.startsWith("<") || /^\s+$/.test(seg)) return seg;
            return seg
              .split("")
              .map((ch) => `<span class="inline-block" data-ch>${ch === " " ? "&nbsp;" : ch}</span>`)
              .join("");
          })
          .join("");
        line.innerHTML = wrapped;
      });

      const chars = Array.from(headingEl.querySelectorAll<HTMLElement>("[data-ch]"));
      const cards = Array.from(root.current!.querySelectorAll<HTMLElement>("[data-pillar]"));

      gsap.fromTo(
        badge.current,
        { y: 16, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
          clearProps: "transform,opacity",
          scrollTrigger: { trigger: root.current!, start: "top 95%", once: true },
        },
      );

      gsap.fromTo(
        chars,
        { yPercent: 110, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.7,
          ease: "expo.out",
          stagger: 0.014,
          clearProps: "transform,opacity",
          scrollTrigger: { trigger: headingEl, start: "top 95%", once: true },
        },
      );

      gsap.fromTo(
        [teLine.current, intro.current],
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
          clearProps: "transform,opacity",
          scrollTrigger: { trigger: headingEl, start: "top 95%", once: true },
        },
      );

      gsap.fromTo(
        cards,
        { y: 64, opacity: 0, rotateX: -14 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.95,
          ease: "power3.out",
          stagger: 0.1,
          clearProps: "opacity",
          scrollTrigger: { trigger: cards[0], start: "top 90%", once: true },
        },
      );
    }, root);

    const refreshId = window.setTimeout(() => ScrollTrigger.refresh(), 300);

    return () => {
      window.clearTimeout(refreshId);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={root}
      className="relative overflow-hidden bg-white py-24"
      onMouseMove={(e) => {
        const r = root.current!.getBoundingClientRect();
        spotX.set(e.clientX - r.left);
        spotY.set(e.clientY - r.top);
      }}
      onMouseLeave={() => {
        spotX.set(-9999);
        spotY.set(-9999);
      }}
    >
      <motion.div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: spotlight }} />
      <div className="relative mx-auto max-w-7xl px-5" style={{ perspective: 1400 }}>
        <div className="grid items-end gap-8 md:grid-cols-[1.05fr_1fr] md:gap-14">
          <div>
            <span
              ref={badge}
              className="inline-flex items-center gap-2 rounded-full border border-vijaya-saffron/40 bg-vijaya-paperFlag px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-vijaya-saffron"
            >
              <motion.span
                className="h-1.5 w-1.5 rounded-full bg-vijaya-saffron"
                animate={{ scale: [1, 1.6, 1], opacity: [1, 0.6, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />
              Our Promise
            </span>
            <h2
              ref={heading}
              className="mt-4 font-display text-[48px] font-medium leading-[1.02] tracking-[-0.02em] text-vijaya-inkWarm sm:text-[60px]"
            >
              <span data-line className="block overflow-hidden pb-[0.08em]">Trust. Purity.</span>
              <span data-line className="block overflow-hidden pb-[0.08em]">
                <em
                  className="not-italic text-vijaya-leafDeepFlag"
                  style={{ fontStyle: "italic", fontWeight: 500 }}
                >
                  Quality.
                </em>
              </span>
            </h2>
            <p ref={teLine} className="te mt-3 text-base text-vijaya-leafDeepFlag/80">
              నమ్మకం · స్వచ్ఛత · నాణ్యత.
            </p>
          </div>
          <p ref={intro} className="max-w-md text-[15px] leading-relaxed text-vijaya-inkWarm/65">
            Four promises that have guided every drop of Vijaya for six decades —
            from the Krishna District pastures all the way to your kitchen.
          </p>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => (
            <PillarCard key={p.en} p={p} idx={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}
