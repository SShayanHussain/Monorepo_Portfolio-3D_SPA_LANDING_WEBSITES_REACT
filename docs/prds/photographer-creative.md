# PRD — Photographer / creative portfolio

## Client profile (fictional)
"Wren Hale" — an independent photographer (positioned as a portrait/editorial/wedding generalist, adjust framing per actual specialty if reused for a real client). The site's only real job is to make the work itself the star and get a booking inquiry — the photographer's own portfolio site is the lowest-content, highest-image-quality-bar build in this set.

## Goal of this site
Convert visitors browsing the work into booking inquiries. Primary conversion: "Inquire" / "Book a session". Secondary: browse full portfolio/galleries by category.

## Sections (in order)
1. **Hero** — a single, large hero image or short looping video moment (this is the one PRD in the portfolio where the "hero 3D scene" framing may not even apply — see 3D concept below) — photographer name/wordmark, minimal tagline, CTA "View work" + "Inquire".
2. **Featured work grid** — curated selection (8-12 images) across categories, full-bleed or near-full-bleed grid, minimal chrome/UI around the images — the images need to dominate, not compete with site decoration.
3. **Category navigation** — if the photographer shoots multiple types of work (portrait, editorial, wedding, commercial), a simple category filter/tab system leading into focused sub-galleries.
4. **About** — short bio, photographer's own portrait, approach/philosophy in a few sentences — kept brief, this audience came for the work, not a long biography.
5. **Process / what to expect** — for booking-driven photography (weddings, portraits, commercial shoots), a brief outline of how a booking works (inquiry → consultation → shoot → delivery) reduces first-time-client uncertainty.
6. **Testimonials** — client quotes, ideally paired with a thumbnail of the relevant shoot.
7. **Inquiry form** — name, contact, shoot type/date if relevant, budget range (optional field, common in photography inquiries to pre-qualify), message.
8. **Footer** — social (Instagram is often the primary channel for photographers, weight it accordingly), contact, location/travel availability if relevant.

## 3D concept
This PRD deliberately questions whether a literal 3D Canvas scene is the right fit at all, similar to the judgment calls already permitted for law-firm and home-services — but for a different reason: in a photography portfolio, the photographs themselves are the premium asset, and any 3D decoration risks visually competing with image quality rather than complementing it. Recommended primary direction: skip a literal 3D hero scene entirely and instead invest the equivalent build effort into an exceptional image-driven interaction layer — a hero image sequence with a subtle parallax/depth-of-field-style effect achieved through layered 2D images (foreground/background separation via CSS transforms tied to scroll or cursor position, not WebGL), and a gallery with a refined lightbox/zoom interaction (smooth scale-up transition into a full-screen image view, Framer Motion `layoutId` shared-element transition rather than a hard cut).

If a 3D moment is still wanted for portfolio-range purposes (to demonstrate the skill exists even where restraint is the better choice, similar reasoning to law-firm), the acceptable application is a minimal one: a simple 3D picture-frame or film-strip object in the hero that frames or transitions between 2-3 hero images (geometry: a thin extruded rectangle/frame, photographs applied as textures, slow crossfade between 2-3 images on the frame's "face" with a very subtle ambient rotation) — this keeps the 3D object's role as literally a frame for the photography rather than competing imagery of its own. This is the one PRD where "the 3D model's job is to hold the real content, not be the content" should be the explicit design constraint if 3D is used at all.

Mobile fallback: identical to desktop in spirit — the layered-parallax hero and lightbox interactions are CSS/Framer Motion based, not WebGL-dependent, so there's no meaningful mobile fallback decision to make here the way other niches require; if the optional 3D frame object is built, it follows the same `'static'` mode as restaurant/dental (no Canvas below `md`, since it's decorative, not load-bearing for the page's actual content).

## Palette & type direction
Minimal, neutral, gets out of the way — near-black or near-white background (pick one based on the photographer's actual work tone; darker backgrounds suit moody/editorial work, lighter suits bright/airy portrait work), no competing brand accent color, let the photographs supply all the color in the page. Display font: a quiet, refined sans or a single elegant serif for the name/wordmark only — minimal typographic personality elsewhere, since type competing with photography for attention is a common portfolio-site mistake to avoid. Body: small, restrained, low-contrast-but-still-accessible.

## Tone of voice for copy
Minimal by design — this is the lowest-copy-volume PRD in the portfolio. Short, specific lines rather than marketing paragraphs. Bio section can be a touch more personal/conversational than the rest of the site, since it's the one place visitors want to hear an actual voice rather than just see work.

## Conversion priorities
1. "Inquire" CTA should be persistently accessible (sticky nav or persistent corner element) without ever overlaying or cropping into the photography itself
2. Image loading must never show a layout-shifting placeholder — reserve aspect-ratio space for every image (via explicit width/height or `aspect-ratio` CSS) so the masonry/grid never jumps as images load, since this is the niche most likely to be judged harshly on visual polish during the loading moment itself
3. Category navigation, if used, should never fully reload the page experience — filter in place (instant client-side filter, not a route change) to preserve scroll position and momentum

## Performance notes specific to this site
The single heaviest image-weight site in the entire portfolio by design — the work IS the content. This is the site where the blur-up placeholder technique (mentioned as optional for fashion-ecommerce) should be treated as required, not optional, paired with aggressive `srcset` tuning and lazy-loading everything outside the first two viewport-heights. Given there's likely no/minimal 3D bundle here, the saved 300KB lazy-chunk budget should be explicitly reallocated toward slightly higher-quality image compression settings for the featured-work grid — document this tradeoff in memory.md since it's a deliberate budget reallocation, not an oversight.
