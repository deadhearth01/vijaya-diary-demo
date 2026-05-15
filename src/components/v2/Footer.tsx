import Image from "next/image";

const COLS = [
  {
    head: "Company",
    items: ["About Us", "Sustainability", "Press & Media", "Careers"],
  },
  {
    head: "Products",
    items: ["Milk", "Curd", "Ghee", "Paneer", "Sweets", "Beverages"],
  },
  {
    head: "For Partners",
    items: ["Become a Distributor", "Bulk Enquiry", "Institutional Supply"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-vijaya-line bg-white">
      <div className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr_1.1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="Vijaya" width={64} height={42} className="h-10 w-auto" />
              <Image
                src="/Krishna-Distric-Milk-Producers.png"
                alt="Krishna District Milk Producers"
                width={44}
                height={44}
                className="h-10 w-auto"
              />
            </div>
            <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-vijaya-slateMute">
              Vijaya Dairy — a co-operative built by 50,000+ farmer families
              across Krishna District, delivering fresh dairy to families
              across Andhra Pradesh every single morning.
            </p>
            <p className="te mt-3 text-[13px] text-vijaya-blueDeep/70">
              స్వచ్ఛతకు మరో పేరు — విజయ.
            </p>
          </div>

          {COLS.map((c) => (
            <div key={c.head}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-vijaya-blueDeep">
                {c.head}
              </p>
              <ul className="mt-4 space-y-2">
                {c.items.map((i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-sm text-vijaya-slate/75 transition hover:text-vijaya-blueDeep"
                    >
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-vijaya-blueDeep">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm text-vijaya-slate/80">
              <li>
                <span className="te block text-[11px] text-vijaya-slateMute">
                  ఫోన్
                </span>
                <a
                  href="tel:18001234567"
                  className="font-semibold hover:text-vijaya-blueDeep"
                >
                  1800 123 4567
                </a>
              </li>
              <li>
                <span className="te block text-[11px] text-vijaya-slateMute">
                  ఈమెయిల్
                </span>
                <a
                  href="mailto:hello@vijayadairy.com"
                  className="hover:text-vijaya-blueDeep"
                >
                  hello@vijayadairy.com
                </a>
              </li>
              <li>
                <span className="te block text-[11px] text-vijaya-slateMute">
                  చిరునామా
                </span>
                Vijayawada, Krishna District, Andhra Pradesh
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-vijaya-line pt-6 text-[12px] text-vijaya-slateMute sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Vijaya Dairy · All rights reserved.</p>
          <p className="te">విజయ డెయిరీ · వచ్చిన నమ్మకం · నిలబడిన నాణ్యత</p>
        </div>
      </div>
    </footer>
  );
}
