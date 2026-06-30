import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Float, Environment } from "@react-three/drei";

export default function GlowingOrbs() {
  const groupRef = useRef<THREE.Group>(null);
  
  // Orbs slowly rotate as a group
  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={1.5} color="#dfa79a" />
      <spotLight position={[-5, -5, -5]} intensity={2} color="#f5dfd9" />
      <Environment preset="apartment" />

      <group ref={groupRef}>
        {/* Main large orb */}
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
          <mesh position={[0, 0, 0]} castShadow receiveShadow>
            <sphereGeometry args={[2.5, 64, 64]} />
            <meshPhysicalMaterial 
              color="#cd8373"
              roughness={0.1}
              transmission={0.9}
              thickness={1.5}
              ior={1.5}
              clearcoat={1}
              clearcoatRoughness={0.1}
            />
          </mesh>
        </Float>

        {/* Medium secondary orb */}
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <mesh position={[3, 1.5, -2]} castShadow receiveShadow>
            <sphereGeometry args={[1.5, 64, 64]} />
            <meshPhysicalMaterial 
              color="#eac6bc"
              roughness={0.2}
              transmission={0.8}
              thickness={1}
              ior={1.4}
              clearcoat={0.5}
            />
          </mesh>
        </Float>

        {/* Small floating orb */}
        <Float speed={2.5} rotationIntensity={2} floatIntensity={2.5}>
          <mesh position={[-2.5, -1.5, 2]} castShadow receiveShadow>
            <sphereGeometry args={[0.8, 32, 32]} />
            <meshPhysicalMaterial 
              color="#dfa79a"
              roughness={0.1}
              transmission={0.95}
              thickness={0.5}
              ior={1.6}
              clearcoat={1}
            />
          </mesh>
        </Float>
      </group>
    </>
  );
}
