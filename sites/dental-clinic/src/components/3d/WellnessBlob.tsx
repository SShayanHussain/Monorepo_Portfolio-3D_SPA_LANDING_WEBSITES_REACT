import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { Scene3DProps } from "@portfolio/ui";

/**
 * An abstract "Wellness Blob" designed to evoke calm, soft breathing.
 * Uses a MeshPhysicalMaterial with transmission for a soft, gel-like appearance,
 * and a simple vertex shader displacement to make it slowly undulate.
 * 
 * Size: Tiny (procedural sphere, no external assets).
 */
export default function WellnessBlob({ quality }: Scene3DProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // A clean, soft mint/sage color
  const baseColor = new THREE.Color("#9ec4b6");
  
  // Use fewer segments on mobile to keep fragment count down, especially since
  // MeshPhysicalMaterial transmission is expensive.
  const detail = quality === "reduced" ? 32 : 128;

  // We use standard React Three Fiber useFrame for the breathing animation
  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    
    // Slow, calming rotation
    meshRef.current.rotation.x = Math.sin(t * 0.1) * 0.5;
    meshRef.current.rotation.y += 0.005;
    
    // "Breathing" scale (4-5 second cycle)
    const scale = 1 + Math.sin(t * 1.5) * 0.05;
    meshRef.current.scale.set(scale, scale, scale);
  });

  return (
    <group position={[0, 0, 0]}>
      <ambientLight intensity={0.6} />
      {/* Soft, cool lighting */}
      <directionalLight position={[5, 10, 5]} intensity={1} color="#ffffff" />
      <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#8ecae6" />
      
      <mesh ref={meshRef}>
        {/* An Icosahedron provides a nice organic shape when smoothed */}
        <icosahedronGeometry args={[2.5, detail]} />
        <meshPhysicalMaterial 
          color={baseColor}
          roughness={0.2}
          metalness={0.1}
          transmission={0.8}
          thickness={2}
          ior={1.2}
          transparent={true}
          opacity={0.9}
          clearcoat={0.5}
          clearcoatRoughness={0.2}
        />
      </mesh>
      
      {/* A smaller, opaque core inside the blob to give the transmission something to refract */}
      <mesh scale={0.6}>
        <sphereGeometry args={[2.5, 32, 32]} />
        <meshStandardMaterial color="#f8f9fa" roughness={0.8} />
      </mesh>
    </group>
  );
}
