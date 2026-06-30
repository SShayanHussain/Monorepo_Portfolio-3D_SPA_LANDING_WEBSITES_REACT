/**
 * Image URL helpers. Listing/agent photos come from Unsplash, which accepts a
 * `w=` query param for server-side resizing — so we can satisfy the PRD's
 * "srcset at 3 sizes minimum" rule without a build-time pipeline.
 *
 * `base` is an Unsplash URL WITHOUT a `w=` param, e.g.
 *   https://images.unsplash.com/photo-123?q=80&auto=format&fit=crop
 */

const DEFAULT_WIDTHS = [480, 768, 1200] as const;

/** A single sized URL (used for the `src` fallback). */
export function sized(base: string, w: number): string {
  return `${base}&w=${w}`;
}

/** A `srcset` string across the responsive widths. */
export function srcSet(
  base: string,
  widths: readonly number[] = DEFAULT_WIDTHS,
): string {
  return widths.map((w) => `${sized(base, w)} ${w}w`).join(", ");
}
