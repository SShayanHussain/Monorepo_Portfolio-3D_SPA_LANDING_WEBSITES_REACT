# PRD — Fashion & e-commerce

## Client profile (fictional)
"Solene" — an independent fashion label, contemporary ready-to-wear, mid-to-premium price point. The kind of brand that sells through editorial atmosphere as much as product photography — visitors should feel like they've opened a lookbook, not a catalog page.

## Goal of this site
This is a landing/showcase page for the brand and its current collection, not a full e-commerce checkout flow (that's out of scope for the portfolio piece — flag to a real client that a production build would integrate Shopify/Stripe). Primary conversion: "Shop the collection" → links out to an external store, or "Join the waitlist" if positioned as a drop-based brand. Secondary: browse the lookbook.

## Sections (in order)
1. **Hero** — full-bleed 3D scene (see below), brand name/wordmark, single evocative line (not a sales pitch — a mood statement), CTA "Shop now" + secondary "View lookbook".
2. **Featured collection** — 4–8 product cards, image + name + price, hover reveals a second angle/detail shot (image crossfade, not a separate load).
3. **Lookbook / editorial gallery** — full-width or alternating image layout, large-format photography, minimal text, scroll-paced reveals — this section should feel like flipping through a print lookbook.
4. **Brand story** — short paragraph on the label's philosophy/materials/process, paired with a process or material-detail image.
5. **Product detail spotlight** — one hero product treated in depth (multiple angles, fabric/material callouts, size availability) as a mini-showcase within the page.
6. **Sustainability/materials** (optional, include if relevant to brand positioning) — sourcing/material transparency, a differentiator for many independent fashion labels.
7. **Newsletter / waitlist signup** — email capture, positioned as access to drops/early releases rather than generic "sign up for updates".
8. **Footer** — shipping/returns info links, social (Instagram/Pinterest especially — fashion is the most visually social-driven niche in this portfolio), size guide link.

## 3D concept
Hero scene: fabric-forward, not product-literal. The strongest concept here is a draped/flowing fabric simulation — a deformed plane geometry with a vertex-displacement shader creating slow, silk-like undulation, lit with strong directional light and soft shadow to emphasize material quality (sheen, drape, weight) rather than rendering an actual garment in detail. This is similar in technique to the salon-spa's flowing-ribbon concept but should read more structured/architectural and less soft/glowing — sharper highlights, more defined fold lines, a fashion-editorial lighting quality (think a single hard key light with deep shadow) rather than salon's diffuse warm glow. Alternative/simpler approach if the shader route is too costly: a slowly rotating garment silhouette built from flat, layered plane geometries (like paper-doll layers with slight z-offset and independent subtle sway per layer) — cheaper to render, still reads as "fashion" through silhouette and motion alone.

On scroll, the fabric scene can transition (crossfade, not geometry morph — same pragmatic approach noted in the SaaS PRD) into the actual hero product photograph, so the 3D moment serves as an atmospheric overture rather than competing with real product photography for attention once the visitor starts browsing.

Mobile fallback: a static high-quality fabric/texture macro photograph matching the same lighting mood, no Canvas below `md`. Fashion mobile traffic is typically the highest-volume, lowest-tolerance-for-load-delay segment in this portfolio — prioritize speed over preserving the 3D moment on mobile, unlike gym/saas's "keep a reduced version" stance.

## Palette & type direction
Editorial and restrained — the palette should be dictated by the actual product photography rather than a bold brand color; backgrounds lean ivory, stone, or near-black depending on collection mood, with no competing accent color (let the clothing be the color). Display font: an editorial serif or a high-fashion sans with generous tracking on labels/eyebrows — this is a niche where typography itself signals quality, avoid anything that reads as a generic e-commerce template font. Body: a quiet, small-size sans, low visual weight so it doesn't compete with imagery.

## Tone of voice for copy
Spare, declarative, confident — fashion copy works through omission as much as description. Short phrases over full sentences in some contexts (a single line under a hero image rather than a paragraph). Avoid sales-y urgency language ("limited time", "don't miss out") in favor of quiet exclusivity cues if the brand positioning calls for it (e.g. "available in limited quantities" stated once, plainly, not repeated or hyped).

## Conversion priorities
1. "Shop now" / external store link should be unmistakable but not aggressive — one clear primary action per product card, not competing CTAs
2. Product imagery must load fast and sharp — this is the niche where image quality perception directly affects purchase intent, so the WebP compression budget needs to be tuned slightly higher quality (~82-85) for hero/product shots specifically than the general guidance elsewhere, accepting a small file-size tradeoff for this one asset category
3. Newsletter/waitlist capture should appear once, prominently, not as an intrusive popup — embedded in page flow, not a modal interrupt

## Performance notes specific to this site
Largest image-weight niche in the portfolio alongside salon — lookbook photography at full editorial quality is heavy by nature. Lean hard on `srcset` with at least 3 breakpoints, `loading="lazy"` for everything below the first viewport, and consider a blur-up placeholder (low-res inline base64 swapped for the full image on load) for the lookbook gallery specifically, since a flash of empty space reads worse in an editorial-paced layout than in a denser grid layout.
