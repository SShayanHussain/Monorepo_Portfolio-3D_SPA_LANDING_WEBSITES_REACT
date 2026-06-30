# Project memory

Append-only log of decisions made across the 8-site build. Read this before starting a new site to avoid re-litigating settled questions. Keep entries short and factual.

Format per entry:
```
## [site-name] — [date]
- Decision: ...
- Why: ...
- Affects future sites: yes/no, and how
```

## foundation — 2026-06-30
- Decision: Build order across the portfolio is SaaS, restaurant, real-estate, dental, gym, salon FIRST. Law-firm and home-services are built LAST, and the "mount a Canvas vs. ship static/CSS-only 3D" judgment call for those two is decided from real measured bundle/frame data off the first six — never in the abstract.
- Why: Both law-firm and home-services PRDs explicitly permit a minimal/no-3D treatment and cross-reference each other; deciding them last lets the gym (most 3D-leaned) and the lighter sites set the empirical budget envelope first.
- Affects future sites: yes — do not scaffold law-firm or home-services until the other six are measured.

## foundation — 2026-06-30
- Decision: Mobile (<md, 768px) 3D fallback is a three-mode matrix, expressed as Canvas3DWrapper's `mobileFallback: 'static' | 'reduced' | 'none'` prop (NOT a boolean). 'static' = Canvas never mounts, raster hero image (restaurant, dental, salon, law-firm, home-services). 'reduced' = lighter 3D scene mounts, reduced instance/poly count (gym, saas). 'none' = no Canvas, composition recreated in 2D CSS/SVG (real-estate).
- Why: The design-system default ("no Canvas below md") is overridden per-niche; gym & saas keep a lighter 3D scene because a flat fallback undersells the brand, real-estate redoes its assembly composition in 2D. Encoding this as a typed prop makes it explicit per-site instead of inferred.
- Affects future sites: yes — every site passes its mode explicitly; this table is the source of truth.

## foundation — 2026-06-30
- Decision: prefers-reduced-motion and device/viewport are INDEPENDENT axes in Canvas3DWrapper. Reduced-motion is evaluated FIRST as a hard gate to the static path and always wins when both apply. Only if motion is allowed does the wrapper branch on viewport into the mobileFallback mode. (Gym + mobile + no reduced-motion = reduced-3D scene; gym + mobile + reduced-motion = static regardless of viewport.)
- Why: Design system mandates a static, non-animated state for reduced-motion users with no exceptions; viewport behavior is a separate concern.
- Affects future sites: yes — wrapper gating order is fixed.

## foundation — 2026-06-30
- Decision: One shared `frostedGlassMaterial` helper lives in packages/ui/, profiled once on mid-tier mobile GPU emulation. Dental and salon both consume it (passing different palette/lighting params: salon = warmer, more saturated, higher-contrast highlights; dental = flatter, even, cooler "wellness" lighting). No per-site reimplementation of MeshPhysicalMaterial transmission.
- Why: Three niches request expensive transmission materials and each PRD independently warns to profile it; solve and budget-test once.
- Affects future sites: yes — dental & salon depend on this helper (not yet built; build before dental).

## foundation — 2026-06-30
- Decision: All booking/contact integrations are structurally-correct STUBS for the portfolio build — native HTML forms posting Formspree-style — with a comment marking where a real client swaps in their actual platform (OpenTable/Resy, Calendly, Vagaro/Fresha). No real third-party accounts wired up.
- Why: It's a portfolio piece; the structure demonstrates the integration point without standing up real vendor accounts.
- Affects future sites: yes — applies to every site with a form/booking section.

## foundation — 2026-06-30
- Decision: Salon-spa primary palette is blush/cream/soft-gold. The moodier jewel-tone (emerald/plum) ships as a selectable variant in the data layer but is NOT the default for screenshots.
- Why: Blush/gold differentiates cleanly from law-firm navy/burgundy and dental cool-blues, giving the portfolio better visual range on scroll.
- Affects future sites: no (salon-specific), but recorded for consistency.

## saas-startup — 2026-06-30
- Decision: InstancedMesh pattern for particle/node-network scenes. Use a single `InstancedMesh` for all nodes (one draw call) and a single `BufferGeometry` with `LineSegments` for connection lines. Per-node animation is driven in `useFrame` via `dummy.position/scale + setMatrixAt + instanceMatrix.needsUpdate = true`. Pre-allocate the max possible line-pair buffer and use `setDrawRange` to control how many are actually drawn per frame — no geometry allocation during render.
- Why: The node-network hero with 60 nodes (28 on reduced mobile) fits the 300KB lazy-chunk budget at 1.41KB scene code + 218KB gzipped Three.js. The instancing technique is the same one the gym/fitness particle field will use (different visual personality, same GPU-efficient approach).
- Affects future sites: yes — gym/fitness uses the same InstancedMesh + BufferGeometry pattern for its particle field. Any instanced scene should follow this approach: procedural geometry (no .glb files), quality-adaptive counts via `Scene3DProps.quality`, and seeded random for deterministic layouts across re-renders.

## saas-startup — 2026-06-30
- Decision: Scene components receive `quality: 'full' | 'reduced'` from Canvas3DWrapper and use it to scale node/particle counts. SaaS uses 60 nodes full / 28 nodes reduced. Connection distance also scales down (2.8 → 2.5). This keeps the visual character while halving the per-frame work on mobile.
- Why: Mobile GPUs can't sustain 60-node + O(n²) distance checks at 60fps. Halving the count makes the per-frame distance-check loop ~4× cheaper.
- Affects future sites: yes — every 3D scene should use the quality prop to scale geometry/instance counts, not just DPR.

## saas-startup — 2026-06-30
- Decision: CSS `@import` statements MUST come before `@tailwind base/components/utilities` directives. The order is: `@import` first, then `@tailwind`. Otherwise Vite/PostCSS emits warnings.
- Why: CSS spec requires `@import` to precede all other statements besides `@charset`.
- Affects future sites: yes — every site's `index.css` must follow this import order.

## saas-startup — 2026-06-30
- Decision: Nav component now includes dark-mode variants (`dark:bg-neutral-900/80`, `dark:text-neutral-300`, `dark:bg-neutral-900` on the mobile drawer). Sites using dark mode just add `class="dark"` to `<html>` — no per-site Nav className overrides needed.
- Why: SaaS is dark-mode-first; the shared Nav needed dark variants to not show white backgrounds on a dark page. Gym/fitness will likely be dark too.
- Affects future sites: yes — dark-mode sites just work now. This is a shared component change.

## saas-startup — 2026-06-30
- Decision: Nav.links type changed from `NavLink[]` to `readonly NavLink[]` to accept `as const` content data without casting.
- Why: Content files use `as const` for type safety; the mutable array type was incompatible.
- Affects future sites: yes — all sites can pass `as const` nav data directly now.

## saas-startup — 2026-06-30
- Decision: Vite config uses `manualChunks` to force all Three.js/R3F code into a single `three` chunk. This makes budget tracking trivial — one chunk to measure against the 300KB lazy limit.
- Why: Without this, Rollup might split Three.js across multiple chunks making it hard to verify the lazy bundle budget.
- Affects future sites: yes — copy this `manualChunks` pattern to every site's `vite.config.ts`.

## saas-startup — 2026-06-30
- Decision: Measured production bundle sizes (gzipped): initial JS = 97.89KB (budget: <200KB ✅), lazy Three.js chunk = 217.98KB (budget: <300KB ✅), NodeNetworkScene = 1.41KB, CSS = 4.58KB. All budgets pass with margin.
- Why: Establishes the baseline. The 218KB Three.js chunk is the floor for any site using R3F — the scene-specific code adds negligible weight on top.
- Affects future sites: yes — expect ~218KB gzipped as the Three.js floor for all sites. Scene code should stay tiny (procedural geometry, no heavy .glb models).

## restaurant — 2026-06-30
- Decision: Procedural 3D scene used for restaurant hero (stylized plate and wine glass built purely with Three.js primitives) instead of a downloaded .glb asset.
- Why: Ensures the custom lazy chunk stays extremely small (<5KB) and avoids fetching an external asset, perfectly preserving the bundle budget while satisfying the PRD's "single signature dish/ingredient" requirement.
- Affects future sites: no, specific to restaurant.

## portfolio-wide QA pass — 2026-06-30
- Decision (CRITICAL, all 12 sites): the lazy 3D chunk was being eagerly `modulepreload`-ed into every `index.html` — including the two non-3D sites — silently violating the "<200KB initial gzip" budget AND the "3D must never block first paint" rule. Fixed by (a) making `Canvas3DWrapper` reach `@react-three/fiber` only through a `React.lazy(() => import("./internal/CanvasRoot"))` boundary — it no longer statically imports R3F; and (b) replacing every site's `vite.config.ts` object-form `manualChunks` with the canonical function form.
- Why: two compounding bugs. (1) `Canvas3DWrapper` statically `import { Canvas } from "@react-three/fiber"`, and every Hero imports the wrapper eagerly (only the *scene* was lazy) — so the whole R3F runtime was a static entry dep. (2) object-form `manualChunks: { three: [...] }` let Rollup absorb React, and drei's helper deps (`three-stdlib`, `maath`) into eager chunks, creating a `vendor→three` static edge. Net: ~315–370KB gzip eager before; ~102–109KB eager + 211–230KB lazy after. All 12 now pass both budgets.
- Canonical `manualChunks(id)` (use for EVERY new site — copy from any site's vite.config.ts): pin `vite/preload-helper`→"vendor"; skip non-`node_modules`; `/three/`|`@react-three`→"three"; `react|react-dom|scheduler|framer-motion|clsx|tailwind-merge`→"vendor"; everything else UNASSIGNED (so drei's dynamic-only deps stay in the lazy scene chunks). Pinning React explicitly is mandatory — left unassigned Rollup co-locates it with three and the eager preload returns.
- Affects future sites: YES. Any new site MUST use the function-form `manualChunks` above and keep `Canvas3DWrapper`'s lazy-CanvasRoot boundary intact, or the 3D bundle silently goes eager again. Verify after build with: `grep -q "three-" sites/<x>/dist/index.html` → must be ABSENT.

- Decision: saas-startup's package.json pinned `three`/`@types/three` to `^0.160.0` while every other site uses `^0.169.0`; its drei resolved to 0.169-era fiber types, so `tsc -b` failed (InstancedMesh/EventMap identity clash) and blocked `vite build`. Bumped saas to `^0.169.0` (+ drei `^9.114.3`, fiber `^8.17.10`, framer `^11.11.9`) to match the portfolio. Single three version is the standard; pnpm 9.7 does NOT honor `overrides` from package.json OR pnpm-workspace.yaml for transitive dedup, so per-site declarations must be kept aligned manually.
- Why: mismatched direct `three` version vs. drei's fiber types is the actual cause of cross-package Three.js type clashes — not a missing override.
- Affects future sites: YES — always declare `three`/`@types/three` `^0.169.0` in a new site's package.json (copy deps from restaurant, not saas).

- Decision: fixed 16 dead (HTTP 404) Unsplash image URLs across 9 sites (fashion, photographer, real-estate, salon-spa, gym, dental, law-firm, logistics, restaurant) — replaced with verified-live, subject-matched photo IDs. All 76 unique image URLs now return 200. NOTE: three replacements are people/portraits (gym male coach, dental female hygienist, photographer "about") chosen to match described subject but not visually eyeballed — worth a glance if a client cares.
- Why: broken hero/listing/staff images would render as broken `<img>` in production.
- Affects future sites: process note — when adding Unsplash URLs, curl each `photo-<id>` once; dead IDs (deleted/private photos) 404 silently and only surface as broken images in the deployed build.
