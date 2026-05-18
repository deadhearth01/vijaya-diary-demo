"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const VERSE = [
  "అరవైయేళ్ళ ప్రయాణం",
  "నెరవేర్చిన ప్రమాణం",
  "చూస్తున్నాం పాడిరైతుల ప్రమోదం",
  "పాడి సహకార రంగంలో ప్రభంజనం",
];

export default function FounderQuote() {
  const root = useRef<HTMLDivElement>(null);
  const bg = useRef<HTMLDivElement>(null);
  const verseList = useRef<HTMLOListElement>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  const sigCard = useRef<HTMLDivElement>(null);
  const body = useRef<HTMLParagraphElement>(null);

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
            if (!seg) return seg;
            if (seg.startsWith("<") || /^\s+$/.test(seg)) return seg;
            return seg
              .split(/(\s+)/)
              .map((w) =>
                /^\s+$/.test(w) || !w
                  ? w
                  : `<span class="inline-block overflow-hidden align-bottom"><span class="inline-block" data-word>${w}</span></span>`,
              )
              .join(" ");
          })
          .join("");
        line.innerHTML = wrapped;
      });

      const words = Array.from(
        headingEl.querySelectorAll<HTMLElement>("[data-word]"),
      );
      gsap.fromTo(
        words,
        { yPercent: 110, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.9,
          ease: "expo.out",
          stagger: 0.06,
          clearProps: "transform,opacity",
          scrollTrigger: { trigger: heading.current!, start: "top 90%", once: true },
        },
      );

      gsap.fromTo(
        bg.current,
        { scale: 1.25, x: -20, y: -10 },
        {
          scale: 1,
          x: 0,
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: root.current!,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );

      gsap.to(bg.current, {
        filter: "brightness(1.08) saturate(1.1)",
        duration: 6,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      const items = verseList.current?.querySelectorAll<HTMLElement>("li") ?? [];
      items.forEach((li, i) => {
        gsap.fromTo(
          li,
          { x: -28, opacity: 0, filter: "blur(6px)" },
          {
            x: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.6,
            delay: i * 0.08,
            ease: "power3.out",
            clearProps: "transform,opacity,filter",
            scrollTrigger: { trigger: verseList.current!, start: "top 90%", once: true },
          },
        );
      });

      const railEl = verseList.current?.querySelector<HTMLElement>("[data-rail]");
      if (railEl) {
        gsap.fromTo(
          railEl,
          { scaleY: 0, transformOrigin: "top" },
          {
            scaleY: 1,
            duration: 1.2,
            ease: "power2.out",
            clearProps: "transform",
            scrollTrigger: { trigger: verseList.current!, start: "top 92%", once: true },
          },
        );
      }

      gsap.fromTo(
        body.current,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          clearProps: "transform,opacity",
          scrollTrigger: { trigger: body.current!, start: "top 95%", once: true },
        },
      );

      gsap.fromTo(
        sigCard.current,
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          clearProps: "transform,opacity",
          scrollTrigger: { trigger: sigCard.current!, start: "top 95%", once: true },
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
      className="relative isolate overflow-hidden bg-vijaya-paperFlag"
    >
      <div ref={bg} className="absolute inset-0 -z-10 will-change-transform">
        <Image
          src="/v4/founder-village.png"
          alt=""
          fill
          aria-hidden
          sizes="100vw"
          className="object-cover object-right"
        />
      </div>
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(90deg, rgba(251,246,231,0.96) 0%, rgba(251,246,231,0.85) 30%, rgba(251,246,231,0.45) 55%, rgba(251,246,231,0.15) 78%, rgba(251,246,231,0) 100%)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-[1fr_1fr] md:py-32">
        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[40px] bg-white/55 backdrop-blur-sm md:hidden" />
          <span className="inline-flex items-center gap-2 rounded-full border border-vijaya-saffron/40 bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-vijaya-saffron">
            <span className="h-1.5 w-1.5 rounded-full bg-vijaya-saffron" />
            Founder&apos;s Message
          </span>

          <h2
            ref={heading}
            className="mt-5 font-display text-[44px] font-medium leading-[1.05] tracking-[-0.02em] text-vijaya-inkWarm sm:text-[56px]"
          >
            <span data-line className="block">Sixty years of</span>
            <span data-line className="block">
              <em
                className="not-italic text-vijaya-leafDeepFlag"
                style={{ fontStyle: "italic", fontWeight: 500 }}
              >
                shared promise.
              </em>
            </span>
          </h2>

          <ol
            ref={verseList}
            className="te relative mt-8 space-y-2.5 pl-5"
          >
            <span
              data-rail
              aria-hidden
              className="absolute left-0 top-0 block h-full w-[3px] rounded-full bg-vijaya-saffron/60"
            />
            {VERSE.map((line, i) => (
              <li
                key={i}
                className="font-display text-[20px] font-medium leading-snug text-vijaya-leafDeepFlag sm:text-[22px]"
              >
                {line}
              </li>
            ))}
          </ol>

          <p
            ref={body}
            className="mt-7 max-w-md text-[14.5px] leading-relaxed text-vijaya-inkWarm/70"
          >
            What began in 1965 as a small group of farmer families pooling
            milk has grown into one of India&apos;s most respected
            co-operative unions — without ever forgetting the village paths
            it started on.
          </p>

          <div ref={sigCard} className="mt-8 flex items-center gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-full border border-vijaya-saffron/40 bg-white text-vijaya-vermilion font-display font-medium">
              SR
            </div>
            <div>
              <p className="font-display text-lg font-medium text-vijaya-inkWarm">
                Sri Subba Rao
              </p>
              <p className="te text-[12px] text-vijaya-leafDeepFlag">
                ఛైర్మన్ · కృష్ణా మిల్క్ యూనియన్
              </p>
              <p className="text-[11px] uppercase tracking-[0.18em] text-vijaya-inkWarm/55">
                Chairman, Krishna Milk Union
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
