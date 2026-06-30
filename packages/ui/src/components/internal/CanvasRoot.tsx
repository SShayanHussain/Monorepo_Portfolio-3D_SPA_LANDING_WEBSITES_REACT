import { Canvas } from "@react-three/fiber";
import type { ComponentProps, ReactNode } from "react";

/**
 * The only module in the library that statically imports `@react-three/fiber`.
 * It is loaded exclusively via `React.lazy()` from Canvas3DWrapper, so the
 * Three.js runtime stays in a lazy chunk and never enters the entry's
 * modulepreload graph — first paint is never blocked by the 3D bundle
 * (CLAUDE.md performance rule). Sites that import the UI barrel but never mount
 * a Canvas (e.g. home-services, photographer) ship zero Three.js as a result.
 */
export interface CanvasRootProps {
  children: ReactNode;
  frameloop: "always" | "demand" | "never";
  dpr: [number, number];
  antialias: boolean;
  camera?: ComponentProps<typeof Canvas>["camera"];
}

export default function CanvasRoot({
  children,
  frameloop,
  dpr,
  antialias,
  camera,
}: CanvasRootProps) {
  return (
    <Canvas
      className="inset-0 h-full w-full"
      style={{ position: "absolute" }}
      // aria-hidden: the canvas is decorative; real content lives in `overlay`.
      aria-hidden="true"
      frameloop={frameloop}
      dpr={dpr}
      gl={{ antialias, powerPreference: "high-performance" }}
      camera={camera}
    >
      {children}
    </Canvas>
  );
}
