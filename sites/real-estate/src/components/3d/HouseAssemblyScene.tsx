/**
 * HouseAssemblyScene — the Meridian hero. An abstracted geometric "home" whose
 * pieces fly/fade into position once on load (~1.1s), then settle into a subtle
 * ambient rotation with a parallax tilt that follows the pointer on desktop.
 *
 * Performance contract:
 * - Lazy-loaded via React.lazy(); the Three.js chunk never blocks first paint.
 * - Procedural primitives only (boxes/planes) — no .glb, scene code stays tiny.
 * - Canvas3DWrapper pauses the frameloop off-screen and hard-gates this scene
 *   away for prefers-reduced-motion users.
 * - mobileFallback="none": below md this scene never mounts; a 2D SVG
 *   recreation (HeroFallback2D) is shown instead.
 */

import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group, Mesh, MeshStandardMaterial, MathUtils } from "three";
import type { Scene3DProps } from "@portfolio/ui";

type Vec3 = [number, number, number];

interface Piece {
  size: Vec3;
  /** Final resting position. */
  pos: Vec3;
  /** Offset added to `pos` as the assembly start point (pieces fly from here). */
  from: Vec3;
  rot?: Vec3;
  // Hex strings (not THREE.ColorRepresentation) to avoid duplicate-@types/three
  // identity clashes across the workspace; R3F accepts CSS color strings.
  color: string;
  /** Stagger delay (seconds) before this piece begins assembling. */
  delay: number;
  /** Slight emissive lift for the accent window. */
  emissive?: string;
}

const STONE = "#e7e3da";
const STONE_WARM = "#d9d3c6";
const SLATE = "#9aa3a8";
const GREEN = "#1f6f5c";
const GREEN_LIGHT = "#3f9079";

// The abstract home: base slab, three walls, a gable roof, and a floating
// accent "window" plane.
const PIECES: Piece[] = [
  { size: [2.6, 0.16, 2.2], pos: [0, -0.9, 0], from: [0, -1.6, 0], color: SLATE, delay: 0.0 },
  { size: [0.12, 1.5, 2.1], pos: [-1.15, -0.1, 0], from: [-1.4, 0, 0], color: STONE, delay: 0.12 },
  { size: [0.12, 1.5, 2.1], pos: [1.15, -0.1, 0], from: [1.4, 0, 0], color: STONE_WARM, delay: 0.18 },
  { size: [2.3, 1.5, 0.12], pos: [0, -0.1, -1.0], from: [0, 0, -1.2], color: STONE, delay: 0.24 },
  { size: [1.6, 0.14, 2.25], pos: [-0.62, 0.78, 0], from: [-1.0, 1.4, 0], rot: [0, 0, 0.62], color: GREEN, delay: 0.34 },
  { size: [1.6, 0.14, 2.25], pos: [0.62, 0.78, 0], from: [1.0, 1.4, 0], rot: [0, 0, -0.62], color: GREEN, delay: 0.4 },
  { size: [0.78, 0.78, 0.06], pos: [0, -0.05, 0.5], from: [0, -0.05, 1.4], color: GREEN_LIGHT, delay: 0.5, emissive: GREEN_LIGHT },
];

const PIECE_DURATION = 0.75;

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export default function HouseAssemblyScene({ quality }: Scene3DProps) {
  const groupRef = useRef<Group>(null);
  const meshRefs = useRef<(Mesh | null)[]>([]);
  const startTime = useRef<number | null>(null);
  const mouse = useRef({ x: 0, y: 0 });

  // Pointer parallax (desktop only — this scene doesn't mount below md). The
  // frameloop eases the group toward this target so moves feel weighted.
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  // Slightly cheaper material set on the reduced tier (flat shading).
  const flatShading = quality === "reduced";

  useFrame(({ clock }) => {
    if (startTime.current === null) startTime.current = clock.getElapsedTime();
    const elapsed = clock.getElapsedTime() - startTime.current;

    let allAssembled = true;
    for (let i = 0; i < PIECES.length; i++) {
      const mesh = meshRefs.current[i];
      const piece = PIECES[i];
      if (!mesh) continue;
      const local = MathUtils.clamp((elapsed - piece.delay) / PIECE_DURATION, 0, 1);
      if (local < 1) allAssembled = false;
      const e = easeOutCubic(local);
      mesh.position.set(
        MathUtils.lerp(piece.pos[0] + piece.from[0], piece.pos[0], e),
        MathUtils.lerp(piece.pos[1] + piece.from[1], piece.pos[1], e),
        MathUtils.lerp(piece.pos[2] + piece.from[2], piece.pos[2], e),
      );
      const mat = mesh.material as MeshStandardMaterial;
      mat.opacity = e;
    }

    const group = groupRef.current;
    if (group) {
      // Once assembled, ease in the ambient drift + pointer parallax.
      const settle = MathUtils.clamp((elapsed - 0.4) / 1.2, 0, 1);
      const ambient = Math.sin(clock.elapsedTime * 0.18) * 0.06;
      const targetY = -0.5 + (ambient + mouse.current.x * 0.22) * settle;
      const targetX = 0.08 + mouse.current.y * 0.12 * settle;
      // Smooth toward the target so pointer moves feel weighted, not jittery.
      group.rotation.y = MathUtils.lerp(group.rotation.y, targetY, 0.06);
      group.rotation.x = MathUtils.lerp(group.rotation.x, targetX, 0.06);
    }
    void allAssembled;
  });

  return (
    <group ref={groupRef} rotation={[0.08, -0.5, 0]} position={[0, 0.1, 0]}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 6, 5]} intensity={1.1} color="#fff7ec" />
      <directionalLight position={[-5, 2, -3]} intensity={0.35} color="#cfe6dd" />

      {PIECES.map((piece, i) => (
        <mesh
          key={i}
          ref={(el) => (meshRefs.current[i] = el)}
          // Start fully transparent at the assembly origin; useFrame drives both.
          position={[piece.pos[0] + piece.from[0], piece.pos[1] + piece.from[1], piece.pos[2] + piece.from[2]]}
          rotation={piece.rot ?? [0, 0, 0]}
        >
          <boxGeometry args={piece.size} />
          <meshStandardMaterial
            color={piece.color}
            emissive={piece.emissive ?? "#000000"}
            emissiveIntensity={piece.emissive ? 0.35 : 0}
            roughness={0.7}
            metalness={0.05}
            transparent
            opacity={0}
            flatShading={flatShading}
          />
        </mesh>
      ))}
    </group>
  );
}
