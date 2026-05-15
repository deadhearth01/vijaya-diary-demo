export default function GrowWithUs() {
  return (
    <section id="distributor" className="relative overflow-hidden bg-vijaya-leafDeep py-16 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{ backgroundImage: "radial-gradient(circle at 20% 30%, white 1px, transparent 1.2px), radial-gradient(circle at 70% 60%, white 1px, transparent 1.2px)", backgroundSize: "32px 32px, 24px 24px" }} />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/55">
            Partner With Vijaya
          </p>
          <h2 className="mt-3 font-serif text-4xl leading-[1.1] sm:text-5xl">
            Grow With Us.
          </h2>
          <p className="te mt-2 text-base text-white/70">
            మాతో కలిసి ఎదగండి.
          </p>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/80">
            Build a successful future with a trusted dairy brand. Distributor
            partnerships open across Andhra Pradesh — fair margins, on-time
            payments and brand support.
          </p>
          <a
            href="#"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-vijaya-red px-5 py-3 text-sm font-medium text-white shadow-soft hover:bg-vijaya-redDeep"
          >
            Become a Distributor →
          </a>
        </div>

        {/* Placeholder van */}
        <div className="relative aspect-[5/3] overflow-hidden rounded-[24px] border border-white/15 bg-white/5">
          <div className="absolute bottom-8 left-8 right-8 h-16 rounded-md bg-white">
            <div className="absolute -top-10 left-2 h-10 w-20 rounded-t-md bg-white" />
            <div className="absolute -top-9 left-4 h-7 w-16 rounded-sm bg-[#A9C4E6]" />
            <div className="absolute inset-y-2 right-4 h-12 w-24 rounded-sm bg-vijaya-red" />
            <span className="absolute right-7 top-5 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
              Vijaya
            </span>
            <div className="absolute -bottom-3 left-6 h-6 w-6 rounded-full bg-vijaya-ink" />
            <div className="absolute -bottom-3 right-10 h-6 w-6 rounded-full bg-vijaya-ink" />
          </div>
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-vijaya-ink/65">
            Placeholder · distribution van
          </span>
        </div>
      </div>
    </section>
  );
}
