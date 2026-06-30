# PRD — Dental clinic / medical practice

## Client profile (fictional)
"Clearwater Dental" — a modern, patient-first dental practice. The kind of clinic that's invested in making a historically anxiety-inducing visit feel calm and contemporary.

## Goal of this site
Convert visitors into booked appointments while reducing pre-visit anxiety through tone and visual calm. Primary conversion: "Book an appointment". Secondary: "View services".

## Sections (in order)
1. **Hero** — 3D scene (see below), practice name, reassuring headline, CTA "Book appointment" + "Call us" (tappable phone number).
2. **Services grid** — 6–9 service cards (cleanings, whitening, implants, etc.), icon or small illustration + name + one-line description, each can link to a detail anchor or just inform.
3. **Why patients choose us** — 3-4 differentiators (gentle care philosophy, modern tech, insurance accepted, same-day appointments) as an icon row or alternating image/text blocks.
4. **Meet the team** — dentist/staff photos + names + credentials, builds trust and reduces "stranger anxiety" before a visit.
5. **Before/after or smile gallery** — if appropriate for the practice type, a tasteful results showcase (use stock/placeholder imagery for the portfolio version, flag that real clinics need actual patient consent for this section).
6. **Insurance & new patient info** — accepted insurance logos, new patient forms link, financing options.
7. **Appointment booking** — form or embedded scheduling widget (Calendly-style embed structure).
8. **Footer** — address, map, hours, emergency contact line if applicable.

## 3D concept
This is the niche where 3D needs to be used carefully — anything resembling actual dental instruments or procedures risks reinforcing anxiety rather than calming it. Instead: an abstract, organic, soft-shaded form suggesting wellness/care — think a smooth abstract blob/sphere cluster with soft subsurface-scattering-style shading (achievable with a simple custom shader or just well-lit `MeshPhysicalMaterial` with transmission), slowly and gently morphing or breathing (subtle scale pulse, very slow, 4-6s cycle) in calming colors. This should feel more like a wellness app than a medical device. Avoid literal tooth/mouth iconography in the 3D scene specifically — that imagery is fine in flat 2D icons for the services grid, but the hero 3D moment should be pure calm abstraction.

Mobile fallback: a soft gradient/blur composition in pure CSS that evokes the same "calm, soft, breathing" quality without any 3D library loaded.

## Palette & type direction
Cool, clean, clinical-but-warm — soft blues, mint, or sage green with white space dominant. Avoid stark clinical white-and-chrome (reads cold) and avoid anything saturated/energetic (reads anxious). Display font: rounded, friendly sans, moderate weight (avoid anything too thin/delicate — that can read as fragile rather than calm). Body: same family or a warm humanist sans.

## Tone of voice for copy
Warm, plain-language, never clinical jargon without explanation. Short reassuring sentences. Address anxiety directly rather than ignoring it ("we know dental visits aren't everyone's favorite — here's how we make it easier" is more effective than pretending the anxiety doesn't exist).

## Conversion priorities
1. Phone number tappable and visible above the fold on mobile — many dental leads still prefer calling
2. "Book appointment" CTA repeated at minimum in hero, after services, and in footer
3. Insurance acceptance must be easy to verify quickly — this is a common drop-off point if buried

## Performance notes specific to this site
This site likely has the least imagery-heavy footprint of the eight (services use icons, not photos, mostly) — budget should comfortably clear the Lighthouse 90 target. The custom shader/material on the 3D hero is the one component worth profiling specifically: `MeshPhysicalMaterial` with transmission is more expensive than a standard material, test actual frame rate on a mid-tier mobile GPU emulation before shipping.
