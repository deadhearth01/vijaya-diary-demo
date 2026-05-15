"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";

type Category = "All" | "Milk" | "Curd" | "Ghee" | "Paneer" | "Sweets" | "Beverages";

const CATEGORIES: { name: Category; te: string }[] = [
  { name: "All", te: "అన్నీ" },
  { name: "Milk", te: "పాలు" },
  { name: "Curd", te: "పెరుగు" },
  { name: "Ghee", te: "నెయ్యి" },
  { name: "Paneer", te: "పనీర్" },
  { name: "Sweets", te: "మిఠాయిలు" },
  { name: "Beverages", te: "పానీయాలు" },
];

type Product = {
  name: string;
  te: string;
  src: string;
  tag?: string;
  cat: Exclude<Category, "All">;
};

const PRODUCTS: Product[] = [
  { cat: "Milk", name: "Full Cream Milk", te: "ఫుల్ క్రీం పాలు", tag: "Fat 6.0%", src: "/v4/products/full-cream-milk.png" },
  { cat: "Milk", name: "Pasteurised Milk", te: "పాశ్చరైజ్డ్ పాలు", tag: "Daily fresh", src: "/v4/products/pasteurized-full-cream-milk.png" },
  { cat: "Milk", name: "Toned Milk", te: "టోన్డ్ పాలు", tag: "Fat 3.0%", src: "/v4/products/toned-milk.png" },
  { cat: "Milk", name: "Badam Milk", te: "బాదం పాలు", tag: "Flavoured", src: "/v4/products/badam-milk.png" },
  { cat: "Milk", name: "Chocolate Milk", te: "చాక్లెట్ మిల్క్", tag: "Kids' favourite", src: "/v4/products/chocolate-milk.png" },
  { cat: "Curd", name: "Gold Curd", te: "గోల్డ్ పెరుగు", tag: "Premium", src: "/v4/products/curd.png" },
  { cat: "Ghee", name: "Cow Ghee", te: "ఆవు నెయ్యి", tag: "Granular", src: "/v4/products/ghee.png" },
  { cat: "Paneer", name: "Fresh Paneer", te: "పనీర్", tag: "Soft fresh", src: "/v4/products/paneer.png" },
  { cat: "Sweets", name: "Doodh Peda", te: "దూద్ పేడ", tag: "Classic", src: "/v4/products/doode-pedha.png" },
  { cat: "Sweets", name: "Gulab Jamun", te: "గులాబ్ జామూన్", tag: "Festive", src: "/v4/products/gulab-jamun.png" },
  { cat: "Sweets", name: "Butter Burfi", te: "బటర్ బర్ఫీ", tag: "Rich", src: "/v4/products/butter-burfi.png" },
  { cat: "Sweets", name: "Chocolate Burfi", te: "చాక్లెట్ బర్ఫీ", tag: "New", src: "/v4/products/chocolate-burfi.png" },
  { cat: "Sweets", name: "Kalakand", te: "కలాకండ్", tag: "Traditional", src: "/v4/products/kalaland.png" },
  { cat: "Sweets", name: "Dates Khoa", te: "డేట్స్ ఖోవా", tag: "Wholesome", src: "/v4/products/dates-khoa.png" },
  { cat: "Sweets", name: "Jowar Laddu", te: "జొన్న లడ్డు", tag: "Millet", src: "/v4/products/jowar-laddu.png" },
  { cat: "Sweets", name: "Ragi Laddu", te: "రాగి లడ్డు", tag: "Millet", src: "/v4/products/ragi-laddu.png" },
  { cat: "Sweets", name: "Korra Laddu", te: "కొర్ర లడ్డు", tag: "Millet", src: "/v4/products/korra-laddu.png" },
  { cat: "Sweets", name: "Mixed Millet Laddu", te: "మిల్లెట్ లడ్డు", tag: "Millet", src: "/v4/products/mixed-millets-laddu.png" },
  { cat: "Sweets", name: "Kesar Pista Kulfi", te: "కేసర్ పిస్తా కుల్ఫీ", tag: "Frozen", src: "/v4/products/kesar-pista-coolfi.png" },
  { cat: "Sweets", name: "Malai Kulfi", te: "మలై కుల్ఫీ", tag: "Frozen", src: "/v4/products/malai-coolfi.png" },
  { cat: "Beverages", name: "Butter Milk", te: "మజ్జిగ", tag: "Spiced", src: "/v4/products/butter-milk.png" },
  { cat: "Beverages", name: "Lassi", te: "లస్సీ", tag: "Sweet", src: "/v4/products/lassy.png" },
  { cat: "Beverages", name: "Mango Lassi", te: "మ్యాంగో లస్సీ", tag: "Seasonal", src: "/v4/products/mango-lassi.png" },
  { cat: "Beverages", name: "Apple Juice", te: "ఆపిల్ జ్యూస్", tag: "Fruit", src: "/v4/products/apple-flavour-juice.png" },
  { cat: "Beverages", name: "Orange Juice", te: "ఆరెంజ్ జ్యూస్", tag: "Fruit", src: "/v4/products/orange-flavour-juice.png" },
];

export default function Products() {
  const [active, setActive] = useState<Category>("All");
  const [hovered, setHovered] = useState<string | null>(null);
  const scroller = useRef<HTMLDivElement>(null);

  const filtered = useMemo(
    () => (active === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.cat === active)),
    [active],
  );

  return (
    <section id="products" className="relative overflow-hidden bg-vijaya-paperFlag py-24">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-vijaya-saffron/40 to-transparent"
      />
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid items-end gap-8 md:grid-cols-[1.05fr_1fr] md:gap-14">
          <div>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-vijaya-saffron/40 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-vijaya-saffron">
              <span className="h-1.5 w-1.5 rounded-full bg-vijaya-saffron" />
              The Collection
            </span>
            <h2 className="mt-4 font-display text-[48px] font-medium leading-[1.02] tracking-[-0.02em] text-vijaya-inkWarm sm:text-[60px]">
              Goodness in
              <em
                className="not-italic px-3 text-vijaya-leafDeepFlag"
                style={{ fontStyle: "italic", fontWeight: 500 }}
              >
                Every Drop.
              </em>
            </h2>
            <p className="te mt-3 text-base text-vijaya-leafDeepFlag/75">
              ప్రతి చుక్కలో మంచితనం · ప్రతి కుటుంబానికి శ్రద్ధ.
            </p>
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-vijaya-inkWarm/65">
            Twenty-five products across six categories — pasteurised within
            hours, packed with care, and rooted in six decades of Krishna
            District craft.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-2">
          <ul className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => {
              const isActive = c.name === active;
              return (
                <li key={c.name}>
                  <button
                    onClick={() => setActive(c.name)}
                    className={[
                      "rounded-full border px-4 py-2 text-[12.5px] font-semibold transition",
                      isActive
                        ? "border-vijaya-leafDeepFlag bg-vijaya-leafDeepFlag text-white shadow-soft"
                        : "border-vijaya-flagLine bg-white/70 text-vijaya-inkWarm/65 hover:border-vijaya-leafBright hover:text-vijaya-leafDeepFlag",
                    ].join(" ")}
                  >
                    {c.name}
                    <span className="te ml-1.5 text-[10.5px] opacity-70">{c.te}</span>
                  </button>
                </li>
              );
            })}
          </ul>
          <span className="ml-auto text-[12px] text-vijaya-inkWarm/55">
            {filtered.length} {filtered.length === 1 ? "product" : "products"}
          </span>
        </div>

        <div
          ref={scroller}
          key={active}
          className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
        >
          {filtered.map((p) => (
            <article
              key={p.name}
              onMouseEnter={() => setHovered(p.name)}
              onMouseLeave={() => setHovered(null)}
              className="group relative overflow-hidden rounded-[24px] border border-vijaya-flagLine bg-white p-4 shadow-[0_18px_40px_-24px_rgba(28,51,40,0.2)] transition hover:-translate-y-1 hover:border-vijaya-leafBright/55 hover:shadow-card"
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
              <div className="relative mx-auto aspect-square w-full">
                <Image
                  src={p.src}
                  alt={p.name}
                  fill
                  className="object-contain transition duration-500 group-hover:scale-[1.08]"
                  sizes="(min-width: 1024px) 220px, 45vw"
                />
              </div>
              <div className="relative mt-4">
                <p className="font-display text-[15px] font-medium leading-tight tracking-tight text-vijaya-inkWarm">
                  {p.name}
                </p>
                <p className="te text-[11.5px] text-vijaya-leafDeepFlag/80">{p.te}</p>
              </div>
              <span
                aria-hidden
                className={[
                  "pointer-events-none absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-vijaya-saffron transition",
                  hovered === p.name ? "scale-x-100" : "",
                ].join(" ")}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
