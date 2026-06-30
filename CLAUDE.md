# CLAUDE.md

This file is loaded automatically at the start of every Claude Code session in this repo. It holds the rules that apply to every site in the portfolio. Niche-specific content lives in `docs/prds/[niche].md` — read the relevant one before starting work on that site, don't try to hold all eight in context at once.

## What this repo is

A monorepo of 8 standalone 3D landing page / SPA websites, built as a portfolio to sell to businesses in different niches. Each site is its own package under `sites/[niche-name]/`, independently deployable, sharing a common component library under `packages/ui/`.

```
/
├── CLAUDE.md                 <- this file
├── docs/
│   ├── prds/                 <- one PRD per niche, read on demand
│   └── design-system.md      <- shared tokens, read on demand
├── packages/
│   └── ui/                   <- shared components (Button, Section, Cursor, etc.)
├── sites/
│   ├── restaurant/
│   ├── real-estate/
│   ├── dental-clinic/
│   ├── gym-fitness/
│   ├── law-firm/
│   ├── salon-spa/
│   ├── saas-startup/
│   └── home-services/
└── .claude/
    └── memory.md              <- accumulated decisions, append-only
```

## Tech stack — locked, do not deviate without discussion

This stack is chosen specifically for fast, lightweight, 3D-animated single-page sites. It is NOT the right stack for apps with auth, databases, or multi-page server rendering — if a future task needs those, that's a different conversation, flag it rather than silently reaching for Next.js.

- **Build tool**: Vite 5+ (not Next.js — no SSR needed, these are static marketing sites, Vite's dev server and build are both faster for this use case)
- **Framework**: React 18 + TypeScript (strict mode on)
- **3D**: Three.js via `@react-three/fiber` + `@react-three/drei`. Always lazy-loaded via `React.lazy()` + `Suspense` — the 3D bundle must never block first paint.
- **Styling**: Tailwind CSS, utility-first, no CSS-in-JS runtime
- **Animation**: Framer Motion for scroll-triggers, page transitions, and 2D micro-interactions. GSAP only if a 3D scene needs precise timeline sequencing the React state model can't express cleanly — ask before adding it.
- **Forms**: native HTML form + Formspree or a simple serverless function on Vercel — no full backend
- **Deployment**: Vercel (primary) or Cloudflare Pages, both free tier, static output only
- **Package manager**: pnpm (faster installs, strict by default, good monorepo support)

## Performance budget — non-negotiable

Every site must hit these on mobile (throttled 4G, mid-tier device) before it's considered done:

| Metric | Budget |
|---|---|
| Lighthouse Performance | ≥ 90 |
| First Contentful Paint | < 1.8s |
| Total bundle (gzipped, initial) | < 200KB |
| 3D bundle (lazy chunk) | < 300KB |
| Largest Contentful Paint | < 2.5s |
| Cumulative Layout Shift | < 0.1 |

Rules that keep us inside this budget:
- 3D models: `.glb` only, Draco-compressed. Never `.gltf` uncompressed, never `.obj`/`.fbx` in production.
- Images: `.webp` or `.avif`, served at the size they're displayed at, lazy-loaded below the fold via native `loading="lazy"`.
- Fonts: subset to the characters actually used, `font-display: swap`, max 2 font families per site, max 3 weights total.
- No 3D scene runs at more than 60fps target with a frame budget check — if a scene drops frames on a mid-tier mobile GPU, simplify geometry (lower poly count, fewer lights, bake shadows instead of real-time) before adding more visual complexity.
- The 3D canvas pauses rendering (`frameloop="demand"` in R3F) when not in viewport — use `useInView` to gate it.
- One `requestAnimationFrame` loop per page, not one per component. If multiple animated elements exist, they share a loop.

## Conventions

- Components: PascalCase, one component per file, co-located with its own styles if any (Tailwind means usually none).
- File naming: kebab-case for non-component files, PascalCase for `.tsx` component files.
- Each site's `src/` follows: `components/` (page sections), `components/3d/` (R3F scenes, always lazy-loaded from here), `hooks/`, `lib/` (utils), `data/` (copy, content as typed objects, not hardcoded in JSX).
- No inline styles except dynamic values Tailwind can't express (e.g. computed transform values from scroll position).
- Accessibility is mandatory, not optional: every interactive 3D element needs a non-3D fallback path for users with `prefers-reduced-motion` or low-end devices — check this media query and serve a static hero image instead of mounting the Canvas if set.
- Every PRD's "tone of voice" section governs the actual copy written in `data/content.ts` — don't write generic placeholder copy, write copy as if for the real client described in the PRD.

## Commands

```bash
pnpm install              # install all workspace deps
pnpm dev --filter=[site]  # run one site's dev server
pnpm build --filter=[site]
pnpm lint --filter=[site]
pnpm typecheck --filter=[site]
pnpm lighthouse [site]    # runs lighthouse-ci against the local build, fails if budget exceeded
```

## Before writing code for a new site

1. Read `docs/prds/[niche].md` in full.
2. Read `docs/design-system.md` for shared tokens (colors, spacing scale, type scale) — niche PRDs only specify what's different from the shared system.
3. Check `.claude/memory.md` for any decisions from prior sites that apply here (e.g. "we standardized on `useScroll` + `useTransform` for parallax, not a custom hook").
4. Scaffold from the shared `packages/ui/` components first — only build a new primitive if the niche genuinely needs something the shared library doesn't have. Flag it in memory.md if you add one, so it can be promoted to the shared package later.

## After finishing a site

Append a short entry to `.claude/memory.md`: what was built, any non-obvious technical decision and why, anything that should change in `CLAUDE.md` or the design system for future sites. Keep it factual and brief — this file is read by future sessions, not a changelog for humans.

## What NOT to do

- Don't add a backend, database, or auth system to any of these sites unless a PRD explicitly calls for it (e.g. a booking form that needs persistence) — and even then, prefer a third-party service (Calendly embed, Formspree) over building one.
- Don't reach for Next.js, Remix, or any SSR framework for these — the brief is static, fast, lightweight SPAs.
- Don't install a UI kit (MUI, Chakra, Ant Design) — Tailwind + the shared `packages/ui/` primitives are sufficient and a kit adds bundle weight we don't need.
- Don't use `THREE.CapsuleGeometry` (not consistently supported across the Three.js version range we're pinned to) — use `CylinderGeometry` or `SphereGeometry` composites instead.
- Don't ship a 3D scene without first checking it against the performance budget table above.
