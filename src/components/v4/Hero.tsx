"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

export default function Hero() {
  const root = useRef<HTMLDivElement>(null);
  const bgImg = useRef<HTMLDivElement>(null);
  const grain = useRef<HTMLDivElement>(null);
  const glow = useRef<HTMLDivElement>(null);
  const badge = useRef<HTMLDivElement>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  const teLine = useRef<HTMLParagraphElement>(null);
  const body = useRef<HTMLParagraphElement>(null);
  const ctaRow = useRef<HTMLDivElement>(null);
  const pills = useRef<HTMLDivElement>(null);
  const badge60 = useRef<HTMLDivElement>(null);
  const counterNum = useRef<HTMLSpanElement>(null);
  const magnetBtn = useRef<HTMLAnchorElement>(null);
  const scrollCue = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!root.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const headingEl = heading.current!;
      const text = headingEl.innerText;
      const lines = headingEl.querySelectorAll<HTMLElement>("[data-line]");
      lines.forEach((line) => {
        const html = line.innerHTML;
        const wrapped = html
          .split(/(<[^>]+>|\s+)/g)
          .map((seg) => {
            if (!seg || seg.startsWith("<") || /^\s+$/.test(seg)) return seg;
            return seg
              .split("")
              .map((ch) => `<span class="inline-block" data-ch>${ch}</span>`)
              .join("");
          })
          .join("");
        line.innerHTML = wrapped;
      });
      void text;

      const chars = headingEl.querySelectorAll<HTMLElement>("[data-ch]");
      const trustPills = pills.current?.querySelectorAll<HTMLElement>("span") ?? [];

      const ctaChildren = ctaRow.current
        ? Array.from(ctaRow.current.children) as HTMLElement[]
        : [];

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(badge.current, { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, clearProps: "transform" })
        .fromTo(
          chars,
          { yPercent: 110, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.85, stagger: 0.012, ease: "expo.out", clearProps: "transform" },
          "-=0.25",
        )
        .fromTo(teLine.current, { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, clearProps: "transform" }, "-=0.55")
        .fromTo(body.current, { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, clearProps: "transform" }, "-=0.35")
        .fromTo(
          ctaChildren,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, clearProps: "opacity" },
          "-=0.3",
        )
        .fromTo(
          trustPills,
          { y: 14, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.45, stagger: 0.06, clearProps: "transform,opacity" },
          "-=0.25",
        )
        .fromTo(
          badge60.current,
          { scale: 0.6, rotate: -20, opacity: 0 },
          { scale: 1, rotate: 0, opacity: 1, duration: 0.7, ease: "back.out(1.7)" },
          "-=0.55",
        );

      gsap.to(badge60.current, {
        y: -12,
        rotate: 4,
        duration: 3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1.2,
      });

      const counterObj = { v: 0 };
      gsap.to(counterObj, {
        v: 60,
        duration: 2,
        ease: "power2.out",
        delay: 0.9,
        onUpdate: () => {
          if (counterNum.current)
            counterNum.current.textContent = Math.round(counterObj.v).toString();
        },
      });

      gsap.fromTo(
        bgImg.current,
        { scale: 1.18 },
        {
          scale: 1,
          duration: 1.6,
          ease: "power2.out",
        },
      );

      gsap.to(bgImg.current, {
        yPercent: 18,
        ease: "none",
        scrollTrigger: {
          trigger: root.current!,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(badge60.current, {
        yPercent: 60,
        rotate: 18,
        ease: "none",
        scrollTrigger: {
          trigger: root.current!,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to([badge.current, heading.current, teLine.current, body.current, ctaRow.current, pills.current], {
        y: -40,
        opacity: 0.4,
        ease: "none",
        scrollTrigger: {
          trigger: root.current!,
          start: "top top",
          end: "bottom 30%",
          scrub: true,
        },
      });

      gsap.to(scrollCue.current, {
        opacity: 0,
        y: 30,
        ease: "none",
        scrollTrigger: {
          trigger: root.current!,
          start: "top top",
          end: "20% top",
          scrub: true,
        },
      });

      const moveBg = gsap.quickTo(bgImg.current, "x", { duration: 0.9, ease: "power2.out" });
      const moveBgY = gsap.quickTo(bgImg.current, "y", { duration: 0.9, ease: "power2.out" });
      const moveGlow = gsap.quickTo(glow.current, "x", { duration: 0.5, ease: "power3.out" });
      const moveGlowY = gsap.quickTo(glow.current, "y", { duration: 0.5, ease: "power3.out" });
      const onMove = (e: MouseEvent) => {
        const r = root.current!.getBoundingClientRect();
        const nx = (e.clientX - r.left) / r.width - 0.5;
        const ny = (e.clientY - r.top) / r.height - 0.5;
        moveBg(nx * -34);
        moveBgY(ny * -22);
        moveGlow(e.clientX - r.left);
        moveGlowY(e.clientY - r.top);
      };
      root.current!.addEventListener("mousemove", onMove);

      const btn = magnetBtn.current;
      const magX = gsap.quickTo(btn, "x", { duration: 0.4, ease: "power3.out" });
      const magY = gsap.quickTo(btn, "y", { duration: 0.4, ease: "power3.out" });
      const onBtnMove = (e: MouseEvent) => {
        if (!btn) return;
        const r = btn.getBoundingClientRect();
        magX((e.clientX - (r.left + r.width / 2)) * 0.35);
        magY((e.clientY - (r.top + r.height / 2)) * 0.6);
      };
      const onBtnLeave = () => {
        magX(0);
        magY(0);
      };
      btn?.addEventListener("mousemove", onBtnMove);
      btn?.addEventListener("mouseleave", onBtnLeave);

      gsap.to(grain.current, {
        backgroundPosition: "200px 100px",
        duration: 8,
        repeat: -1,
        ease: "none",
      });

      return () => {
        root.current?.removeEventListener("mousemove", onMove);
        btn?.removeEventListener("mousemove", onBtnMove);
        btn?.removeEventListener("mouseleave", onBtnLeave);
      };
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
      className="relative isolate overflow-hidden bg-vijaya-paperFlag"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 80% 10%, rgba(242,181,68,0.22), transparent 55%), radial-gradient(ellipse at 0% 80%, rgba(46,122,71,0.12), transparent 50%), linear-gradient(180deg, #FBF6E7 0%, #F4ECCC 100%)",
        }}
      />

      <div
        ref={bgImg}
        className="absolute inset-0 -z-10 will-change-transform"
        style={{ transformOrigin: "center" }}
      >
        <video
          src="/v4/hero-krishna.mp4"
          poster="/v4/hero-krishna.png"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover object-right opacity-90"
        />
      </div>
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(90deg, rgba(251,246,231,0.96) 0%, rgba(251,246,231,0.82) 32%, rgba(251,246,231,0.4) 56%, rgba(251,246,231,0.1) 80%, rgba(251,246,231,0) 100%)",
        }}
      />

      <div
        ref={glow}
        aria-hidden
        className="pointer-events-none absolute -z-10 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 mix-blend-multiply blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(232,155,43,0.35), rgba(232,155,43,0) 70%)",
          left: 0,
          top: 0,
        }}
      />

      <div
        ref={grain}
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.55'/></svg>\")",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-24 md:grid-cols-[1.1fr_1fr] md:gap-10 md:pb-32 md:pt-28">
        <div className="flex flex-col justify-center">
          <div ref={badge} className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-vijaya-saffron/40 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-vijaya-saffron backdrop-blur">
              <motion.span
                className="h-1.5 w-1.5 rounded-full bg-vijaya-saffron"
                animate={{ scale: [1, 1.6, 1], opacity: [1, 0.6, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />
              Serving Since 1965 · 60 Years
            </span>
            <span className="te hidden text-[12px] font-semibold text-vijaya-leafDeepFlag md:inline">
              · అరవైయేళ్ళ ప్రయాణం
            </span>
          </div>

          <h1
            ref={heading}
            className="mt-6 font-display text-[60px] font-medium leading-[0.96] tracking-[-0.025em] text-vijaya-inkWarm sm:text-[88px]"
          >
            <span data-line className="block overflow-hidden pb-[0.08em]">From our farmers</span>
            <span data-line className="block overflow-hidden pb-[0.08em]">
              to your{" "}
              <em
                className="not-italic text-vijaya-leafDeepFlag"
                style={{ fontStyle: "italic", fontWeight: 500 }}
              >
                families.
              </em>
            </span>
          </h1>

          <p
            ref={teLine}
            className="te mt-5 max-w-md text-[18px] leading-snug text-vijaya-leafDeepFlag/85"
          >
            మా రైతుల చేతుల నుండి · మీ కుటుంబాల హృదయాలకు.
          </p>

          <p
            ref={body}
            className="mt-5 max-w-md text-[15.5px] leading-relaxed text-vijaya-inkWarm/75"
          >
            Krishna District Milk Producers&apos; Mutually Aided Co-operative
            Union — built by 50,000+ farmer families, celebrating six decades
            of trust, purity and care.
          </p>

          <div ref={ctaRow} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              ref={magnetBtn}
              href="#products"
              className="group inline-flex items-center gap-2 rounded-full bg-vijaya-leafDeepFlag px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_30px_-14px_rgba(20,62,38,0.7)] transition hover:bg-vijaya-leafBright"
            >
              Explore Our Collection
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
            <a
              href="#welfare"
              className="inline-flex items-center gap-2 rounded-full border border-vijaya-leafDeepFlag/30 bg-white/70 px-6 py-3.5 text-sm font-semibold text-vijaya-leafDeepFlag backdrop-blur transition hover:border-vijaya-leafDeepFlag hover:bg-white"
            >
              Welfare Programmes
            </a>
          </div>

          <div
            ref={pills}
            className="mt-12 flex flex-wrap items-center gap-3 text-[12px] uppercase tracking-[0.18em] text-vijaya-inkWarm/55"
          >
            <span className="rounded-full border border-vijaya-flagLine bg-white/60 px-3 py-1.5">Trusted by 4M+ families</span>
            <span className="rounded-full border border-vijaya-flagLine bg-white/60 px-3 py-1.5">2M+ litres / day</span>
            <span className="rounded-full border border-vijaya-flagLine bg-white/60 px-3 py-1.5">100+ towns served</span>
          </div>
        </div>

        <div className="relative hidden md:block">
          <div
            ref={badge60}
            className="absolute -right-4 top-12 grid h-32 w-32 place-items-center rounded-full border-2 border-vijaya-saffron bg-white/95 shadow-[0_18px_44px_-22px_rgba(232,155,43,0.6)]"
          >
            <div className="text-center leading-none">
              <p className="font-display text-[40px] font-medium leading-none text-vijaya-vermilion">
                <span ref={counterNum}>0</span>
              </p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-vijaya-ochre">Years</p>
              <p className="te mt-0.5 text-[10px] text-vijaya-leafDeepFlag">అరవైయేళ్ళ</p>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={scrollCue}
        className="absolute bottom-16 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-vijaya-inkWarm/55">
          Scroll
        </span>
        <motion.span
          className="block h-9 w-[1px] bg-gradient-to-b from-vijaya-leafDeepFlag/70 to-transparent"
          animate={{ scaleY: [0.3, 1, 0.3], originY: 0 }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />
      </div>

      <svg
        aria-hidden
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
        className="block h-12 w-full text-white"
      >
        <path
          fill="currentColor"
          d="M0 80 V 30 Q 60 0 120 30 T 240 30 T 360 30 T 480 30 T 600 30 T 720 30 T 840 30 T 960 30 T 1080 30 T 1200 30 V80 Z"
        />
      </svg>
    </section>
  );
}
