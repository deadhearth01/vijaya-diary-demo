import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-14 sm:pt-20 md:grid-cols-[1.05fr_1fr] md:gap-14 md:pb-24">
        <div className="flex flex-col justify-center">
          <span className="te inline-flex w-fit items-center gap-2 rounded-full border border-vijaya-border bg-white px-3 py-1 text-xs text-vijaya-ink/70">
            <span className="h-1.5 w-1.5 rounded-full bg-vijaya-red" />
            స్వచ్ఛమైన పాలు · తాజా రుచి
          </span>

          <h1 className="mt-5 font-serif text-[44px] leading-[1.05] tracking-tight text-vijaya-ink sm:text-[58px]">
            Trusted by Families.
            <br />
            <span className="text-vijaya-red">Powered by Farmers.</span>
          </h1>

          <p className="te mt-4 text-lg text-vijaya-leafDeep/90">
            కుటుంబాల నమ్మకం · రైతుల శ్రమ
          </p>

          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-vijaya-ink/70">
            Fresh dairy delivered with purity, trust and care — backed by a
            co-operative of over fifty thousand farmer families across Krishna
            District.
          </p>
        </div>

        <div className="relative">
          <div className="relative aspect-[5/6] w-full overflow-hidden rounded-[28px] border border-vijaya-border bg-gradient-to-b from-[#F6E3C8] via-[#F8E9D3] to-[#FBF6EE]">
            <Image
              src="/v1/hero-farmer.png"
              alt="Vijaya farmer at his farm in Krishna District"
              fill
              className="object-cover object-right"
              sizes="(min-width: 768px) 480px, 100vw"
              priority
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-vijaya-cream to-transparent" />
          </div>
        </div>
      </div>

      <div className="mx-auto -mt-6 max-w-6xl px-5">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-vijaya-border bg-vijaya-border md:grid-cols-4">
          {[
            { v: "50,000+", l: "Farmer Families", te: "రైతు కుటుంబాలు" },
            { v: "2M+", l: "Litres Daily Supply", te: "రోజువారీ సరఫరా" },
            { v: "100+", l: "Cities & Towns", te: "నగరాలు · పట్టణాలు" },
            { v: "60 Years", l: "Of Trust · Since 1965", te: "60 ఏళ్ల నమ్మకం" },
          ].map((s) => (
            <div key={s.l} className="flex items-start gap-3 bg-white px-5 py-4">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-vijaya-red" />
              <div>
                <p className="font-serif text-xl text-vijaya-ink">{s.v}</p>
                <p className="text-[13px] text-vijaya-ink/70">{s.l}</p>
                <p className="te text-[11px] text-vijaya-ink/45">{s.te}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
