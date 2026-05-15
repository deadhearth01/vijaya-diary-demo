import Image from "next/image";
import Link from "next/link";

const NAV = ["Home", "About", "Products", "Farmer Welfare", "Contact"];

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-vijaya-border/70 bg-vijaya-cream/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="Vijaya"
            width={56}
            height={36}
            className="h-9 w-auto"
            priority
          />
          <span className="hidden text-[11px] leading-tight text-vijaya-ink/55 sm:block">
            <span className="te block font-medium">స్వచ్ఛతకు మరో పేరు</span>
            <span className="block">Krishna District Milk Producers</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <a
              key={n}
              href="#"
              className="rounded-full px-3 py-1.5 text-sm text-vijaya-ink/70 transition hover:bg-vijaya-sand hover:text-vijaya-ink"
            >
              {n}
            </a>
          ))}
        </nav>

        <span className="te text-[12px] text-vijaya-ink/55">
          తెలుగు · English
        </span>
      </div>
    </header>
  );
}
