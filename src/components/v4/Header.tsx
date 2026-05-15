"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV = [
  "Home",
  "Our Story",
  "Products",
  "Farmer Welfare",
  "Sustainability",
  "Network",
  "Contact",
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-30 transition",
        scrolled
          ? "border-b border-vijaya-flagLine bg-vijaya-paperFlag/95 shadow-soft backdrop-blur"
          : "border-b border-transparent bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex h-[78px] max-w-7xl items-center gap-6 px-5">
        <Link href="/v4" className="flex items-center gap-3">
          <Image src="/Krishna-Distric-Milk-Producers.png" alt="" width={44} height={44} className="h-10 w-auto" />
          <span className="te hidden text-[12px] leading-tight sm:block">
            <span className="block font-semibold text-vijaya-leafDeepFlag">కృష్ణా మిల్క్ యూనియన్</span>
            <span className="block text-[10px] tracking-wider text-vijaya-ochre">లక్షా యాభైవేల పాడిరైతు కుటుంబాల సంస్థ</span>
          </span>
          <Image src="/logo.png" alt="Vijaya" width={56} height={36} className="ml-2 h-9 w-auto" priority />
        </Link>

        <nav className="ml-auto hidden items-center gap-1 xl:flex">
          {NAV.map((n, i) => (
            <a
              key={n}
              href="#"
              className={[
                "relative rounded-full px-3.5 py-1.5 text-[13px] font-semibold tracking-tight transition",
                i === 0
                  ? "text-vijaya-leafDeepFlag"
                  : "text-vijaya-inkWarm/70 hover:text-vijaya-leafDeepFlag",
              ].join(" ")}
            >
              {n}
              {i === 0 && (
                <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-vijaya-leafBright" />
              )}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3 xl:ml-0">
          <span className="hidden rounded-full border border-vijaya-flagLine bg-white/60 px-3 py-1.5 text-[11px] font-semibold tracking-wider text-vijaya-leafDeepFlag md:inline">
            తెలుగు · EN
          </span>
          <a
            href="#distributor"
            className="group inline-flex h-9 items-center gap-2 rounded-full bg-vijaya-leafDeepFlag px-4 text-[12.5px] font-semibold tracking-wide text-white shadow-[0_8px_18px_-10px_rgba(20,62,38,0.55)] transition hover:bg-vijaya-leafBright"
          >
            <span>Become a Distributor</span>
            <span aria-hidden className="transition group-hover:translate-x-0.5">→</span>
          </a>
        </div>
      </div>
    </header>
  );
}
