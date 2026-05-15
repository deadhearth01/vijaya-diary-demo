import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-vijaya-border bg-vijaya-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Vijaya" width={64} height={42} className="h-10 w-auto" />
            <Image
              src="/Krishna-Distric-Milk-Producers.png"
              alt="Krishna District Milk Producers"
              width={48}
              height={48}
              className="h-10 w-auto"
            />
          </div>
          <p className="te mt-4 text-sm text-vijaya-ink/65">
            స్వచ్ఛతకు మరో పేరు — విజయ
          </p>
          <p className="mt-2 max-w-xs text-[13px] text-vijaya-ink/60">
            A co-operative committed to purity, trust and the welfare of dairy
            farmer families across Krishna District, Andhra Pradesh.
          </p>
        </div>

        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-vijaya-ink/55">
            On this page
          </p>
          <ul className="mt-4 space-y-2">
            {["About", "Products", "Farmer Welfare", "The Journey", "Voices of Trust"].map((i) => (
              <li key={i}>
                <a href="#" className="text-sm text-vijaya-ink/70 hover:text-vijaya-red">
                  {i}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-vijaya-ink/55">
            Our Products
          </p>
          <ul className="mt-4 space-y-2">
            {["Full Cream Milk", "Curd", "Cow Ghee", "Paneer", "Doodh Peda", "Mango Lassi"].map((i) => (
              <li key={i}>
                <span className="text-sm text-vijaya-ink/70">{i}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-vijaya-ink/55">
            Contact
          </p>
          <ul className="mt-4 space-y-2 text-sm text-vijaya-ink/70">
            <li>
              <span className="te block text-[11px] text-vijaya-ink/45">
                ఫోన్
              </span>
              <a href="tel:18001234567" className="hover:text-vijaya-red">
                1800 123 4567
              </a>
            </li>
            <li>
              <span className="te block text-[11px] text-vijaya-ink/45">
                ఈమెయిల్
              </span>
              <a href="mailto:info@vijayadairy.com" className="hover:text-vijaya-red">
                info@vijayadairy.com
              </a>
            </li>
            <li>
              <span className="te block text-[11px] text-vijaya-ink/45">
                చిరునామా
              </span>
              Vijayawada, Andhra Pradesh, India
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-vijaya-border">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-5 py-5 text-[12px] text-vijaya-ink/55 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Vijaya Dairy. All Rights Reserved.</p>
          <p className="te">విజయ డెయిరీ · వచ్చిన నమ్మకం · నిలబడిన నాణ్యత</p>
        </div>
      </div>
    </footer>
  );
}
