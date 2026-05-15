export type DesignTier = {
  id: "v1" | "v2" | "v3" | "v4";
  label: string;
  tagline: string;
  price: number;
  vibe: string;
  /** A short paragraph: what THIS design is communicating to a visitor. */
  message: string;
  /** Distinctive things this tier is doing. Positive only, never "doesn't have". */
  signature: string[];
  accent: string;
  available: boolean;
  href: string;
};

export const DESIGNS: DesignTier[] = [
  {
    id: "v1",
    label: "V1 — The Essentials",
    tagline: "Trusted by Families. Powered by Farmers.",
    price: 17000,
    vibe: "Clean & honest",
    message:
      "V1 speaks like a trusted neighbour. A calm cream palette, one strong promise, and the product itself doing the talking — no theatrics, nothing to scroll past. The site quietly says: we are real, we are local, and we have been here for generations.",
    signature: [
      "One headline, one promise — front and centre",
      "Bilingual Telugu + English voice in every section",
      "Real product packshots, no filler illustrations",
      "Numbered purity journey — straight, factual, easy to scan",
    ],
    accent: "#D8261A",
    available: true,
    href: "/",
  },
  {
    id: "v2",
    label: "V2 — Fresh Everyday",
    tagline: "Fresh Every Morning, Trusted Every Day.",
    price: 25000,
    vibe: "Modern & energetic",
    message:
      "V2 speaks like a confident modern brand sitting next to global names on the shelf. Cool blues, editorial cards, a daily-freshness rhythm and a network map of Andhra make Vijaya feel like the dairy that quietly powers your morning — on time, every time, everywhere it matters.",
    signature: [
      "Editorial product carousel with nutrition callouts",
      "Trust badges, 6-feature value grid, distributor CTA",
      "Across-Andhra network map with city list",
      "Refined Fraunces + Jakarta type pairing",
    ],
    accent: "#1B61D6",
    available: true,
    href: "/v2",
  },
  {
    id: "v3",
    label: "V3 — Since 1965",
    tagline: "From Farmers to Families.",
    price: 30000,
    vibe: "Cinematic & premium",
    message:
      "V3 speaks like a documentary film about a sixty-year-old institution. A cinematic full-bleed hero, gold italic accents on a deep forest palette, photo-led pillars and a hand-crafted journey ribbon place Vijaya not as a product on a shelf but as an institution families belong to. Built for trust, gravitas and brand authority.",
    signature: [
      "Cinematic full-bleed hero with farmer-led photography",
      "Forest + gold + ivory premium palette, italic serif accents",
      "Photo-grid trust pillars, premium product carousel",
      "Editorial farmer welfare essay + numbered purity journey",
      "Distributor band with brochure download + email subscribe",
    ],
    accent: "#C9A24E",
    available: true,
    href: "/v3",
  },
  {
    id: "v4",
    label: "V4 — The Flagship",
    tagline: "From Our Farmers to Your Families.",
    price: 37000,
    vibe: "Flagship · Brand-first",
    message:
      "V4 is the flagship — the union itself made into a website. A 60-year anniversary mark, six interactive welfare programmes lifted straight from the annual report, every product across all six categories, a founder&apos;s Telugu verse over a painted village scene, the Instagram feed and a downloadable annual report. Built to communicate brand authority, farmer dignity and the union&apos;s full story in one place.",
    signature: [
      "60-year anniversary badge + 1965 chronology threaded throughout",
      "Six interactive welfare programmes (Palasekarana, Vatsa Krishna, Kalyanamasthu, Pashuposhaka, Kshira Bandhu, Arogya) — click to deep-dive",
      "Founder&apos;s Telugu verse with painted village scene",
      "All 25 products across six categories with filter + hover micro-interactions",
      "Instagram social feed + Annual Report 2024-25 download",
      "Premium green + saffron + marigold palette, Fraunces italic accents",
    ],
    accent: "#143E26",
    available: true,
    href: "/v4",
  },
];

export const inr = (n: number) =>
  "₹" + n.toLocaleString("en-IN", { maximumFractionDigits: 0 });
