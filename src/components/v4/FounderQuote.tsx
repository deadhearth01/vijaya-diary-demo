import Image from "next/image";

const VERSE = [
  "అరవైయేళ్ళ ప్రయాణం",
  "నెరవేర్చిన ప్రమాణం",
  "చూస్తున్నాం పాడిరైతుల ప్రమోదం",
  "పాడి సహకార రంగంలో ప్రభంజనం",
];

export default function FounderQuote() {
  return (
    <section className="relative isolate overflow-hidden bg-vijaya-paperFlag">
      <Image
        src="/v4/founder-village.png"
        alt=""
        fill
        aria-hidden
        sizes="100vw"
        className="absolute inset-0 -z-10 object-cover object-right"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(90deg, rgba(251,246,231,0.96) 0%, rgba(251,246,231,0.85) 30%, rgba(251,246,231,0.45) 55%, rgba(251,246,231,0.15) 78%, rgba(251,246,231,0) 100%)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-[1fr_1fr] md:py-32">
        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[40px] bg-white/55 backdrop-blur-sm md:hidden" />
          <span className="inline-flex items-center gap-2 rounded-full border border-vijaya-saffron/40 bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-vijaya-saffron">
            <span className="h-1.5 w-1.5 rounded-full bg-vijaya-saffron" />
            Founder&apos;s Message
          </span>

          <h2 className="mt-5 font-display text-[44px] font-medium leading-[1.05] tracking-[-0.02em] text-vijaya-inkWarm sm:text-[56px]">
            Sixty years of
            <br />
            <em
              className="not-italic text-vijaya-leafDeepFlag"
              style={{ fontStyle: "italic", fontWeight: 500 }}
            >
              shared promise.
            </em>
          </h2>

          <ol className="te mt-8 space-y-2.5 border-l-[3px] border-vijaya-saffron/60 pl-5">
            {VERSE.map((line, i) => (
              <li
                key={i}
                className="font-display text-[20px] font-medium leading-snug text-vijaya-leafDeepFlag sm:text-[22px]"
              >
                {line}
              </li>
            ))}
          </ol>

          <p className="mt-7 max-w-md text-[14.5px] leading-relaxed text-vijaya-inkWarm/70">
            What began in 1965 as a small group of farmer families pooling
            milk has grown into one of India&apos;s most respected
            co-operative unions — without ever forgetting the village paths
            it started on.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-full border border-vijaya-saffron/40 bg-white text-vijaya-vermilion font-display font-medium">
              SR
            </div>
            <div>
              <p className="font-display text-lg font-medium text-vijaya-inkWarm">
                Sri Subba Rao
              </p>
              <p className="te text-[12px] text-vijaya-leafDeepFlag">
                ఛైర్మన్ · కృష్ణా మిల్క్ యూనియన్
              </p>
              <p className="text-[11px] uppercase tracking-[0.18em] text-vijaya-inkWarm/55">
                Chairman, Krishna Milk Union
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
