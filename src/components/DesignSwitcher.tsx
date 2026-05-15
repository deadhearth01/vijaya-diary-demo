"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { DESIGNS, inr, type DesignTier } from "@/lib/designs";

export default function DesignSwitcher({ current }: { current: DesignTier["id"] }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<DesignTier["id"]>(current);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const activeTier = DESIGNS.find((d) => d.id === active)!;

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 bottom-5 z-40 flex justify-center px-3">
        <div className="pointer-events-auto flex items-center gap-1 rounded-full border border-vijaya-border bg-white/95 px-1.5 py-1.5 shadow-card backdrop-blur">
          <span className="hidden pl-3 pr-2 text-[11px] font-medium uppercase tracking-[0.14em] text-vijaya-ink/55 sm:inline">
            Designs
          </span>
          {DESIGNS.map((d) => {
            const isCurrent = d.id === current;
            return (
              <button
                key={d.id}
                onClick={() => {
                  setActive(d.id);
                  setOpen(true);
                }}
                className={[
                  "group relative flex items-center gap-2 rounded-full px-3.5 py-2 text-sm transition",
                  isCurrent
                    ? "bg-vijaya-ink text-white"
                    : "text-vijaya-ink/70 hover:bg-vijaya-sand",
                ].join(" ")}
                aria-label={`Open ${d.label}`}
              >
                <span className="font-semibold tracking-tight">
                  {d.id.toUpperCase()}
                </span>
                {isCurrent && (
                  <span className="absolute -top-1 right-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-vijaya-ink/45 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              role="dialog"
              aria-label="Design tiers"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="absolute inset-x-2 bottom-2 mx-auto max-w-5xl rounded-3xl border border-vijaya-border bg-vijaya-milk p-5 shadow-card sm:inset-x-4 sm:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p
                    className="text-[11px] font-medium uppercase tracking-[0.18em]"
                    style={{ color: activeTier.accent }}
                  >
                    {activeTier.vibe}
                  </p>
                  <h3 className="mt-1 font-serif text-2xl text-vijaya-ink sm:text-3xl">
                    {activeTier.label}
                  </h3>
                  <p className="mt-1 text-sm text-vijaya-ink/55">
                    {activeTier.tagline}
                  </p>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-vijaya-border bg-white px-3 py-1.5 text-xs font-medium text-vijaya-ink/70 hover:bg-vijaya-sand"
                >
                  Close ✕
                </button>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {DESIGNS.map((d) => (
                  <button
                    key={d.id}
                    onClick={() => setActive(d.id)}
                    className={[
                      "rounded-full border px-3 py-1.5 text-xs font-medium transition",
                      d.id === active
                        ? "border-vijaya-ink bg-vijaya-ink text-white"
                        : "border-vijaya-border bg-white text-vijaya-ink/70 hover:bg-vijaya-sand",
                    ].join(" ")}
                  >
                    {d.id.toUpperCase()} · {inr(d.price)}
                  </button>
                ))}
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-[1.4fr_1fr]">
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-vijaya-ink/50">
                    What this design says
                  </p>
                  <p className="mt-2 text-[15px] leading-relaxed text-vijaya-ink/80">
                    {activeTier.message}
                  </p>

                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {activeTier.signature.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 rounded-xl border border-vijaya-border bg-white px-3 py-2 text-[13px] text-vijaya-ink/80"
                      >
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ background: activeTier.accent }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col items-start justify-between gap-3 rounded-2xl border border-vijaya-border bg-vijaya-cream p-5">
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-vijaya-ink/50">
                      One-time build
                    </p>
                    <p className="mt-1 font-serif text-3xl text-vijaya-ink">
                      {inr(activeTier.price)}
                    </p>
                    <p className="mt-1 text-xs text-vijaya-ink/55">
                      Excluding GST
                    </p>
                  </div>

                  {activeTier.id === current ? (
                    <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      You are viewing this
                    </span>
                  ) : activeTier.available ? (
                    <Link
                      href={activeTier.href}
                      className="inline-flex items-center gap-2 rounded-full bg-vijaya-red px-4 py-2 text-sm font-medium text-white hover:bg-vijaya-redDeep"
                    >
                      View {activeTier.id.toUpperCase()} →
                    </Link>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-full border border-vijaya-border bg-white px-4 py-2 text-xs font-medium text-vijaya-ink/55">
                      Preview coming next
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-6 flex items-start gap-3 rounded-2xl border border-amber-200/70 bg-amber-50/70 p-4">
                <span
                  aria-hidden
                  className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-amber-100 text-amber-700"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4" />
                    <path d="M12 16h.01" />
                  </svg>
                </span>
                <div className="text-[12.5px] leading-relaxed text-amber-900/85">
                  <p>
                    <span className="font-semibold">A small note —</span> all of
                    these tier pages are demo previews only. The actual website
                    delivered to you will look noticeably better — sharper
                    visuals, smoother animations, custom illustrations and
                    refined detail throughout. Think of this as the layout
                    map, not the finished build.
                  </p>
                  {(activeTier.id === "v3" || activeTier.id === "v4") && (
                    <>
                      <p className="mt-2 border-t border-amber-200/70 pt-2">
                        <span className="font-semibold">For V3 and V4 —</span>{" "}
                        the production website will be significantly more
                        interactive and animated than this demo: hover states,
                        scroll-driven motion, micro-interactions, transitions
                        between sections and animated illustrations. This demo
                        is intentionally static so the layout and brand
                        direction stay easy to read.
                      </p>
                      <p className="mt-2 border-t border-amber-200/70 pt-2">
                        <span className="font-semibold">Admin panel —</span>{" "}
                        V3 and V4 also include a dedicated admin panel for
                        the team to log in and: swap product images, edit
                        product copy, view contact-form submissions, manage
                        distributor enquiry logs and export inquiry lists.
                        Built as a separate authenticated dashboard alongside
                        the public site.
                      </p>
                      <p className="mt-2 border-t border-amber-200/70 pt-2">
                        <span className="font-semibold">Maintenance —</span>{" "}
                        the maintenance retainer is the same across all four
                        tiers; only the one-time build cost differs.
                      </p>
                    </>
                  )}
                </div>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
