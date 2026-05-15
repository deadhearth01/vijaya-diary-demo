"use client";

import { useState } from "react";
import Image from "next/image";

type Post = {
  src: string;
  caption: string;
  tags: string[];
  likes: number;
  comments: number;
  hoursAgo: number;
};

const POSTS: Post[] = [
  {
    src: "/v4/social/post-1.png",
    caption: "Gold Curd — the taste of a Telugu home, set fresh every morning.",
    tags: ["VijayaGoldCurd", "TasteOfHome", "FarmFresh"],
    likes: 4821,
    comments: 142,
    hoursAgo: 6,
  },
  {
    src: "/v4/social/post-2.png",
    caption: "Beat the summer with Vijaya Ice Candy — tangy, flavourful, refreshing.",
    tags: ["VijayaIceCandy", "SummerFresh", "MadeInAndhra"],
    likes: 6920,
    comments: 318,
    hoursAgo: 18,
  },
  {
    src: "/v4/social/post-3.png",
    caption: "Vijaya Vibes — now available at your nearest store. Try Sabja Lassi today!",
    tags: ["VijayaVibes", "FlavouredMilk", "NewLaunch"],
    likes: 3742,
    comments: 96,
    hoursAgo: 36,
  },
  {
    src: "/v4/social/post-4.png",
    caption: "Fresh, farmer-supported, family-trusted — every Vijaya pack carries the same promise.",
    tags: ["TrustedByFamilies", "PoweredByFarmers"],
    likes: 5108,
    comments: 211,
    hoursAgo: 52,
  },
];

const HeartIcon = ({ filled }: { filled: boolean }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill={filled ? "#C2412B" : "none"} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M20.8 6.6a5.4 5.4 0 00-7.6 0L12 7.8l-1.2-1.2a5.4 5.4 0 00-7.6 7.6l1.2 1.2L12 23l7.6-7.6 1.2-1.2a5.4 5.4 0 000-7.6z" />
  </svg>
);

function PostCard({ post }: { post: Post }) {
  const [liked, setLiked] = useState(false);
  const likeCount = post.likes + (liked ? 1 : 0);

  return (
    <article className="flex w-full flex-col overflow-hidden rounded-3xl border border-vijaya-flagLine bg-white text-vijaya-inkWarm shadow-[0_18px_44px_-26px_rgba(28,51,40,0.25)] transition hover:-translate-y-1 hover:border-vijaya-leafBright/55 hover:shadow-card">
      <header className="flex items-center gap-3 px-4 py-3">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-tr from-vijaya-vermilion via-vijaya-saffron to-vijaya-marigold p-[2px]">
          <span className="grid h-full w-full place-items-center rounded-full bg-white">
            <Image src="/logo.png" alt="Vijaya" width={28} height={20} className="h-5 w-auto" />
          </span>
        </span>
        <div className="leading-tight">
          <p className="flex items-center gap-1 text-[13.5px] font-semibold">
            vijayadairy
            <svg width="13" height="13" viewBox="0 0 24 24" fill="#1B61D6" aria-hidden>
              <path d="M22.5 12.5l-2.4-2.7.4-3.5-3.5-.8-1.8-3-3.2 1.3-3.2-1.3-1.8 3-3.5.8.4 3.5L1.5 12.5l2.4 2.7-.4 3.5 3.5.8 1.8 3 3.2-1.3 3.2 1.3 1.8-3 3.5-.8-.4-3.5 2.4-2.7zM10.5 17l-4-4 1.4-1.4 2.6 2.6 5.6-5.6L17.5 10l-7 7z" />
            </svg>
          </p>
          <p className="text-[11.5px] text-vijaya-inkWarm/55">Krishna District · Andhra Pradesh</p>
        </div>
        <button aria-label="More" className="ml-auto rounded-full p-1 text-vijaya-inkWarm/60 hover:bg-vijaya-paperFlag">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <circle cx="5" cy="12" r="1.5" />
            <circle cx="12" cy="12" r="1.5" />
            <circle cx="19" cy="12" r="1.5" />
          </svg>
        </button>
      </header>

      <div className="relative aspect-square w-full bg-vijaya-paperFlag">
        <Image
          src={post.src}
          alt={post.caption}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 320px, 90vw"
        />
      </div>

      <div className="flex items-center gap-3 px-4 pt-3">
        <button onClick={() => setLiked((v) => !v)} aria-label="Like" className="text-vijaya-inkWarm transition hover:scale-110">
          <HeartIcon filled={liked} />
        </button>
        <button aria-label="Comment" className="text-vijaya-inkWarm transition hover:opacity-70">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M21 11.5a8.4 8.4 0 01-12.9 7.1L3 20l1.4-5.1A8.4 8.4 0 1121 11.5z" />
          </svg>
        </button>
        <button aria-label="Share" className="text-vijaya-inkWarm transition hover:opacity-70">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
        <button aria-label="Save" className="ml-auto text-vijaya-inkWarm transition hover:opacity-70">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
          </svg>
        </button>
      </div>

      <div className="space-y-1.5 px-4 pb-4 pt-2">
        <p className="text-[13px] font-semibold">{likeCount.toLocaleString("en-IN")} likes</p>
        <p className="text-[13px] leading-snug">
          <span className="font-semibold">vijayadairy</span>{" "}
          <span dangerouslySetInnerHTML={{ __html: post.caption }} />
        </p>
        <p className="text-[12px] leading-snug text-vijaya-krishna">
          {post.tags.map((t) => `#${t}`).join(" ")}
        </p>
        <p className="text-[10.5px] uppercase tracking-wider text-vijaya-inkWarm/45">
          {post.hoursAgo < 24 ? `${post.hoursAgo} hours ago` : `${Math.round(post.hoursAgo / 24)} days ago`}
        </p>
      </div>
    </article>
  );
}

export default function SocialFeed() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid items-end gap-8 md:grid-cols-[1.1fr_1fr] md:gap-12">
          <div>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-vijaya-saffron/40 bg-vijaya-paperFlag px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-vijaya-saffron">
              <span className="h-1.5 w-1.5 rounded-full bg-vijaya-saffron" />
              @vijayadairy
            </span>
            <h2 className="mt-5 font-display text-[44px] font-medium leading-[1.02] tracking-[-0.02em] text-vijaya-inkWarm sm:text-[56px]">
              Live from
              <em
                className="not-italic px-2 text-vijaya-leafDeepFlag"
                style={{ fontStyle: "italic", fontWeight: 500 }}
              >
                Our Feed.
              </em>
            </h2>
            <p className="te mt-3 text-base text-vijaya-leafDeepFlag/75">
              మన తాజా క్షణాలు · ఇన్‌స్టాగ్రామ్‌లో.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 md:items-end">
            <p className="max-w-md text-[15px] leading-relaxed text-vijaya-inkWarm/65 md:text-right">
              Follow @vijayadairy for fresh launches, recipes, farmer stories
              and the little moments that make Vijaya part of every Telugu
              home.
            </p>
            <a
              href="https://www.instagram.com/vijaya__dairy/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-vijaya-leafDeepFlag px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-vijaya-leafBright"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
              Follow on Instagram
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {POSTS.map((p) => (
            <li key={p.src}>
              <PostCard post={p} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
