import Image from "next/image";

export default function Story() {
  return (
    <section id="story" className="mx-auto max-w-6xl px-5 py-20">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-vijaya-ink/55">
            About Vijaya
          </p>
          <h2 className="mt-3 font-serif text-4xl leading-[1.1] text-vijaya-ink sm:text-5xl">
            More Than Dairy.
            <br />
            <span className="text-vijaya-leafDeep">A Legacy of Care.</span>
          </h2>
          <p className="te mt-3 text-base text-vijaya-ink/65">
            పాడి కేవలం వ్యాపారం కాదు — ఇది తరతరాల బాధ్యత.
          </p>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-vijaya-ink/70">
            For decades, Vijaya has stood for purity and commitment. A
            co-operative built on trust, hard work and the strength of our
            farmers — bringing fresh milk to families across Andhra Pradesh.
          </p>
        </div>

        <div className="relative aspect-[5/4] overflow-hidden rounded-[24px] border border-vijaya-border bg-vijaya-sand">
          <Image
            src="/v1/story-farmhouse.png"
            alt="A small dairy farmstead in rural Andhra Pradesh"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 540px, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
