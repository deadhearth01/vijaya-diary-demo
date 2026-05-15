import Image from "next/image";
import Link from "next/link";

const NAV = ["Home", "About Us", "Products", "Farmer Welfare", "Sustainability", "Contact"];

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-vijaya-line bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-[68px] max-w-7xl items-center gap-6 px-5">
        <Link href="/v2" className="flex items-center gap-2.5">
          <Image src="/logo.png" alt="Vijaya" width={56} height={36} className="h-9 w-auto" priority />
          <Image
            src="/Krishna-Distric-Milk-Producers.png"
            alt="Krishna District Milk Producers"
            width={44}
            height={44}
            className="hidden h-9 w-auto sm:block"
          />
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-1 md:flex">
          {NAV.map((n, i) => (
            <a
              key={n}
              href="#"
              className={[
                "rounded-full px-3 py-1.5 text-[13px] transition",
                i === 0
                  ? "bg-vijaya-skywash text-vijaya-blueDeep"
                  : "text-vijaya-slate/75 hover:bg-vijaya-skywash hover:text-vijaya-blueDeep",
              ].join(" ")}
            >
              {n}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <span className="te hidden text-[12px] text-vijaya-slateMute lg:inline">
            తెలుగు · English
          </span>
          <a
            href="#distributor"
            className="inline-flex items-center gap-2 rounded-full bg-vijaya-blue px-4 py-2 text-[13px] font-medium text-white shadow-soft transition hover:bg-vijaya-blueDeep"
          >
            Become a Distributor
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </header>
  );
}
