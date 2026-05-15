import Image from "next/image";

const COLS = [
  {
    head: "Quick Links",
    items: ["About Us", "Our Story", "Sustainability", "Press & Media", "Annual Report"],
  },
  {
    head: "Our Products",
    items: ["Milk", "Curd", "Ghee", "Paneer", "Sweets", "Beverages"],
  },
  {
    head: "Network",
    items: ["Find a Vijaya Outlet", "Become a Distributor", "Bulk & Institutional", "Logistics"],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-vijaya-leafDeepFlag text-white">
      <svg
        aria-hidden
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className="block h-10 w-full text-vijaya-leafDeepFlag"
      >
        <path
          fill="currentColor"
          d="M0 0 Q 50 60 100 0 T 200 0 T 300 0 T 400 0 T 500 0 T 600 0 T 700 0 T 800 0 T 900 0 T 1000 0 T 1100 0 T 1200 0 V60 H0 Z"
        />
      </svg>

      <div className="mx-auto max-w-7xl px-5 pb-12 pt-4">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr_1.1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image src="/Krishna-Distric-Milk-Producers.png" alt="" width={48} height={48} className="h-11 w-auto opacity-95" />
              <span className="grid h-11 w-11 place-items-center rounded-full bg-white p-1">
                <Image src="/logo.png" alt="Vijaya" width={42} height={28} className="h-7 w-auto" />
              </span>
              <span className="grid h-11 w-11 place-items-center rounded-full border-2 border-vijaya-marigold bg-white text-center">
                <span className="leading-none">
                  <span className="block font-display text-[14px] font-medium text-vijaya-vermilion">60</span>
                  <span className="block text-[7px] uppercase tracking-wider text-vijaya-ochre">Years</span>
                </span>
              </span>
            </div>
            <p className="te mt-5 text-[13px] text-vijaya-marigold">
              లక్షా యాభైవేల పాడిరైతు కుటుంబాల సంస్థ
            </p>
            <p className="mt-2 max-w-xs text-[13px] leading-relaxed text-white/65">
              The Krishna District Milk Producers&apos; Mutually Aided
              Co-operative Union — six decades of trusted dairy, built by
              farmer families, for Telugu families.
            </p>
          </div>

          {COLS.map((c) => (
            <div key={c.head}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-vijaya-marigold">
                {c.head}
              </p>
              <ul className="mt-4 space-y-2">
                {c.items.map((i) => (
                  <li key={i}>
                    <a href="#" className="text-sm text-white/70 transition hover:text-vijaya-marigold">
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-vijaya-marigold">
              Stay in touch
            </p>
            <form className="mt-4 flex gap-1 rounded-full border border-white/15 bg-white/5 p-1">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-transparent px-3 py-2 text-sm placeholder:text-white/40 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-vijaya-marigold px-4 py-1.5 text-[12px] font-semibold text-vijaya-leafDeepFlag hover:bg-vijaya-saffron"
              >
                Subscribe
              </button>
            </form>
            <ul className="mt-5 space-y-2 text-sm text-white/75">
              <li>
                <span className="te block text-[11px] text-white/50">ఫోన్</span>
                <a href="tel:18005998800" className="font-semibold hover:text-vijaya-marigold">
                  1800 599 8800
                </a>
              </li>
              <li>
                <span className="te block text-[11px] text-white/50">ఈమెయిల్</span>
                <a href="mailto:kmuvja@gmail.com" className="hover:text-vijaya-marigold">
                  kmuvja@gmail.com
                </a>
              </li>
              <li>
                <span className="te block text-[11px] text-white/50">చిరునామా</span>
                K.B.S. Road, Chittinagar, Vijayawada · 520 001
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-[12px] text-white/55 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Vijaya Dairy · Krishna District Milk Producers Co-operative Union</p>
          <p className="te">విజయ · ఆరు దశాబ్దాల నమ్మకం · Since 1965</p>
        </div>
      </div>
    </footer>
  );
}
