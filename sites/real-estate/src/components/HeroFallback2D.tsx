/**
 * Static 2D (SVG) recreation of the hero's assembled house composition. Used as
 * the `mobileFallback="none"` visual below md AND, because it carries no
 * animation, as the prefers-reduced-motion fallback at any viewport
 * (Canvas3DWrapper picks it up via `fallback2D`). The geometric abstraction is
 * simple enough to redo in 2D rather than ship a raster image — per the PRD.
 */
export default function HeroFallback2D() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {/* Soft ambient wash matching the WebGL lighting mood. */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_70%_30%,#ffffff_0%,#f2f0ea_55%,#e7e3da_100%)]" />
      <svg
        viewBox="0 0 240 220"
        className="relative w-[min(70%,420px)] drop-shadow-[0_24px_40px_rgba(28,37,34,0.12)]"
        role="img"
        aria-label="Abstract geometric illustration of a house"
      >
        {/* base slab */}
        <polygon points="40,176 200,176 224,196 16,196" fill="#9aa3a8" />
        <rect x="40" y="170" width="160" height="8" fill="#aeb6ba" />
        {/* back / side walls */}
        <rect x="52" y="92" width="136" height="80" fill="#e7e3da" />
        <polygon points="188,92 188,172 204,164 204,84" fill="#d9d3c6" />
        {/* gable roof */}
        <polygon points="120,40 198,96 188,104 120,56 52,104 42,96" fill="#1f6f5c" />
        <polygon points="120,40 198,96 204,90 120,34" fill="#175546" />
        {/* floating accent window */}
        <rect x="98" y="112" width="44" height="44" rx="2" fill="#3f9079" />
        <rect x="98" y="112" width="44" height="44" rx="2" fill="none" stroke="#1f6f5c" strokeWidth="2" />
        <line x1="120" y1="112" x2="120" y2="156" stroke="#1f6f5c" strokeWidth="2" />
        <line x1="98" y1="134" x2="142" y2="134" stroke="#1f6f5c" strokeWidth="2" />
      </svg>
    </div>
  );
}
