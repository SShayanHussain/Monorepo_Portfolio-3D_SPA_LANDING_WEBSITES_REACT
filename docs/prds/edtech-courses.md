# PRD — EdTech / online courses

## Client profile (fictional)
"Brightpath" — an online course platform/cohort-based learning brand, one flagship course or a small suite of courses in a professional skills space (could be design, coding, business — keep generic enough that the structure transfers). The brand needs to convert skepticism (a crowded, often low-trust online-course market) into enrollment confidence.

## Goal of this site
Drive course enrollments or, for a cohort model, applications/waitlist signups. Primary conversion: "Enroll now" / "Apply for the next cohort". Secondary: "See the curriculum" or "Watch a free lesson".

## Sections (in order)
1. **Hero** — 3D scene (see below), course/brand name, outcome-led headline (what the student becomes, not what they learn — e.g. positioning around the result), CTA "Enroll now" + secondary "View curriculum".
2. **Outcome/social proof bar** — placement stats, completion rate, or notable alumni outcomes as a stat row, animated count-up on scroll-into-view (shared `StatCountUp` primitive, same as real-estate and law-firm).
3. **Curriculum overview** — modules/weeks laid out as an accordion or stepped timeline, each module name + short description + estimated time commitment — students evaluating a course need to see the actual structure before committing.
4. **Instructor/teaching team** — photo, name, credentials, short bio — same trust-building logic as the dental "meet the team" section, since "who is actually teaching this" is a major credibility factor in a market full of anonymous course creators.
5. **Format & logistics** — cohort dates, time commitment per week, live vs. self-paced, prerequisites — practical scheduling info that reduces a major source of pre-enrollment hesitation.
6. **Testimonials / student outcomes** — quotes ideally paired with a concrete before/after framing (career change, skill milestone, project shipped), carousel or grid.
7. **Pricing & enrollment** — clear price, payment plan options if applicable, what's included, primary enrollment CTA, FAQ-adjacent reassurance (refund policy, cohort start date).
8. **FAQ** — accordion (shared primitive with SaaS), addressing the standard objections: time commitment, prior experience needed, refunds, job guarantee claims if any.
9. **Footer** — standard links, social, contact for admissions questions.

## 3D concept
Hero scene: a knowledge/growth metaphor rendered abstractly — recommended concept is a layered, ascending geometric structure (think simplified stacked/spiraling platforms or nodes that build upward, suggesting progression and structure rather than randomness) using the same `InstancedMesh` node technique established in the SaaS PRD, but with a deliberate upward, ordered arrangement rather than SaaS's loose network-cluster feel — the visual distinction should communicate "structured path" versus SaaS's "interconnected data." Lit warmly rather than SaaS's cooler tech palette, to keep this niche feeling human/aspirational rather than purely technical, even if the course content itself is technical.

Alternative simpler concept if time-constrained: an open-book or page-turn abstraction rendered as a small set of curved plane geometries with subtle independent motion — cheaper to build, still legible as an education metaphor, though less differentiated from generic "online course site" visual tropes than the ascending-structure concept above.

Mobile fallback: a reduced-node version of the same ascending structure (fewer instances, same upward arrangement) rather than fully static — this niche benefits from the "aspirational, in-motion" feeling carrying through to mobile, similar reasoning to gym/saas, since course-shopping behavior happens heavily on mobile and a flat fallback undersells the brand at the exact moment a prospective student is evaluating quality signals. If frame testing struggles on mid-tier mobile, fall back to a static frame of the assembled structure rather than removing motion entirely.

## Palette & type direction
Warm-confident, not corporate-cold — a primary brand color in the amber/coral/warm-blue family (avoid SaaS's typical electric-blue-on-charcoal default, this niche should feel more approachable and less "enterprise tool") paired with generous off-white space. Display font: a clean, friendly sans with good weight range — should read as credible but not intimidating (avoid anything too severe/corporate). Body: same family, optimized for readability since this niche has more actual reading content (curriculum descriptions, FAQ) than most others in the portfolio.

## Tone of voice for copy
Direct and outcome-focused, addresses skepticism head-on rather than over-promising. Avoid generic course-marketing hyperbole ("transform your life", "unlock your potential") in favor of specific, concrete claims about what's actually taught and what a graduate can do afterward. Acknowledge the time/effort commitment honestly rather than minimizing it — overpromising ease is a major trust-eroder in this market specifically.

## Conversion priorities
1. Curriculum must be genuinely visible, not gated behind a form — making a prospective student "ask for the syllabus" is friction this market increasingly rejects; show the real structure upfront
2. Pricing should be transparent with the same logic as the SaaS PRD — avoid "contact us" pricing unless the model is genuinely high-touch/cohort-application-based, in which case be explicit about why (selective cohort, not price-hiding)
3. Instructor credibility section needs to be reachable within 2-3 scrolls — this audience checks "who's teaching this" early in their evaluation, don't bury it near the footer

## Performance notes specific to this site
Moderate image weight (instructor photos, some UI/curriculum screenshots if the course includes a software component) — comfortably within budget with standard srcset/lazy discipline. The `InstancedMesh` ascending-structure hero shares the exact performance profile and budget constraints already solved in the SaaS build — reuse that pattern from `memory.md` directly rather than re-deriving instancing performance characteristics from scratch.
