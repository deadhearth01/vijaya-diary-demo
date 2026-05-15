import Image from "next/image";

const COLS = [
  {
    head: "Company",
    items: ["About Us", "Sustainability", "Press & Media", "Annual Report"],
  },
  {
    head: "Products",
    items: ["Milk", "Curd", "Ghee", "Paneer", "Sweets", "Beverages"],
  },
  {
    head: "Network",
    items: ["Find a Vijaya Outlet", "Become a Distributor", "Bulk & Institutional", "Logistics"],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-vijaya-forestDeep text-vijaya-ivory">
      <svg
        aria-hidden
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className="block h-10 w-full text-vijaya-forestDeep"
      >
        <path
          fill="currentColor"
          d="M0 0 Q 50 60 100 0 T 200 0 T 300 0 T 400 0 T 500 0 T 600 0 T 700 0 T 800 0 T 900 0 T 1000 0 T 1100 0 T 1200 0 V60 H0 Z"
        />
      </svg>

      <div className="mx-auto max-w-7xl px-5 pb-12 pt-6">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr_1.1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-white/95 p-1">
                <Image src="/logo.png" alt="Vijaya" width={42} height={28} className="h-7 w-auto" />
              </span>
              <Image
                src="/Krishna-Distric-Milk-Producers.png"
                alt="Krishna District Milk Producers"
                width={48}
                height={48}
                className="h-10 w-auto opacity-80"
              />
            </div>
            <p className="te mt-5 text-[13px] text-vijaya-goldSoft">
              స్వచ్ఛతకు మరో పేరు — విజయ
            </p>
            <p className="mt-2 max-w-xs text-[13px] leading-relaxed text-vijaya-ivory/65">
              A co-operative built by 50,000+ farmer families across Krishna
              District — delivering fresh, trusted dairy across Andhra Pradesh
              for six decades, since 1965.
            </p>
          </div>

          {COLS.map((c) => (
            <div key={c.head}>
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-vijaya-goldSoft">
                {c.head}
              </p>
              <ul className="mt-4 space-y-2">
                {c.items.map((i) => (
                  <li key={i}>
                    <a href="#" className="text-sm text-vijaya-ivory/70 transition hover:text-vijaya-gold">
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-vijaya-goldSoft">
              Stay in touch
            </p>
            <form className="mt-4 flex gap-2 rounded-full border border-white/15 bg-white/5 p-1">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-transparent px-3 py-2 text-sm text-vijaya-ivory placeholder:text-vijaya-ivory/40 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-vijaya-gold px-4 py-1.5 text-[12px] font-semibold text-vijaya-forest hover:bg-vijaya-goldSoft"
              >
                Subscribe
              </button>
            </form>
            <ul className="mt-5 space-y-2 text-sm text-vijaya-ivory/75">
              <li>
                <span className="te block text-[11px] text-vijaya-ivory/50">ఫోన్</span>
                <a href="tel:18001234567" className="font-semibold hover:text-vijaya-gold">
                  1800 123 4567
                </a>
              </li>
              <li>
                <span className="te block text-[11px] text-vijaya-ivory/50">ఈమెయిల్</span>
                <a href="mailto:hello@vijayadairy.com" className="hover:text-vijaya-gold">
                  hello@vijayadairy.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-[12px] text-vijaya-ivory/55 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Vijaya Dairy · Krishna District Milk Producers Co-operative Union</p>
          <p className="te">విజయ డెయిరీ · వచ్చిన నమ్మకం · నిలబడిన నాణ్యత</p>
        </div>
      </div>
    </footer>
  );
}
