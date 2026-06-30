import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Float, Environment } from "@react-three/drei";

export default function AbstractScale() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    // Extremely subtle, barely perceptible ambient rotation for authority/stillness
    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
  });

  return (
    <>
      {/* Sharp, confident lighting setup */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 10, 5]} intensity={1.5} castShadow />
      <spotLight position={[-5, 5, -5]} intensity={1} color="#c09455" />
      <Environment preset="city" />

      <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2}>
        <group ref={groupRef} position={[0, -1, 0]}>
          
          {/* Base / Pedestal */}
          <mesh position={[0, -2, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[2, 2.2, 0.4, 32]} />
            <meshStandardMaterial color="#1a1f2c" roughness={0.2} metalness={0.8} />
          </mesh>
          <mesh position={[0, -1.6, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[1.6, 1.8, 0.4, 32]} />
            <meshStandardMaterial color="#1a1f2c" roughness={0.2} metalness={0.8} />
          </mesh>

          {/* Central Column */}
          <mesh position={[0, 1, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[0.3, 0.4, 5, 32]} />
            <meshStandardMaterial color="#c09455" roughness={0.3} metalness={0.9} />
          </mesh>

          {/* Crossbeam (Scale motif) */}
          <mesh position={[0, 3.2, 0]} castShadow receiveShadow>
            <boxGeometry args={[6, 0.15, 0.3]} />
            <meshStandardMaterial color="#c09455" roughness={0.3} metalness={0.9} />
          </mesh>

          {/* Abstract hanging elements */}
          <mesh position={[-2.8, 1.6, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[0.02, 0.02, 3, 16]} />
            <meshStandardMaterial color="#c09455" roughness={0.4} metalness={0.8} />
          </mesh>
          <mesh position={[-2.8, 0, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[0.8, 1.2, 0.2, 32]} />
            <meshStandardMaterial color="#1a1f2c" roughness={0.1} metalness={0.9} />
          </mesh>

          <mesh position={[2.8, 1.6, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[0.02, 0.02, 3, 16]} />
            <meshStandardMaterial color="#c09455" roughness={0.4} metalness={0.8} />
          </mesh>
          <mesh position={[2.8, 0, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[0.8, 1.2, 0.2, 32]} />
            <meshStandardMaterial color="#1a1f2c" roughness={0.1} metalness={0.9} />
          </mesh>

        </group>
      </Float>
    </>
  );
}
