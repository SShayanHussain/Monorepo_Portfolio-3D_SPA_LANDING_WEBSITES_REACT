import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "framer-motion";
import type { Scene3DProps } from "@portfolio/ui";

/**
 * Procedural wine bottle and glass.
 * Uses manual lighting and transparency instead of an external Environment map 
 * to avoid network requests and indefinite Suspense loops.
 */
export default function DishScene({ quality }: Scene3DProps) {
  const groupRef = useRef<any>(null);
  const { scrollYProgress } = useScroll();

  const radialSegments = quality === "reduced" ? 16 : 64;

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    const scrollVal = scrollYProgress.get();
    groupRef.current.rotation.y += delta * 0.15;
    groupRef.current.rotation.x = 0.2 + scrollVal * 0.3;
    groupRef.current.position.y = -0.5 - scrollVal * 1.5;
  });

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      {/* 
        Manual lighting setup to simulate environment reflections on the glass. 
        Multiple point lights act as "specular highlights" on the glossy surfaces.
      */}
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 10, 5]} intensity={2} color="#ffd6ba" castShadow />
      <spotLight position={[-5, 5, -5]} intensity={1.5} color="#e07a5f" />
      <pointLight position={[2, 2, 2]} intensity={1} color="#ffffff" />
      <pointLight position={[-2, 1, 3]} intensity={0.5} color="#ffffff" />

      {/* --- WINE BOTTLE --- */}
      <group position={[-0.8, 0, 0]}>
        {/* Bottle Body */}
        <mesh position={[0, 0.75, 0]} castShadow>
          <cylinderGeometry args={[0.4, 0.4, 1.5, radialSegments]} />
          <meshPhysicalMaterial color="#1a2f1c" roughness={0.05} metalness={0.8} transparent opacity={0.85} clearcoat={1} />
        </mesh>
        {/* Bottle Shoulder */}
        <mesh position={[0, 1.6, 0]} castShadow>
          <cylinderGeometry args={[0.12, 0.4, 0.2, radialSegments]} />
          <meshPhysicalMaterial color="#1a2f1c" roughness={0.05} metalness={0.8} transparent opacity={0.85} clearcoat={1} />
        </mesh>
        {/* Bottle Neck */}
        <mesh position={[0, 1.85, 0]} castShadow>
          <cylinderGeometry args={[0.12, 0.12, 0.5, radialSegments]} />
          <meshPhysicalMaterial color="#1a2f1c" roughness={0.05} metalness={0.8} transparent opacity={0.85} clearcoat={1} />
        </mesh>
        {/* Label (Opaque) */}
        <mesh position={[0, 0.6, 0.01]}>
          <cylinderGeometry args={[0.41, 0.41, 0.6, radialSegments, 1, true, -Math.PI / 4, Math.PI / 2]} />
          <meshStandardMaterial color="#f4f1eb" roughness={0.9} />
        </mesh>
      </group>

      {/* --- WINE GLASS --- */}
      <group position={[0.8, 0, 0.5]}>
        {/* Glass Base */}
        <mesh position={[0, 0.05, 0]} castShadow>
          <cylinderGeometry args={[0.3, 0.3, 0.02, radialSegments]} />
          <meshPhysicalMaterial color="#ffffff" roughness={0.05} metalness={0.9} transparent opacity={0.3} clearcoat={1} />
        </mesh>
        {/* Glass Stem */}
        <mesh position={[0, 0.4, 0]} castShadow>
          <cylinderGeometry args={[0.03, 0.03, 0.7, 8]} />
          <meshPhysicalMaterial color="#ffffff" roughness={0.05} metalness={0.9} transparent opacity={0.3} clearcoat={1} />
        </mesh>
        {/* Glass Bowl */}
        <mesh position={[0, 1.1, 0]} castShadow>
          <sphereGeometry args={[0.45, radialSegments, radialSegments, 0, Math.PI * 2, 0, Math.PI / 1.8]} />
          <meshPhysicalMaterial color="#ffffff" roughness={0.05} metalness={0.9} transparent opacity={0.2} clearcoat={1} side={2} />
        </mesh>
        {/* Wine Liquid */}
        <mesh position={[0, 0.95, 0]}>
          {/* Slightly smaller than the bowl to avoid z-fighting */}
          <sphereGeometry args={[0.41, radialSegments, radialSegments, 0, Math.PI * 2, 0, Math.PI / 2.2]} />
          <meshPhysicalMaterial color="#4a0404" roughness={0.2} metalness={0.1} transparent opacity={0.9} />
        </mesh>
      </group>
    </group>
  );
}
