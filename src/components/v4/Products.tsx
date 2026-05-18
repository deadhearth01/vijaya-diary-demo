"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

type CategoryId = "milk" | "curd" | "ghee" | "paneer" | "sweets" | "beverages";

type Product = {
  name: string;
  te: string;
  src: string;
  tag?: string;
  cat: CategoryId;
};

const PRODUCTS: Product[] = [
  { cat: "milk", name: "Full Cream Milk", te: "ఫుల్ క్రీం పాలు", tag: "Fat 6.0%", src: "/v4/products/full-cream-milk.png" },
  { cat: "milk", name: "Pasteurised Milk", te: "పాశ్చరైజ్డ్ పాలు", tag: "Daily fresh", src: "/v4/products/pasteurized-full-cream-milk.png" },
  { cat: "milk", name: "Toned Milk", te: "టోన్డ్ పాలు", tag: "Fat 3.0%", src: "/v4/products/toned-milk.png" },
  { cat: "milk", name: "Badam Milk", te: "బాదం పాలు", tag: "Flavoured", src: "/v4/products/badam-milk.png" },
  { cat: "milk", name: "Chocolate Milk", te: "చాక్లెట్ మిల్క్", tag: "Kids' favourite", src: "/v4/products/chocolate-milk.png" },
  { cat: "curd", name: "Gold Curd", te: "గోల్డ్ పెరుగు", tag: "Premium", src: "/v4/products/curd.png" },
  { cat: "ghee", name: "Cow Ghee", te: "ఆవు నెయ్యి", tag: "Granular", src: "/v4/products/ghee.png" },
  { cat: "paneer", name: "Fresh Paneer", te: "పనీర్", tag: "Soft fresh", src: "/v4/products/paneer.png" },
  { cat: "sweets", name: "Doodh Peda", te: "దూద్ పేడ", tag: "Classic", src: "/v4/products/doode-pedha.png" },
  { cat: "sweets", name: "Gulab Jamun", te: "గులాబ్ జామూన్", tag: "Festive", src: "/v4/products/gulab-jamun.png" },
  { cat: "sweets", name: "Butter Burfi", te: "బటర్ బర్ఫీ", tag: "Rich", src: "/v4/products/butter-burfi.png" },
  { cat: "sweets", name: "Chocolate Burfi", te: "చాక్లెట్ బర్ఫీ", tag: "New", src: "/v4/products/chocolate-burfi.png" },
  { cat: "sweets", name: "Kalakand", te: "కలాకండ్", tag: "Traditional", src: "/v4/products/kalaland.png" },
  { cat: "sweets", name: "Dates Khoa", te: "డేట్స్ ఖోవా", tag: "Wholesome", src: "/v4/products/dates-khoa.png" },
  { cat: "sweets", name: "Jowar Laddu", te: "జొన్న లడ్డు", tag: "Millet", src: "/v4/products/jowar-laddu.png" },
  { cat: "sweets", name: "Ragi Laddu", te: "రాగి లడ్డు", tag: "Millet", src: "/v4/products/ragi-laddu.png" },
  { cat: "sweets", name: "Korra Laddu", te: "కొర్ర లడ్డు", tag: "Millet", src: "/v4/products/korra-laddu.png" },
  { cat: "sweets", name: "Mixed Millet Laddu", te: "మిల్లెట్ లడ్డు", tag: "Millet", src: "/v4/products/mixed-millets-laddu.png" },
  { cat: "sweets", name: "Kesar Pista Kulfi", te: "కేసర్ పిస్తా కుల్ఫీ", tag: "Frozen", src: "/v4/products/kesar-pista-coolfi.png" },
  { cat: "sweets", name: "Malai Kulfi", te: "మలై కుల్ఫీ", tag: "Frozen", src: "/v4/products/malai-coolfi.png" },
  { cat: "beverages", name: "Butter Milk", te: "మజ్జిగ", tag: "Spiced", src: "/v4/products/butter-milk.png" },
  { cat: "beverages", name: "Lassi", te: "లస్సీ", tag: "Sweet", src: "/v4/products/lassy.png" },
  { cat: "beverages", name: "Mango Lassi", te: "మ్యాంగో లస్సీ", tag: "Seasonal", src: "/v4/products/mango-lassi.png" },
  { cat: "beverages", name: "Apple Juice", te: "ఆపిల్ జ్యూస్", tag: "Fruit", src: "/v4/products/apple-flavour-juice.png" },
  { cat: "beverages", name: "Orange Juice", te: "ఆరెంజ్ జ్యూస్", tag: "Fruit", src: "/v4/products/orange-flavour-juice.png" },
];

const CATEGORIES: {
  id: CategoryId;
  name: string;
  te: string;
  blurb: string;
  accent: string;
  preview: string;
}[] = [
  { id: "milk", name: "Milk", te: "పాలు", blurb: "Daily-fresh, six fat profiles.", accent: "from-amber-100 to-amber-50", preview: "/v4/products/full-cream-milk.png" },
  { id: "curd", name: "Curd", te: "పెరుగు", blurb: "Set thick. Stay cool.", accent: "from-lime-100 to-emerald-50", preview: "/v4/products/curd.png" },
  { id: "ghee", name: "Ghee", te: "నెయ్యి", blurb: "Granular. Golden. Pure.", accent: "from-yellow-100 to-amber-50", preview: "/v4/products/ghee.png" },
  { id: "paneer", name: "Paneer", te: "పనీర్", blurb: "Soft fresh blocks.", accent: "from-stone-100 to-white", preview: "/v4/products/paneer.png" },
  { id: "sweets", name: "Sweets", te: "మిఠాయిలు", blurb: "Festive · classic · millet.", accent: "from-rose-100 to-orange-50", preview: "/v4/products/doode-pedha.png" },
  { id: "beverages", name: "Beverages", te: "పానీయాలు", blurb: "Lassi, juice, butter milk.", accent: "from-sky-100 to-cyan-50", preview: "/v4/products/lassy.png" },
];

function CategoryCard({
  cat,
  count,
  onPick,
}: {
  cat: (typeof CATEGORIES)[number];
  count: number;
  onPick: () => void;
}) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 220, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 220, damping: 18 });
  const glowX = useTransform(mx, [-0.5, 0.5], ["0%", "100%"]);
  const glowY = useTransform(my, [-0.5, 0.5], ["0%", "100%"]);
  const glow = useMotionTemplate`radial-gradient(280px circle at ${glowX} ${glowY}, rgba(242,181,68,0.28), transparent 60%)`;

  return (
    <motion.button
      layout
      layoutId={`cat-${cat.id}`}
      data-anim-card
      onClick={onPick}
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
      className={`group relative overflow-hidden rounded-[28px] border border-vijaya-flagLine bg-gradient-to-br ${cat.accent} p-6 text-left shadow-[0_24px_60px_-30px_rgba(28,51,40,0.25)]`}
      whileTap={{ scale: 0.97 }}
    >
      <motion.span aria-hidden className="pointer-events-none absolute inset-0" style={{ background: glow }} />
      <div className="relative flex items-start justify-between">
        <div>
          <p className="font-display text-[26px] font-medium leading-none tracking-tight text-vijaya-inkWarm">
            {cat.name}
          </p>
          <p className="te mt-1 text-[12.5px] text-vijaya-leafDeepFlag/85">{cat.te}</p>
        </div>
        <span className="rounded-full bg-white/80 px-2.5 py-1 text-[11px] font-semibold text-vijaya-leafDeepFlag backdrop-blur">
          {count}
        </span>
      </div>
      <motion.div
        style={{ translateZ: 30 }}
        className="relative mx-auto mt-5 aspect-square w-[68%]"
      >
        <Image
          src={cat.preview}
          alt=""
          fill
          sizes="(min-width: 1024px) 240px, 40vw"
          className="object-contain drop-shadow-[0_18px_24px_rgba(28,51,40,0.18)] transition duration-500 group-hover:scale-[1.06]"
        />
      </motion.div>
      <div className="relative mt-5 flex items-center justify-between text-[13px] text-vijaya-inkWarm/70">
        <span>{cat.blurb}</span>
        <span className="inline-flex items-center gap-1 font-semibold text-vijaya-leafDeepFlag transition group-hover:gap-2">
          View <span aria-hidden>→</span>
        </span>
      </div>
    </motion.button>
  );
}

function ProductCard({ p, i }: { p: Product; i: number }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 240, damping: 20 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 240, damping: 20 });

  return (
    <motion.article
      data-anim-card
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ delay: i * 0.04, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
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
      className="group relative overflow-hidden rounded-[24px] border border-vijaya-flagLine bg-white p-4 shadow-[0_18px_40px_-24px_rgba(28,51,40,0.2)]"
    >
      <span
        aria-hidden
        className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-vijaya-leafLight/70 transition group-hover:scale-110 group-hover:bg-vijaya-saffron/15"
      />
      {p.tag && (
        <span className="absolute left-4 top-4 z-10 inline-flex items-center gap-1 rounded-full border border-vijaya-saffron/30 bg-white/85 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-vijaya-saffron backdrop-blur">
          {p.tag}
        </span>
      )}
      <motion.div style={{ translateZ: 24 }} className="relative mx-auto aspect-square w-full">
        <Image
          src={p.src}
          alt={p.name}
          fill
          className="object-contain transition duration-500 group-hover:scale-[1.08]"
          sizes="(min-width: 1024px) 220px, 45vw"
        />
      </motion.div>
      <div className="relative mt-4">
        <p className="font-display text-[15px] font-medium leading-tight tracking-tight text-vijaya-inkWarm">
          {p.name}
        </p>
        <p className="te text-[11.5px] text-vijaya-leafDeepFlag/80">{p.te}</p>
      </div>
    </motion.article>
  );
}

export default function Products() {
  const [active, setActive] = useState<CategoryId | null>(null);
  const root = useRef<HTMLElement>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  const intro = useRef<HTMLParagraphElement>(null);
  const teLine = useRef<HTMLParagraphElement>(null);
  const badge = useRef<HTMLSpanElement>(null);

  const spotX = useMotionValue(-9999);
  const spotY = useMotionValue(-9999);
  const sx = useSpring(spotX, { stiffness: 180, damping: 24 });
  const sy = useSpring(spotY, { stiffness: 180, damping: 24 });
  const spotlight = useMotionTemplate`radial-gradient(420px circle at ${sx}px ${sy}px, rgba(242,181,68,0.12), transparent 60%)`;

  const counts = useMemo(() => {
    const m: Record<CategoryId, number> = {
      milk: 0, curd: 0, ghee: 0, paneer: 0, sweets: 0, beverages: 0,
    };
    PRODUCTS.forEach((p) => (m[p.cat] += 1));
    return m;
  }, []);

  const items = useMemo(
    () => (active ? PRODUCTS.filter((p) => p.cat === active) : []),
    [active],
  );

  const activeCat = active ? CATEGORIES.find((c) => c.id === active)! : null;

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

      const chars = headingEl.querySelectorAll<HTMLElement>("[data-ch]");

      gsap.from(badge.current, {
        y: 16,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current!, start: "top 80%", once: true },
      });

      gsap.from(chars, {
        yPercent: 110,
        opacity: 0,
        duration: 0.7,
        ease: "expo.out",
        stagger: 0.014,
        scrollTrigger: { trigger: headingEl, start: "top 82%", once: true },
      });

      gsap.from([teLine.current, intro.current], {
        y: 18,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: headingEl, start: "top 80%", once: true },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!root.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const id = requestAnimationFrame(() => {
      const cards = root.current!.querySelectorAll<HTMLElement>("[data-anim-card]");
      if (!cards.length) return;
      gsap.from(cards, {
        y: 56,
        opacity: 0,
        rotateX: -14,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: { trigger: cards[0], start: "top 92%", once: true },
      });
    });
    return () => cancelAnimationFrame(id);
  }, [active]);

  return (
    <section
      ref={root}
      id="products"
      className="relative overflow-hidden bg-vijaya-paperFlag py-24"
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
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-vijaya-saffron/40 to-transparent"
      />
      <div className="relative mx-auto max-w-7xl px-5" style={{ perspective: 1400 }}>
        <div className="grid items-end gap-8 md:grid-cols-[1.05fr_1fr] md:gap-14">
          <div>
            <span
              ref={badge}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-vijaya-saffron/40 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-vijaya-saffron"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-vijaya-saffron" />
              The Collection
            </span>
            <h2
              ref={heading}
              className="mt-4 font-display text-[48px] font-medium leading-[1.02] tracking-[-0.02em] text-vijaya-inkWarm sm:text-[60px]"
            >
              <span data-line className="block overflow-hidden pb-[0.08em]">Goodness in</span>
              <span data-line className="block overflow-hidden pb-[0.08em]">
                <em
                  className="not-italic pr-3 text-vijaya-leafDeepFlag"
                  style={{ fontStyle: "italic", fontWeight: 500 }}
                >
                  Every Drop.
                </em>
              </span>
            </h2>
            <p ref={teLine} className="te mt-3 text-base text-vijaya-leafDeepFlag/75">
              ప్రతి చుక్కలో మంచితనం · ప్రతి కుటుంబానికి శ్రద్ధ.
            </p>
          </div>
          <p ref={intro} className="max-w-md text-[15px] leading-relaxed text-vijaya-inkWarm/65">
            Twenty-five products across six categories — pasteurised within
            hours, packed with care, and rooted in six decades of Krishna
            District craft.
          </p>
        </div>

        <AnimatePresence mode="wait" initial={false}>
          {!active ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {CATEGORIES.map((c) => (
                <CategoryCard
                  key={c.id}
                  cat={c}
                  count={counts[c.id]}
                  onPick={() => setActive(c.id)}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key={`cat-${active}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-12"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => setActive(null)}
                  className="inline-flex items-center gap-2 rounded-full border border-vijaya-flagLine bg-white px-4 py-2 text-[12.5px] font-semibold text-vijaya-inkWarm/75 transition hover:border-vijaya-leafBright hover:text-vijaya-leafDeepFlag"
                >
                  <span aria-hidden>←</span> All categories
                </button>
                <div className="flex items-baseline gap-3">
                  <motion.h3
                    layoutId={`cat-${active}`}
                    className="font-display text-[28px] font-medium leading-none text-vijaya-inkWarm"
                  >
                    {activeCat?.name}
                  </motion.h3>
                  <span className="te text-[13px] text-vijaya-leafDeepFlag/80">
                    {activeCat?.te}
                  </span>
                  <span className="text-[12px] text-vijaya-inkWarm/55">
                    · {items.length} {items.length === 1 ? "product" : "products"}
                  </span>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                {items.map((p, i) => (
                  <ProductCard key={p.name} p={p} i={i} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
