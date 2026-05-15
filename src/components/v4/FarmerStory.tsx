import Image from "next/image";

const TILES = [
  { src: "/v4/story-1.png", alt: "Farmer tending cattle", caption: "Krishna District · Morning" },
  { src: "/v4/story-2.png", alt: "Women carrying milk cans", caption: "Village collection · Daily" },
  { src: "/v4/story-3.png", alt: "Milk collection booth", caption: "Booth · 100+ villages" },
];

export default function FarmerStory() {
  return (
    <section className="relative bg-vijaya-paperFlag py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid items-center gap-12 md:grid-cols-[1fr_1.1fr] md:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-vijaya-saffron/40 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-vijaya-saffron">
              <span className="h-1.5 w-1.5 rounded-full bg-vijaya-saffron" />
              The People Behind Vijaya
            </span>
            <h2 className="mt-5 font-display text-[44px] font-medium leading-[1.02] tracking-[-0.02em] text-vijaya-inkWarm sm:text-[56px]">
              Good for Farmers.
              <br />
              <em
                className="not-italic text-vijaya-leafDeepFlag"
                style={{ fontStyle: "italic", fontWeight: 500 }}
              >
                Good for Life.
              </em>
            </h2>
            <p className="te mt-3 text-base text-vijaya-leafDeepFlag/80">
              మంచి రైతుకు · మంచి జీవితానికి.
            </p>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-vijaya-inkWarm/70">
              50,000+ Krishna District farmer families pour their work, their
              cattle and their early mornings into Vijaya. In return, the
              co-operative pours back — through fair prices, dignified
              welfare programmes and lifelong support.
            </p>

            <a
              href="#welfare"
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-vijaya-leafDeepFlag/30 bg-white px-5 py-2.5 text-sm font-semibold text-vijaya-leafDeepFlag transition hover:bg-vijaya-leafDeepFlag hover:text-white"
            >
              Explore the six welfare pillars
              <span aria-hidden>→</span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="relative col-span-2 aspect-[2/1] overflow-hidden rounded-[24px] border border-vijaya-flagLine">
              <Image
                src={TILES[0].src}
                alt={TILES[0].alt}
                fill
                className="object-cover transition duration-700 hover:scale-[1.04]"
                sizes="(min-width: 768px) 560px, 100vw"
              />
              <span className="absolute bottom-3 left-3 rounded-full bg-vijaya-leafDeepFlag/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
                {TILES[0].caption}
              </span>
            </div>
            {TILES.slice(1).map((t) => (
              <div
                key={t.src}
                className="relative aspect-square overflow-hidden rounded-[24px] border border-vijaya-flagLine"
              >
                <Image
                  src={t.src}
                  alt={t.alt}
                  fill
                  className="object-cover transition duration-700 hover:scale-[1.05]"
                  sizes="(min-width: 768px) 280px, 50vw"
                />
                <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-vijaya-leafDeepFlag">
                  {t.caption}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
