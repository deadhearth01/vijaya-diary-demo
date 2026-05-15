"use client";

import { useRef } from "react";
import Image from "next/image";

const PRODUCTS = [
  { name: "Full Cream Milk", te: "ఫుల్ క్రీం పాలు", tag: "Fat 6.0%", src: "/v2/products/full-cream-milk.png" },
  { name: "Toned Milk", te: "టోన్డ్ పాలు", tag: "Fat 3.0%", src: "/v2/products/toned-milk.png" },
  { name: "Curd", te: "పెరుగు", tag: "Set fresh", src: "/v2/products/curd.png" },
  { name: "Cow Ghee", te: "ఆవు నెయ్యి", tag: "Granular", src: "/v2/products/ghee.png" },
  { name: "Butter Milk", te: "మజ్జిగ", tag: "Spiced", src: "/v2/products/butter-milk.png" },
  { name: "Paneer", te: "పనీర్", tag: "Soft fresh", src: "/v2/products/paneer.png" },
  { name: "Mango Lassi", te: "మ్యాంగో లస్సీ", tag: "Seasonal", src: "/v2/products/mango-lassi.png" },
  { name: "Chocolate Milk", te: "చాక్లెట్ మిల్క్", tag: "Kids' favourite", src: "/v2/products/chocolate-milk.png" },
  { name: "Doodh Peda", te: "దూద్ పేడ", tag: "Sweet treat", src: "/v2/products/doode-pedha.png" },
];

export default function Products() {
  const scroller = useRef<HTMLDivElement>(null);

  const nudge = (dir: -1 | 1) => {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <section id="products" className="bg-vijaya-skywash/40 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-vijaya-blueDeep">
              Our Products
            </p>
            <h2 className="mt-2 font-display text-4xl font-semibold leading-[1.1] text-vijaya-slate sm:text-5xl">
              Goodness in Every Moment.
            </h2>
            <p className="te mt-2 text-base text-vijaya-blueDeep/75">
              ప్రతి క్షణం ఆరోగ్యం · ప్రతి కుటుంబానికి ఆనందం.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => nudge(-1)}
              className="grid h-10 w-10 place-items-center rounded-full border border-vijaya-line bg-white text-vijaya-slate transition hover:border-vijaya-blueSoft hover:text-vijaya-blueDeep"
              aria-label="Previous products"
            >
              ←
            </button>
            <button
              onClick={() => nudge(1)}
              className="grid h-10 w-10 place-items-center rounded-full border border-vijaya-line bg-white text-vijaya-slate transition hover:border-vijaya-blueSoft hover:text-vijaya-blueDeep"
              aria-label="Next products"
            >
              →
            </button>
          </div>
        </div>

        <div
          ref={scroller}
          className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {PRODUCTS.map((p) => (
            <article
              key={p.name}
              className="group relative shrink-0 snap-start basis-[78%] overflow-hidden rounded-3xl border border-vijaya-line bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-vijaya-blueSoft sm:basis-[44%] lg:basis-[24%]"
            >
              <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-vijaya-skywash px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-vijaya-blueDeep">
                {p.tag}
              </span>
              <div className="relative mx-auto aspect-square w-full">
                <Image
                  src={p.src}
                  alt={p.name}
                  fill
                  className="object-contain transition group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 280px, 70vw"
                />
              </div>
              <div className="mt-4">
                <p className="text-[15px] font-semibold text-vijaya-slate">
                  {p.name}
                </p>
                <p className="te text-[12px] text-vijaya-slateMute">{p.te}</p>
              </div>
              <button className="mt-3 inline-flex items-center gap-1 text-[12px] font-semibold text-vijaya-blueDeep hover:text-vijaya-blue">
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
