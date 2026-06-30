/**
 * Lighthouse CI budget — encodes the non-negotiable performance budget from
 * CLAUDE.md. Run via `pnpm lighthouse <site>` (see scripts/lighthouse.mjs),
 * which points `staticDistDir` at the built site and fails CI if any assertion
 * below is violated.
 *
 * Throttled to a mid-tier mobile device on 4G, matching the budget's test
 * conditions.
 */
module.exports = {
  ci: {
    collect: {
      // staticDistDir is injected per-site by scripts/lighthouse.mjs
      numberOfRuns: 3,
      settings: {
        preset: "perf",
        formFactor: "mobile",
        screenEmulation: {
          mobile: true,
          width: 360,
          height: 800,
          deviceScaleFactor: 2,
          disabled: false,
        },
        throttling: {
          // ~mid-tier device on throttled 4G
          rttMs: 150,
          throughputKbps: 1638.4,
          cpuSlowdownMultiplier: 4,
        },
      },
    },
    assert: {
      assertions: {
        // Lighthouse Performance >= 90
        "categories:performance": ["error", { minScore: 0.9 }],
        // First Contentful Paint < 1.8s
        "first-contentful-paint": ["error", { maxNumericValue: 1800 }],
        // Largest Contentful Paint < 2.5s
        "largest-contentful-paint": ["error", { maxNumericValue: 2500 }],
        // Cumulative Layout Shift < 0.1
        "cumulative-layout-shift": ["error", { maxNumericValue: 0.1 }],
        // Total initial transfer < 200KB gzipped (resource-summary is in bytes)
        "resource-summary:total:size": ["error", { maxNumericValue: 204800 }],
        // 3D lazy chunk budget (<300KB) is asserted separately in the build
        // step via rollup chunk-size limits, since Lighthouse can't attribute a
        // lazy chunk to the 3D scene specifically.
      },
    },
  },
};
