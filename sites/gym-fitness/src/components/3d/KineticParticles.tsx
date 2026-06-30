import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useIsBelowMd } from "@portfolio/ui";

export default function KineticParticles() {
  const isMobile = useIsBelowMd();
  // Cap particle count heavily on mobile for 60fps performance budget
  const particleCount = isMobile ? 600 : 2500;
  
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  // Initialize random positions and velocities
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 12;
      const y = (Math.random() - 0.5) * 12;
      const z = (Math.random() - 0.5) * 12;
      const velocity = new THREE.Vector3(
        (Math.random() - 0.5) * 0.015,
        (Math.random() - 0.5) * 0.015,
        (Math.random() - 0.5) * 0.015
      );
      temp.push({ x, y, z, velocity });
    }
    return temp;
  }, [particleCount]);

  useFrame(() => {
    if (!meshRef.current) return;
    
    // Update particle positions
    particles.forEach((particle, i) => {
      particle.x += particle.velocity.x;
      particle.y += particle.velocity.y;
      particle.z += particle.velocity.z;
      
      // Box bounds check to prevent physics explosion
      if (Math.abs(particle.x) > 6) particle.velocity.x *= -1;
      if (Math.abs(particle.y) > 6) particle.velocity.y *= -1;
      if (Math.abs(particle.z) > 6) particle.velocity.z *= -1;
      
      // Swarm effect - slight pull towards center to keep them clumped organically
      particle.velocity.x -= particle.x * 0.0001;
      particle.velocity.y -= particle.y * 0.0001;
      particle.velocity.z -= particle.z * 0.0001;

      dummy.position.set(particle.x, particle.y, particle.z);
      // Fast rotation for aggressive kinetic energy feel
      dummy.rotation.set(particle.x, particle.y, particle.z);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    
    meshRef.current.instanceMatrix.needsUpdate = true;
    
    // Slow rotation of the entire system
    meshRef.current.rotation.y += 0.002;
    meshRef.current.rotation.x += 0.001;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, particleCount]}>
      {/* Low-poly geometry for massive performance gains */}
      <icosahedronGeometry args={[0.035, 0]} />
      {/* Additive blending makes overlapping particles glow brightly */}
      <meshBasicMaterial 
        color="#65e600" 
        transparent 
        opacity={0.7} 
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </instancedMesh>
  );
}
