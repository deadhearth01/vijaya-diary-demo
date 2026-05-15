"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";

type Category = "Milk" | "Curd" | "Ghee" | "Paneer" | "Sweets" | "Beverages";

const CATEGORIES: { name: Category; te: string }[] = [
  { name: "Milk", te: "పాలు" },
  { name: "Curd", te: "పెరుగు" },
  { name: "Ghee", te: "నెయ్యి" },
  { name: "Paneer", te: "పనీర్" },
  { name: "Sweets", te: "మిఠాయిలు" },
  { name: "Beverages", te: "పానీయాలు" },
];

type Product = { name: string; te: string; src: string; tag?: string; cat: Category };

const PRODUCTS: Product[] = [
  { cat: "Milk", name: "Full Cream Milk", te: "ఫుల్ క్రీం పాలు", tag: "Fat 6.0%", src: "/v3/products/full-cream-milk.png" },
  { cat: "Milk", name: "Pasteurised Milk", te: "పాశ్చరైజ్డ్ పాలు", tag: "Daily fresh", src: "/v3/products/pasteurized-full-cream-milk.png" },
  { cat: "Milk", name: "Toned Milk", te: "టోన్డ్ పాలు", tag: "Fat 3.0%", src: "/v3/products/toned-milk.png" },
  { cat: "Milk", name: "Badam Milk", te: "బాదం పాలు", tag: "Flavoured", src: "/v3/products/badam-milk.png" },
  { cat: "Milk", name: "Chocolate Milk", te: "చాక్లెట్ మిల్క్", tag: "Kids' favourite", src: "/v3/products/chocolate-milk.png" },

  { cat: "Curd", name: "Gold Curd", te: "గోల్డ్ పెరుగు", tag: "Premium", src: "/v3/products/curd.png" },

  { cat: "Ghee", name: "Cow Ghee", te: "ఆవు నెయ్యి", tag: "Granular", src: "/v3/products/ghee.png" },

  { cat: "Paneer", name: "Fresh Paneer", te: "పనీర్", tag: "Soft fresh", src: "/v3/products/paneer.png" },

  { cat: "Sweets", name: "Doodh Peda", te: "దూద్ పేడ", tag: "Classic", src: "/v3/products/doode-pedha.png" },
  { cat: "Sweets", name: "Gulab Jamun", te: "గులాబ్ జామూన్", tag: "Festive", src: "/v3/products/gulab-jamun.png" },
  { cat: "Sweets", name: "Butter Burfi", te: "బటర్ బర్ఫీ", tag: "Rich", src: "/v3/products/butter-burfi.png" },
  { cat: "Sweets", name: "Chocolate Burfi", te: "చాక్లెట్ బర్ఫీ", tag: "New", src: "/v3/products/chocolate-burfi.png" },
  { cat: "Sweets", name: "Kalakand", te: "కలాకండ్", tag: "Traditional", src: "/v3/products/kalaland.png" },
  { cat: "Sweets", name: "Dates Khoa", te: "డేట్స్ ఖోవా", tag: "Wholesome", src: "/v3/products/dates-khoa.png" },
  { cat: "Sweets", name: "Jowar Laddu", te: "జొన్న లడ్డు", tag: "Millet", src: "/v3/products/jowar-laddu.png" },
  { cat: "Sweets", name: "Ragi Laddu", te: "రాగి లడ్డు", tag: "Millet", src: "/v3/products/ragi-laddu.png" },
  { cat: "Sweets", name: "Korra Laddu", te: "కొర్ర లడ్డు", tag: "Millet", src: "/v3/products/korra-laddu.png" },
  { cat: "Sweets", name: "Mixed Millet Laddu", te: "మిల్లెట్ లడ్డు", tag: "Millet", src: "/v3/products/mixed-millets-laddu.png" },
  { cat: "Sweets", name: "Kesar Pista Kulfi", te: "కేసర్ పిస్తా కుల్ఫీ", tag: "Frozen", src: "/v3/products/kesar-pista-coolfi.png" },
  { cat: "Sweets", name: "Malai Kulfi", te: "మలై కుల్ఫీ", tag: "Frozen", src: "/v3/products/malai-coolfi.png" },

  { cat: "Beverages", name: "Butter Milk", te: "మజ్జిగ", tag: "Spiced", src: "/v3/products/butter-milk.png" },
  { cat: "Beverages", name: "Lassi", te: "లస్సీ", tag: "Sweet", src: "/v3/products/lassy.png" },
  { cat: "Beverages", name: "Mango Lassi", te: "మ్యాంగో లస్సీ", tag: "Seasonal", src: "/v3/products/mango-lassi.png" },
  { cat: "Beverages", name: "Apple Juice", te: "ఆపిల్ జ్యూస్", tag: "Fruit", src: "/v3/products/apple-flavour-juice.png" },
  { cat: "Beverages", name: "Orange Juice", te: "ఆరెంజ్ జ్యూస్", tag: "Fruit", src: "/v3/products/orange-flavour-juice.png" },
];

export default function Products() {
  const [active, setActive] = useState<Category>("Milk");
  const scroller = useRef<HTMLDivElement>(null);

  const filtered = useMemo(
    () => PRODUCTS.filter((p) => p.cat === active),
    [active],
  );

  const nudge = (dir: -1 | 1) => {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.7), behavior: "smooth" });
  };

  return (
    <section id="products" className="relative overflow-hidden bg-vijaya-parchment text-vijaya-inkWarm">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-vijaya-gold/30 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 py-24">
        <div className="grid items-end gap-8 md:grid-cols-[1.05fr_1fr] md:gap-12">
          <div>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-vijaya-gold/40 bg-white/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-vijaya-goldDeep">
              <span className="h-1.5 w-1.5 rounded-full bg-vijaya-gold" />
              The Collection
            </span>
            <h2 className="mt-4 font-display text-[48px] font-medium leading-[1.02] tracking-[-0.02em] sm:text-[60px]">
              Crafted With Care.
              <br />
              <em className="not-italic text-vijaya-goldDeep" style={{ fontStyle: "italic", fontWeight: 500 }}>
                For Your Family.
              </em>
            </h2>
            <p className="te mt-3 text-base text-vijaya-inkWarm/65">
              శ్రద్ధతో తయారు · మీ కుటుంబం కోసం.
            </p>
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-vijaya-inkWarm/65">
            Twenty-five products across six categories — every one of them
            sourced from a Krishna-District farm, packed fresh and trusted by
            Telugu families for six decades.
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
                        ? "border-vijaya-gold bg-vijaya-gold text-vijaya-forest"
                        : "border-vijaya-gold/30 bg-white/40 text-vijaya-inkWarm/65 hover:border-vijaya-gold hover:text-vijaya-goldDeep",
                    ].join(" ")}
                  >
                    {c.name}
                    <span className="te ml-1.5 text-[10.5px] opacity-70">{c.te}</span>
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="ml-auto flex items-center gap-2">
            <span className="text-[12px] text-vijaya-inkWarm/55">
              {filtered.length} {filtered.length === 1 ? "product" : "products"}
            </span>
            <button
              onClick={() => nudge(-1)}
              aria-label="Previous"
              className="grid h-10 w-10 place-items-center rounded-full border border-vijaya-gold/40 bg-white text-vijaya-goldDeep transition hover:bg-vijaya-gold hover:text-vijaya-forest"
            >
              ←
            </button>
            <button
              onClick={() => nudge(1)}
              aria-label="Next"
              className="grid h-10 w-10 place-items-center rounded-full border border-vijaya-gold/40 bg-white text-vijaya-goldDeep transition hover:bg-vijaya-gold hover:text-vijaya-forest"
            >
              →
            </button>
          </div>
        </div>

        <div
          ref={scroller}
          key={active}
          className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {filtered.map((p) => (
            <article
              key={p.name}
              className="group relative shrink-0 snap-start basis-[72%] overflow-hidden rounded-[28px] border border-vijaya-gold/20 bg-white p-6 shadow-[0_18px_40px_-24px_rgba(28,51,40,0.25)] transition hover:-translate-y-1 hover:border-vijaya-gold/60 sm:basis-[42%] lg:basis-[24%]"
            >
              <div
                aria-hidden
                className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-vijaya-ivory/70 transition group-hover:bg-vijaya-gold/15"
              />
              {p.tag && (
                <span className="absolute left-5 top-5 z-10 inline-flex items-center gap-1 rounded-full border border-vijaya-gold/30 bg-white/80 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-vijaya-goldDeep backdrop-blur">
                  {p.tag}
                </span>
              )}
              <div className="relative mx-auto aspect-square w-full">
                <Image
                  src={p.src}
                  alt={p.name}
                  fill
                  className="object-contain transition duration-500 group-hover:scale-[1.05]"
                  sizes="(min-width: 1024px) 260px, 70vw"
                />
              </div>
              <div className="relative mt-5">
                <p className="font-display text-lg font-medium tracking-tight text-vijaya-inkWarm">
                  {p.name}
                </p>
                <p className="te text-[12px] text-vijaya-goldDeep/80">{p.te}</p>
              </div>
              <button className="relative mt-4 inline-flex items-center gap-1 text-[12px] font-semibold uppercase tracking-wider text-vijaya-goldDeep hover:text-vijaya-redWarm">
                View Details
                <span aria-hidden>→</span>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
