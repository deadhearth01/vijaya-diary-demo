import Image from "next/image";
import Link from "next/link";

const NAV = ["Home", "About Us", "Products", "Farmer Welfare", "Sustainability", "Network", "Contact"];

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="border-b border-white/10 bg-vijaya-forest/55 backdrop-blur-md">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center gap-6 px-5">
          <Link href="/v3" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-white/95 p-1">
              <Image src="/logo.png" alt="Vijaya" width={40} height={28} className="h-7 w-auto" priority />
            </span>
            <span className="te hidden text-[11px] leading-tight text-vijaya-ivory/75 sm:block">
              <span className="block font-medium">స్వచ్ఛతకు మరో పేరు</span>
              <span className="block text-[10px] tracking-wider text-vijaya-gold">EST · KRISHNA DISTRICT</span>
            </span>
          </Link>

          <nav className="ml-auto hidden items-center gap-1 lg:flex">
            {NAV.map((n, i) => (
              <a
                key={n}
                href="#"
                className={[
                  "rounded-full px-3 py-1.5 text-[12.5px] tracking-wide transition",
                  i === 0
                    ? "text-vijaya-gold"
                    : "text-vijaya-ivory/75 hover:text-vijaya-gold",
                ].join(" ")}
              >
                {n}
              </a>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-3 lg:ml-0">
            <span className="te hidden text-[12px] text-vijaya-ivory/60 md:inline">
              తెలుగు · English
            </span>
            <a
              href="#distributor"
              className="inline-flex items-center gap-2 rounded-full bg-vijaya-redWarm px-4 py-2 text-[12.5px] font-semibold tracking-wide text-white shadow-[0_8px_24px_-12px_rgba(193,60,46,0.7)] transition hover:bg-vijaya-redDeep"
            >
              Become a Distributor
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
