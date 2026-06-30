/**
 * Shared Tailwind preset — encodes the tokens from docs/design-system.md that
 * are common to all 8 sites. Each site's own tailwind.config.cjs does
 * `presets: [require('../../tailwind.preset.cjs')]` and overrides ONLY its
 * niche-specific palette accent + font family (per the design-system rule that
 * niche PRDs override only what's different).
 *
 * @type {Partial<import('tailwindcss').Config>}
 */
module.exports = {
  theme: {
    extend: {
      // Type scale (docs/design-system.md). Sites map their font families onto
      // `display` / `body` via the `fontFamily` override in their own config.
      fontSize: {
        display: [
          'clamp(2.5rem, 5vw + 1rem, 4.5rem)',
          { lineHeight: '1.05', letterSpacing: '-0.02em' },
        ],
        h2: [
          'clamp(1.75rem, 3vw + 1rem, 2.75rem)',
          { lineHeight: '1.15', letterSpacing: '-0.01em' },
        ],
        h3: ['1.5rem', { lineHeight: '1.25' }],
        body: ['1rem', { lineHeight: '1.6' }],
        small: ['0.875rem', { lineHeight: '1.5' }],
      },
      // Entrance/scroll-reveal easing — Framer Motion's easeOutExpo-like curve.
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        hover: '180ms', // 150–200ms hover-state window from the design system
      },
    },
  },
  // The brand accent is a CSS custom property so the shared `packages/ui`
  // components (Button, Nav, Cursor) can reference one token while each site
  // sets `--brand-accent` to its own niche color.
  plugins: [
    /** @param {{ addBase: Function }} api */
    function brandAccentBase({ addBase }) {
      addBase({
        ':root': {
          '--brand-accent': '#111111',
          '--brand-accent-contrast': '#ffffff',
        },
      });
    },
  ],
};
