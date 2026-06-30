/**
 * NodeNetworkScene — the SaaS hero's 3D "data made visible" node-network.
 *
 * Built with InstancedMesh for nodes (one draw call, not N meshes) and a single
 * BufferGeometry for all connection lines. This is the same instancing
 * technique the gym/fitness site will reuse with a different visual personality.
 *
 * Performance contract:
 * - Lazy-loaded via React.lazy() so the Three.js chunk never blocks first paint.
 * - The Canvas3DWrapper pauses frameloop when off-screen.
 * - DPR is capped to [1, 1.5] on mobile 'reduced' tier, [1, 2] on desktop.
 * - No external .glb files — geometry is procedural and tiny.
 * - prefers-reduced-motion users never see this component (wrapper hard-gates it).
 */

import { useRef, useMemo, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import {
  InstancedMesh,
  Object3D,
  Color,
  Vector3,
  BufferGeometry,
  Float32BufferAttribute,
  IcosahedronGeometry,
  MeshStandardMaterial,
  LineBasicMaterial,
  LineSegments,
} from "three";
import type { Scene3DProps } from "@portfolio/ui";

// ── Configuration ────────────────────────────────────────────────────────────

interface NodeConfig {
  count: number;
  connectionDistance: number;
  spread: number;
}

const QUALITY: Record<string, NodeConfig> = {
  full: { count: 60, connectionDistance: 2.8, spread: 6 },
  reduced: { count: 28, connectionDistance: 2.5, spread: 5 },
};

const ACCENT = new Color("#7c3aed");
const DIM = new Color("#3b0f7a");
const LINE_COLOR = new Color("#7c3aed");

// ── Helpers ──────────────────────────────────────────────────────────────────

/** Deterministic seeded random so the layout is stable across re-renders. */
function seededRandom(seed: number): () => number {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function generateNodes(count: number, spread: number, seed = 42) {
  const rng = seededRandom(seed);
  const positions: Vector3[] = [];
  for (let i = 0; i < count; i++) {
    positions.push(
      new Vector3(
        (rng() - 0.5) * spread * 2,
        (rng() - 0.5) * spread * 2,
        (rng() - 0.5) * spread * 1.2,
      ),
    );
  }
  return positions;
}

// ── Components ───────────────────────────────────────────────────────────────

function Nodes({
  positions,
  mouse,
}: {
  positions: Vector3[];
  mouse: React.MutableRefObject<{ x: number; y: number }>;
}) {
  const meshRef = useRef<InstancedMesh>(null);
  const dummy = useMemo(() => new Object3D(), []);

  // Per-node base scale variation for visual interest.
  const scales = useMemo(
    () => positions.map((_, i) => 0.06 + (i % 5) * 0.015),
    [positions],
  );

  // Colour each instance — alternate between accent and dim.
  const colors = useMemo(() => {
    const arr = new Float32Array(positions.length * 3);
    positions.forEach((_, i) => {
      const c = i % 3 === 0 ? ACCENT : DIM;
      arr[i * 3] = c.r;
      arr[i * 3 + 1] = c.g;
      arr[i * 3 + 2] = c.b;
    });
    return arr;
  }, [positions]);

  useFrame(({ clock }) => {
    const mesh = meshRef.current;
    if (!mesh) return;

    const t = clock.getElapsedTime() * 0.25;
    const mx = mouse.current.x * 0.6;
    const my = mouse.current.y * 0.6;

    for (let i = 0; i < positions.length; i++) {
      const p = positions[i];
      // Gentle individual oscillation + global parallax tilt from pointer.
      const phaseX = Math.sin(t + i * 0.4) * 0.15;
      const phaseY = Math.cos(t + i * 0.3) * 0.15;

      dummy.position.set(p.x + phaseX + mx, p.y + phaseY + my, p.z);

      // Subtle pulse.
      const pulse = 1 + Math.sin(t * 2 + i) * 0.15;
      const s = scales[i] * pulse;
      dummy.scale.set(s, s, s);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    }
    mesh.instanceMatrix.needsUpdate = true;
  });

  const geo = useMemo(() => new IcosahedronGeometry(1, 2), []);
  const mat = useMemo(
    () =>
      new MeshStandardMaterial({
        roughness: 0.35,
        metalness: 0.6,
        emissive: ACCENT,
        emissiveIntensity: 0.3,
      }),
    [],
  );

  return (
    <instancedMesh
      ref={meshRef}
      args={[geo, mat, positions.length]}
      frustumCulled={false}
    >
      <instancedBufferAttribute
        attach="instanceColor"
        args={[colors, 3]}
      />
    </instancedMesh>
  );
}

function Connections({
  positions,
  maxDist,
  mouse,
}: {
  positions: Vector3[];
  maxDist: number;
  mouse: React.MutableRefObject<{ x: number; y: number }>;
}) {
  const lineRef = useRef<LineSegments>(null);

  // Pre-allocate the maximum possible line pairs.
  const maxPairs = (positions.length * (positions.length - 1)) / 2;
  const posAttr = useMemo(
    () => new Float32BufferAttribute(new Float32Array(maxPairs * 6), 3),
    [maxPairs],
  );
  const geo = useMemo(() => {
    const g = new BufferGeometry();
    g.setAttribute("position", posAttr);
    return g;
  }, [posAttr]);

  const mat = useMemo(
    () =>
      new LineBasicMaterial({
        color: LINE_COLOR,
        transparent: true,
        opacity: 0.12,
      }),
    [],
  );

  useFrame(({ clock }) => {
    const line = lineRef.current;
    if (!line) return;

    const t = clock.getElapsedTime() * 0.25;
    const mx = mouse.current.x * 0.6;
    const my = mouse.current.y * 0.6;

    let idx = 0;
    for (let i = 0; i < positions.length; i++) {
      const pi = positions[i];
      const ax = pi.x + Math.sin(t + i * 0.4) * 0.15 + mx;
      const ay = pi.y + Math.cos(t + i * 0.3) * 0.15 + my;
      const az = pi.z;

      for (let j = i + 1; j < positions.length; j++) {
        const pj = positions[j];
        const bx = pj.x + Math.sin(t + j * 0.4) * 0.15 + mx;
        const by = pj.y + Math.cos(t + j * 0.3) * 0.15 + my;
        const bz = pj.z;

        const dx = ax - bx;
        const dy = ay - by;
        const dz = az - bz;
        if (dx * dx + dy * dy + dz * dz < maxDist * maxDist) {
          posAttr.setXYZ(idx * 2, ax, ay, az);
          posAttr.setXYZ(idx * 2 + 1, bx, by, bz);
          idx++;
        }
      }
    }

    geo.setDrawRange(0, idx * 2);
    posAttr.needsUpdate = true;
  });

  return <primitive object={new LineSegments(geo, mat)} ref={lineRef} />;
}

// ── Main Scene ───────────────────────────────────────────────────────────────

export default function NodeNetworkScene({ quality }: Scene3DProps) {
  const cfg = QUALITY[quality] ?? QUALITY.full;
  const positions = useMemo(
    () => generateNodes(cfg.count, cfg.spread),
    [cfg.count, cfg.spread],
  );
  const mouse = useRef({ x: 0, y: 0 });


  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <group>
      {/* Lights — minimal: one ambient + one directional, no realtime shadows. */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />

      <Nodes positions={positions} mouse={mouse} />
      <Connections
        positions={positions}
        maxDist={cfg.connectionDistance}
        mouse={mouse}
      />
    </group>
  );
}
