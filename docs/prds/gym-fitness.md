# PRD — Gym & fitness studio

## Client profile (fictional)
"Forge Fitness" — a high-energy strength-and-conditioning gym, the kind that wants its website to feel like the first 10 seconds of walking into a loud, well-lit gym with music playing.

## Goal of this site
Drive trial memberships / free-class signups. Primary conversion: "Start your free trial" / "Book a free class". Secondary: "View class schedule" or "View membership plans".

## Sections (in order)
1. **Hero** — high-energy 3D scene (see below), bold headline, CTA "Start free trial" + secondary "View classes".
2. **Class types** — grid of class offerings (strength, HIIT, yoga, etc.), image/icon + name + short description, possibly with intensity indicator.
3. **Trainers** — photo grid, name, specialty, short bio.
4. **Membership plans** — pricing table, 2-3 tiers, clear feature comparison, "most popular" highlighted tier.
5. **Social proof** — transformation stats, member count, or testimonials with photos — this audience responds strongly to visible results and community proof.
6. **Schedule preview** — simplified weekly class schedule grid or a "book a class" CTA into an external booking system.
7. **Location/footer** — address, map, hours, social (especially Instagram — fitness brands lean heavily on social proof there).

## 3D concept
Hero scene: kinetic, physical energy — options ranging from simplest-to-most-complex: (a) a particle system suggesting motion/energy (instanced particles with additive blending, trailing on scroll or cursor movement — cheap on GPU since it's instanced geometry, not individual meshes), or (b) an abstracted dumbbell/kettlebell/barbell-plate form with dynamic lighting and a subtle physics-like drop/settle animation on load. Particle option (a) is the safer performance choice and arguably more universally "energy" without being tied to one specific equipment type (inclusive of all class types, not just weightlifting). Recommend (a) unless the client specifically wants strength-training iconography front and center.

Strong scroll-tied motion throughout this site specifically — more aggressive parallax and reveal timing (300-400ms vs the 400-600ms default) than other niches, since "high energy" is the brand promise. Still respects `prefers-reduced-motion`.

Mobile fallback: a simplified particle count (reduce instance count by ~70% below `md` breakpoint) rather than fully removing the Canvas — this is one niche where a fully-static mobile fallback undersells the brand, so the budget should be spent on making a *lighter* 3D version work on mobile rather than cutting it. If frame testing shows even the reduced version struggles, fall back to a looping short video/GIF-style CSS animation instead of static.

## Palette & type direction
High contrast, bold — black/dark charcoal base with one electric accent color (orange, lime, or red). Avoid pastel or muted palettes entirely here; this is the one niche where boldness is the brand. Display font: heavy weight, condensed or impact-style sans. Body: same family lighter weight, or a clean grotesque.

## Tone of voice for copy
Short, punchy, imperative mood ("Train harder. Recover smarter." style direction). Avoid generic fitness clichés ("no pain no gain", "beast mode") in favor of something with a bit more specificity to this gym's actual philosophy/community.

## Conversion priorities
1. "Start free trial" CTA above the fold, repeated at minimum 3 times down the page
2. Pricing must be transparent and easy to compare — don't hide it behind a "contact us for pricing" pattern, this audience expects to see numbers
3. Class schedule should be glanceable without leaving the page if possible

## Performance notes specific to this site
The particle system needs explicit frame-budget testing — this is the niche most likely to tempt over-investment in the 3D moment at the expense of the performance budget. Cap particle count, use `InstancedMesh` not individual `Mesh` objects, and verify the `frameloop="demand"` viewport-pause rule from CLAUDE.md is actually wired up here, since this hero is the one most likely to be a true continuous-render loop.
