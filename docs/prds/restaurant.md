# PRD — Restaurant & food

## Client profile (fictional, for tone calibration)
"Ember & Salt" — a modern bistro, mid-high price point, locally sourced menu, the kind of place that wants its website to feel like walking in the front door: warm light, the smell of something on the grill, a host who already knows your name.

## Goal of this site
A single-page experience that sells the *feeling* of the restaurant before the visitor ever reads the menu. Primary conversion action: reservation booking. Secondary: viewing the menu.

## Sections (in order)
1. **Hero** — full-bleed, 3D scene (see below), restaurant name, one-line tagline, primary CTA "Reserve a table", secondary "View menu" (scrolls to menu section).
2. **About / philosophy** — short paragraph, chef portrait or kitchen photo, scroll-reveal.
3. **Menu preview** — 4–6 signature dishes as cards, image + name + short description + price. Not the full menu — a teaser that links out or expands.
4. **Gallery** — masonry or horizontal-scroll image gallery, ambiance/food photography.
5. **Reservation** — embedded booking widget (placeholder: structure for OpenTable/Resy embed or a simple form posting to Formspree) plus hours, location, phone.
6. **Footer** — address, map embed or static map image, social links, hours.

## 3D concept
Hero scene: a single signature dish or ingredient (e.g. a plated dish, a wine glass, a citrus slice catching light) rendered as a low-poly-but-elegant 3D model, slowly rotating, with a warm key light and soft shadow. On scroll, the model can react — slight rotation tied to scroll position via `useScroll` + `useTransform`, not a separate scroll-jacking library. This is the kind of object that's achievable as a stylized/low-poly asset rather than a photorealistic one, which keeps the poly count and texture size down. Source via a free model from Sketchfab (CC license) or build primitive-based (a plate as a flattened cylinder, food as composited simple geometries) if no suitable free asset exists — flag this decision in memory.md either way.

Mobile fallback: static high-quality photo of the same subject, no Canvas mounted below `md` breakpoint, per the design system rule.

## Palette & type direction
Warm, low-saturation — terracotta, charcoal, cream. Avoid bright primary colors; this is "warm restaurant lighting" not "fast food." Display font: a serif or high-contrast sans with some character (something like a refined slab serif). Body: clean humanist sans.

## Tone of voice for copy
Sensory, unhurried, specific rather than generic. Not "delicious food, great atmosphere" — instead concrete sensory detail ("char from the wood grill", "the kind of bread you tear, not slice"). Short sentences. No exclamation points.

## Conversion priorities
1. Reservation CTA visible in hero and sticky in nav after scroll
2. Phone number tappable on mobile (`tel:` link)
3. Map/location findable within one scroll, not buried in footer only

## Performance notes specific to this site
Food photography is the heaviest asset category here — every gallery/menu image must be served via `srcset` at 3 sizes minimum (mobile/tablet/desktop) and compressed aggressively; food photos compress well without visible quality loss at moderate WebP compression (~75-80 quality).
