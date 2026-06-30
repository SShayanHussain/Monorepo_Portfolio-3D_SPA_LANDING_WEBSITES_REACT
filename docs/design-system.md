# Shared design system

Read this alongside the relevant niche PRD. This file defines tokens shared across all 8 sites; niche PRDs only override what's specific to that niche (palette accent, font pairing, etc).

## Spacing scale
Tailwind default scale, used consistently: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px. Section vertical padding defaults to 96px desktop / 64px mobile unless a PRD specifies otherwise.

## Type scale
- Display (hero headline): clamp(2.5rem, 5vw + 1rem, 4.5rem)
- H2 (section headline): clamp(1.75rem, 3vw + 1rem, 2.75rem)
- H3 (card/subsection): 1.25rem–1.5rem
- Body: 1rem, line-height 1.6
- Small/caption: 0.875rem

Max 2 font families per site: one display/heading font, one body font. Self-hosted via `@fontsource`, subset to Latin only unless a PRD needs another script, loaded with `font-display: swap`.

## Motion principles (apply everywhere)
- Entrance animations: fade + 16–24px translate-Y, 400–600ms, ease `[0.16, 1, 0.3, 1]` (Framer Motion's "easeOutExpo"-like curve).
- Scroll-triggered reveals: trigger at 15–20% element visibility, animate once (`viewport={{ once: true }}` in Framer Motion) — never re-trigger on scroll-back, it reads as broken.
- Hover states: 150–200ms, no bounce/spring on hover (springs are for entrances and drag, not hover).
- Respect `prefers-reduced-motion`: every animation must have a reduced-motion variant that's an instant or near-instant state change, no parallax, no auto-playing 3D rotation.
- Cursor-follow effects (custom cursor, magnetic buttons) are a shared `packages/ui/` component — don't reimplement per site, and always disable on touch devices (`(hover: hover) and (pointer: fine)` media query).

## Shared components (packages/ui/)
- `Button` — primary/secondary/ghost variants, includes magnetic hover effect, disabled on touch
- `Section` — wraps page sections, handles consistent vertical padding + scroll-reveal wrapper
- `Nav` — sticky/transparent-to-solid-on-scroll header, mobile menu drawer
- `Canvas3DWrapper` — handles lazy-loading, `prefers-reduced-motion` fallback, in-viewport pause/resume, loading skeleton
- `SectionHeading` — eyebrow text + headline + optional subhead, consistent across sites

## Accessibility baseline (every site)
- Color contrast: body text minimum 4.5:1, large text minimum 3:1
- All interactive elements keyboard-reachable, visible focus states (don't remove the outline, restyle it)
- 3D canvases: `aria-hidden="true"` if purely decorative, with the meaningful content available as real DOM text alongside it — never put information only inside the WebGL canvas
- Forms: real `<label>` elements, not placeholder-as-label
- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<footer>` — not div soup

## Responsive breakpoints
Tailwind defaults: sm 640px, md 768px, lg 1024px, xl 1280px, 2xl 1536px. Design mobile-first; the 3D hero scene gets a simplified/lower-poly variant below `md` (768px) — don't just scale down the same scene, actually reduce geometry complexity for mobile GPUs.
