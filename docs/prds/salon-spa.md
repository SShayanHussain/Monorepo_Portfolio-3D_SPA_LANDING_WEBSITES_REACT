# PRD — Salon & spa

## Client profile (fictional)
"Lumen Studio" — a contemporary hair/beauty salon and day spa, the kind of place selling transformation and self-care as much as the service itself.

## Goal of this site
Drive bookings for services. Primary conversion: "Book now" linking to a scheduling system. Secondary: browse services/pricing.

## Sections (in order)
1. **Hero** — soft, luminous 3D scene (see below), salon name, aspirational headline, CTA "Book now" + secondary "View services".
2. **Services menu** — categorized list (hair, color, spa treatments, nails, etc.), service name + duration + price, organized in tabs or accordion sections rather than one long flat list.
3. **Gallery / portfolio** — work showcase, before/after or styled looks, masonry grid.
4. **Stylists/therapists** — photo, name, specialty, can link to "book with [name]" if the booking system supports per-stylist booking.
5. **Pricing/packages** — if not fully covered in services menu, a dedicated packages/membership section (spa packages, color membership programs are common upsells in this niche).
6. **Testimonials** — client reviews, ideally with photos of the work referenced.
7. **Booking** — embedded scheduling widget or clear CTA to external booking platform (Vagaro/Fresha-style), plus location, hours.
8. **Footer** — address, map, social (Instagram especially — this niche is highly visual and social-proof-driven).

## 3D concept
Hero scene: soft, luminous, beauty-adjacent abstraction — think a flowing ribbon/fabric-like form (achievable as a deformed plane geometry with a subtle vertex-displacement shader, or simpler: a tube geometry following a smooth spline path) catching soft rim light, slowly flowing/undulating. Alternative simpler approach: soft glowing orbs/spheres with frosted-glass material (`MeshPhysicalMaterial` with roughness + transmission) gently floating with slight independent motion — visually similar in spirit to the dental clinic's calm abstraction but warmer and more luxurious in palette/lighting rather than clinical-calm. The distinction from the dental clinic 3D treatment should be: warmer light temperature, slightly more saturated/jewel-tone color, more "glamour" in the lighting (slightly higher contrast highlights) versus dental's flatter, more even "wellness" lighting.

Mobile fallback: static soft-gradient hero image matching the same color/light mood, no Canvas below `md`.

## Palette & type direction
Soft, luminous, a touch of luxury — blush, cream, soft gold accent, or alternatively a moodier jewel-tone (deep emerald/plum) depending on brand positioning (offer both directions as variants in the data layer, pick one as primary for the portfolio build). Display font: elegant, slightly editorial — could be a refined serif or a stylish sans with some flair in the letterforms. Body: clean, readable sans, plenty of letter-spacing on labels/eyebrows for an editorial feel.

## Tone of voice for copy
Warm, aspirational, but not over-the-top — confident self-care language without being saccharine. Service descriptions should be specific about technique/outcome, not just "luxurious experience" repeated.

## Conversion priorities
1. "Book now" CTA highly visible, ideally linking directly into a real scheduling flow rather than a generic contact form — this niche converts much better with instant self-service booking
2. Pricing should be visible, not hidden — common drop-off if a visitor has to call to find out cost
3. Gallery/portfolio needs to load fast despite being the most image-heavy section — this is the site where image optimization discipline matters most

## Performance notes specific to this site
Gallery is the heaviest section here, likely heavier than the restaurant's — plan for a "load more" or paginated gallery pattern rather than loading 30+ portfolio images at once, even with lazy-loading, to keep the total page weight reasonable for users who don't scroll the entire gallery.
