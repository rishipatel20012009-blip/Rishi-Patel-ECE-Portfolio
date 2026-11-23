import { Crosshair, Globe } from 'lucide-react';
import { motion } from 'motion/react';
import { HERO_STATS, PROFILE } from '../data/portfolioData';

export default function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-zinc-900 bg-[#09090b] pt-6 pb-16 md:pt-10 md:pb-20">
      {/* Subtle deep crimson radial ambiance */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-red-900/15 blur-[130px]"
      />

      <div className="relative mx-auto max-w-[1200px] px-6">
        {/* Top Micro Metadata Row matching template top corners */}
        <div className="mb-3 flex flex-wrap items-center justify-between gap-4 text-[11px] font-medium tracking-[0.2em] text-zinc-400 uppercase">
          <span>B.Tech ECE · Karnavati University</span>
          <span className="text-zinc-300">{PROFILE.availability}</span>
        </div>

        {/* Monumental Condensed Display Header + Layered Central Silhouette */}
        <div className="relative flex flex-col items-center">
          <h1
            aria-label="Portfolio"
            className="portfolio-wordmark font-display w-full select-none text-center text-[21vw] leading-[0.82] font-black tracking-[-0.02em] uppercase sm:text-[138px] md:text-[176px] lg:text-[214px]"
          >
            PORTFOLIO
          </h1>

          {/* 3-Column Editorial Hero Composition */}
          <div className="relative z-10 -mt-6 grid w-full grid-cols-1 items-end gap-10 md:-mt-20 md:grid-cols-12 md:gap-6">
            {/* Left Column: Greeting, Name Stack, Bio & Location */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="order-2 md:order-1 md:col-span-4 md:pb-4"
            >
              <p className="font-script text-3xl text-zinc-100 sm:text-4xl">{PROFILE.greeting}</p>
              <h2 className="font-display mt-1 text-5xl leading-[0.88] font-black tracking-tight text-white uppercase sm:text-6xl lg:text-[68px]">
                <span className="block">{PROFILE.firstName}</span>
                <span className="block">{PROFILE.lastName}</span>
              </h2>

              <p className="mt-3 text-xs font-semibold tracking-[0.16em] text-red-500 uppercase">
                {PROFILE.roleLabel}
              </p>

              <p className="mt-4 max-w-[34ch] text-sm leading-relaxed text-zinc-400">
                {PROFILE.bio}
              </p>

              <div className="mt-6 flex items-center gap-2.5 text-xs font-medium tracking-wider text-zinc-300 uppercase">
                <Globe className="h-4 w-4 shrink-0 text-red-600" aria-hidden="true" />
                <span>{PROFILE.shortLocation}</span>
                <span aria-hidden="true" className="text-zinc-600">
                  ·
                </span>
                <span className="text-zinc-400">SIH 2026 Top 100</span>
              </div>
            </motion.div>

            {/* Center Column: High-Contrast Layered Engineering Silhouette Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="order-1 flex justify-center md:order-2 md:col-span-4"
            >
              <div className="relative flex h-[320px] w-[260px] items-end justify-center overflow-hidden rounded-t-full border border-b-0 border-zinc-800/80 bg-gradient-to-b from-zinc-900/90 via-[#121215] to-[#09090b] sm:h-[370px] sm:w-[300px]">
                {/* Subtle crimson rim halo */}
                <div
                  aria-hidden="true"
                  className="absolute top-6 h-44 w-44 rounded-full bg-red-700/20 blur-2xl"
                />

                {/* Minimal architectural ECE circuit geometry behind bust */}
                <svg
                  viewBox="0 0 320 390"
                  className="relative z-10 h-full w-full"
                  role="img"
                  aria-label="Stylized editorial portrait silhouette of Rishi Patel"
                >
                  <defs>
                    <linearGradient id="suitGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#27272a" />
                      <stop offset="55%" stopColor="#141416" />
                      <stop offset="100%" stopColor="#09090b" />
                    </linearGradient>
                    <linearGradient id="rimLight" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#dc2626" stopOpacity="0.85" />
                      <stop offset="50%" stopColor="#71717a" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#18181b" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="bottomFade" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="55%" stopColor="#09090b" stopOpacity="0" />
                      <stop offset="100%" stopColor="#09090b" stopOpacity="1" />
                    </linearGradient>
                  </defs>

                  {/* Subtle technical grid arcs */}
                  <circle
                    cx="160"
                    cy="155"
                    r="105"
                    fill="none"
                    stroke="#27272a"
                    strokeWidth="1"
                    strokeDasharray="4 6"
                  />
                  <circle
                    cx="160"
                    cy="155"
                    r="130"
                    fill="none"
                    stroke="#7f1d1d"
                    strokeOpacity="0.35"
                    strokeWidth="1"
                  />

                  {/* Stylized tailored bust & collar silhouette */}
                  <path
                    d="M42 390 C48 290, 92 252, 132 242 L134 214 C122 204, 114 184, 114 156 C114 114, 134 90, 160 90 C186 90, 206 114, 206 156 C206 184, 198 204, 186 214 L188 242 C228 252, 272 290, 278 390 Z"
                    fill="url(#suitGrad)"
                    stroke="url(#rimLight)"
                    strokeWidth="1.5"
                  />

                  {/* Subtle crisp shirt V-collar & lapel accent */}
                  <path
                    d="M132 242 L160 302 L188 242"
                    fill="none"
                    stroke="#52525b"
                    strokeWidth="1.4"
                  />
                  <path
                    d="M118 248 L152 330 M202 248 L168 330"
                    fill="none"
                    stroke="#991b1b"
                    strokeOpacity="0.7"
                    strokeWidth="1.2"
                  />

                  {/* Monogram mark inside chest crest */}
                  <text
                    x="160"
                    y="344"
                    textAnchor="middle"
                    fill="#71717a"
                    fontSize="11"
                    fontWeight="700"
                    letterSpacing="4"
                  >
                    ECE · SIH
                  </text>

                  {/* Seamless bottom blend into pitch-black background */}
                  <rect x="0" y="0" width="320" height="390" fill="url(#bottomFade)" />
                </svg>
              </div>
            </motion.div>

            {/* Right Column: Tagline + 3-Row Crimson Stat Stack */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="order-3 flex flex-col justify-between gap-8 md:col-span-4 md:pb-4"
            >
              <div className="flex items-start gap-3.5 md:justify-end">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-zinc-700 bg-[#141416] text-red-500">
                  <Crosshair className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <p className="max-w-[24ch] text-sm leading-snug text-zinc-300 md:text-right">
                  {PROFILE.tagline}
                </p>
              </div>

              <div className="divide-y divide-zinc-800/90 border-t border-b border-zinc-800/90">
                {HERO_STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center justify-between gap-4 py-3.5"
                  >
                    <span className="font-display text-3xl font-extrabold tracking-tight text-red-600 tabular-nums sm:text-4xl">
                      {stat.value}
                    </span>
                    <span className="text-right text-[11px] font-medium tracking-[0.16em] text-zinc-400 uppercase">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
