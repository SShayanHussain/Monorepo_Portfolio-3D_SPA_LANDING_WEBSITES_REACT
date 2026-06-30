# PRD — Logistics & delivery

## Client profile (fictional)
"Vantage Freight" — a B2B logistics/freight and last-mile delivery company. The buyer here is typically a business operations or supply-chain decision-maker evaluating reliability and coverage, not a consumer — this is the most explicitly B2B-functional niche in the portfolio, closer in buyer psychology to the SaaS PRD than to any of the consumer-facing niches.

## Goal of this site
Generate qualified B2B leads (quote requests, partnership inquiries) by demonstrating operational scale and reliability. Primary conversion: "Get a quote" / "Request a consultation". Secondary: "Track a shipment" if the company offers customer-facing tracking, or "View services".

## Sections (in order)
1. **Hero** — 3D scene (see below), company name, capability-led headline (speed/coverage/reliability framing), CTA "Get a quote" + secondary "View coverage area" or "Track shipment".
2. **Services overview** — grid of service types (freight, warehousing, last-mile, white-glove/specialty delivery — adjust to actual company offering), icon + name + short description.
3. **Coverage / network** — a map-based section showing service area or network reach (could be a stylized map graphic rather than a literal interactive map for the portfolio version) — coverage is a primary decision factor for B2B logistics buyers and deserves a dedicated, visually clear section.
4. **Why us / operational stats** — on-time delivery rate, fleet size, years in operation, volume handled — stat row with `StatCountUp` (shared primitive, same pattern as real-estate/law-firm/edtech), since this audience is persuaded by concrete operational numbers more than narrative copy.
5. **Technology / tracking** — if the company offers shipment tracking or API/integration capability, a section explaining this (screenshot-style mockup of a tracking interface, similar spirit to the SaaS PRD's optional screenshot-morph idea, but treated here as a standard feature section rather than the hero's centerpiece).
6. **Industries served** — if the company serves multiple verticals (retail, manufacturing, e-commerce fulfillment), a short logo-or-icon grid of industries, building relevance for different buyer types landing on the page.
7. **Testimonials / case study snippet** — B2B testimonials skew toward named companies and quantified outcomes ("reduced delivery time by X%") rather than personal sentiment — follow that convention here, distinct from the more emotional testimonial framing in consumer niches like restaurant or salon.
8. **Quote request form** — company name, contact, shipment volume/type, origin/destination if relevant, message — a longer, more detailed form is appropriate here since B2B logistics inquiries are inherently more information-dense than consumer bookings.
9. **Footer** — offices/locations, phone, standard B2B footer links (careers, partners, terms).

## 3D concept
Hero scene: motion and network, rendered with mechanical precision rather than the organic/soft qualities used in consumer niches. Recommended concept: an abstracted route/network visualization — connected nodes (representing hubs/cities) linked by animated flowing lines (the line material can use a simple animated dash-offset or shader-based flow effect to suggest active movement along routes, not just static connections), built with the same `InstancedMesh` node technique established in SaaS and reused conceptually in edtech, but here the connections should feel geographic/directional (lines flowing left-to-right or radiating from a central hub) rather than SaaS's loose interconnected cluster or edtech's upward structure — the visual vocabulary here is "network in motion," distinct from both prior uses of the same underlying technique.

Alternative/simpler concept: a single stylized vehicle-adjacent abstraction (not a literal photorealistic truck/van — a simplified geometric form suggesting forward motion, like an elongated rounded form with motion-blur-style trailing particles) moving along a simple path loop. This is more literal than the network-node concept and risks reading as generic "delivery company stock animation" — the network/route concept above is the stronger differentiator for portfolio purposes and better demonstrates range against the SaaS/edtech instanced-node sites it sits alongside.

Mobile fallback: 'reduced' mode (fewer nodes/connection lines, same directional flow motion preserved) rather than fully static — this audience is frequently evaluating vendors on mobile during work-day browsing, and the "active network in motion" visual is doing real persuasive work (demonstrating operational scale) that a static image undersells, similar reasoning to gym/saas/edtech's reduced-mode choices.

## Palette & type direction
Confident, industrial, B2B-functional — deep blue or steel-gray base with a single high-visibility accent (safety-orange or a bright cyan/teal works well here, echoing real-world logistics branding conventions without being a literal trade-dress copy) used for CTAs and the route-flow animation lines specifically. Display font: a strong, slightly condensed sans — should read as efficient and operational rather than playful or editorial. Body: clean grotesque sans, optimized for the denser informational content this niche carries (stats, service descriptions, form labels).

## Tone of voice for copy
Direct, capability-stated-plainly, numbers-forward. This audience wants to quickly assess "can this company handle my volume/route/timeline" — lead with concrete capability statements over brand narrative. Avoid logistics-industry cliché phrases ("seamless supply chain solutions", "your trusted logistics partner") in favor of specific, verifiable claims (actual coverage area, actual fleet size, actual on-time percentage).

## Conversion priorities
1. "Get a quote" CTA should be paired with an indication of response time ("quote within 24 hours") since B2B logistics buyers are often evaluating multiple vendors in parallel and responsiveness is a real differentiator
2. Coverage/network section needs to answer "do you serve my area" within one glance — this is a common early disqualifier for B2B logistics buyers and shouldn't require digging
3. If shipment tracking is offered, it should be a clearly separate, easily findable action from the quote-request flow — these are two different user intents (prospective customer vs. existing customer) landing on the same site and shouldn't be conflated into one form

## Performance notes specific to this site
Moderate image weight (mostly icons, a stylized map graphic, possibly fleet/warehouse photography if used) — should clear budget comfortably with standard discipline. The animated route-flow lines (whether shader-based dash-offset or a simpler approach) are the one component worth explicit frame-rate testing, since continuous line-animation across many connections has different performance characteristics than the pulsing/rotating instanced nodes already profiled in SaaS — don't assume the SaaS profiling data transfers directly to this site's flowing-line technique, test it specifically.
