import Image from "next/image";

const PRODUCTS = [
  { name: "Full Cream Milk", te: "ఫుల్ క్రీం పాలు", src: "/v1/products/full-cream-milk.png" },
  { name: "Curd", te: "పెరుగు", src: "/v1/products/curd.png" },
  { name: "Cow Ghee", te: "ఆవు నెయ్యి", src: "/v1/products/ghee.png" },
  { name: "Paneer", te: "పనీర్", src: "/v1/products/paneer.png" },
  { name: "Doodh Peda", te: "దూద్ పేడ", src: "/v1/products/doode-pedha.png" },
  { name: "Mango Lassi", te: "మ్యాంగో లస్సీ", src: "/v1/products/mango-lassi.png" },
];

export default function Products() {
  return (
    <section id="products" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-vijaya-ink/55">
            Our Products
          </p>
          <h2 className="mt-3 font-serif text-4xl leading-[1.1] text-vijaya-ink sm:text-5xl">
            Goodness in Every Drop.
          </h2>
          <p className="te mt-2 text-base text-vijaya-ink/65">
            ప్రతి చుక్కలో మంచితనం.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {PRODUCTS.map((p) => (
            <li
              key={p.name}
              className="group rounded-2xl border border-vijaya-border bg-vijaya-cream p-4 text-center transition hover:-translate-y-0.5 hover:shadow-soft"
            >
              <div className="relative mx-auto aspect-square w-full">
                <Image
                  src={p.src}
                  alt={p.name}
                  fill
                  className="object-contain"
                  sizes="(min-width: 1024px) 160px, 33vw"
                />
              </div>
              <p className="mt-3 text-sm font-semibold text-vijaya-ink">
                {p.name}
              </p>
              <p className="te text-[12px] text-vijaya-ink/55">{p.te}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
