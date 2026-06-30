# PRD — Home services / contractors

## Client profile (fictional)
"Sterling Home Co." — a general contracting / home renovation company. This niche is genuinely underserved online (most competitors run dated template sites or none at all), which is exactly why it's a strong portfolio inclusion — it's an easy "before/after" pitch to a real local business owner.

## Goal of this site
Generate quote requests for renovation/repair work. Primary conversion: "Get a free quote". Secondary: browse past projects.

## Sections (in order)
1. **Hero** — grounded, tactile 3D scene (see below), company name, trust-building headline (licensed/insured/years in business angle), CTA "Get a free quote" + secondary "View our work".
2. **Services** — grid of service categories (kitchen remodel, bathroom, additions, roofing, etc. — adjust to actual contractor specialty), icon/image + name + short description.
3. **Featured projects** — before/after project showcase, 3-6 projects, image comparison slider if feasible (a simple draggable before/after slider is a strong, relatively cheap interactive element for this niche specifically — high perceived value, low implementation cost relative to 3D).
4. **Why choose us** — licensing/insurance/warranty info, years in business, service area — this audience (homeowners hiring contractors) is heavily trust-and-credibility motivated given how much contractor fraud/quality variance exists in this industry.
5. **Process** — simple step-by-step (consultation → quote → work → walkthrough), reduces anxiety about an unfamiliar process for first-time renovators.
6. **Testimonials** — client reviews, ideally tied to specific completed projects shown above.
7. **Quote request form** — name, contact, project type, rough scope/description, ideally also accepts photo upload of the space (note as a stretch feature — basic version is just text fields).
8. **Footer** — service area, license number placeholder, phone, hours, social.

## 3D concept
Grounded and tactile rather than abstract — this is the niche where literal representation works better than abstraction, since "craftsmanship and material quality" is the actual thing being sold. Concept: a simple architectural/material composition — think exploded-axonometric-style layered planes suggesting a house cross-section or floor plan (similar spirit to the real estate "assembly" concept but more solid/grounded in feel rather than airy/aspirational — use heavier materials, less ambient light, more directional/work-light-style lighting), or alternatively a simple rotating composition of material swatches/textures (wood grain, tile, brushed metal) as flat planes arranged in 3D space, suggesting the range of materials/finishes the company works with.

This is also a reasonable candidate, like the law firm, for a more restrained 3D treatment if time/complexity budget is tight across the full 8-site build — the before/after slider interaction (pure 2D/CSS, see Featured projects above) carries a lot of the "impressive interactive portfolio piece" weight on its own and doesn't require the 3D library to be mounted at all.

Mobile fallback: static image of the same material/architectural composition, or skip 3D Canvas entirely on this niche if the time-budget judgment call above is made — flag the decision in memory.md either way, since it's directly comparable to the law firm's similar judgment call and useful to record the reasoning together.

## Palette & type direction
Warm, grounded, trustworthy — wood tones, charcoal, a single confident accent (burnt orange or deep blue). Should feel "skilled tradesperson" not "tech startup" — avoid anything too sleek/minimal that would undercut the tactile, hands-on brand positioning. Display font: sturdy, confident sans with good weight — avoid anything delicate or overly geometric. Body: same family or a simple, highly legible workhorse sans.

## Tone of voice for copy
Plain-spoken, direct, no-nonsense. This audience trusts contractors who communicate clearly and don't oversell — avoid superlative-heavy copy ("the best contractors in town") in favor of specific, verifiable claims (years in business, license info, actual project examples).

## Conversion priorities
1. Phone number tappable and prominent — this audience, more than most others in the portfolio, still prefers to call a contractor directly
2. "Get a free quote" CTA repeated throughout, paired with low-friction messaging ("no obligation", "response within 24 hours")
3. Licensing/insurance information must be easy to find, not buried — this is the single biggest trust signal in this industry given how common unlicensed/uninsured contractor scams are

## Performance notes specific to this site
Before/after project photography is the heaviest asset load here, same discipline as restaurant/salon (srcset, WebP, lazy below fold). If the before/after slider component is built, make sure both images in each pair are sized identically and preloaded together (not lazy-loaded independently) so the slider doesn't show a broken/half-loaded state on first interaction.
