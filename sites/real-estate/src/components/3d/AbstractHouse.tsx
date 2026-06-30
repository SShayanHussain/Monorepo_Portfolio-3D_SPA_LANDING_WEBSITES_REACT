import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Environment } from "@react-three/drei";

export default function AbstractHouse() {
  const groupRef = useRef<THREE.Group>(null);
  
  // Ref for all animatable parts
  const baseRef = useRef<THREE.Mesh>(null);
  const leftWallRef = useRef<THREE.Mesh>(null);
  const rightWallRef = useRef<THREE.Mesh>(null);
  const windowRef = useRef<THREE.Mesh>(null);
  const roofRef = useRef<THREE.Mesh>(null);

  // Targets
  const targets = {
    base: { y: 0, opacity: 1 },
    leftWall: { x: -2.8, opacity: 1 },
    rightWall: { x: 2.8, opacity: 1 },
    window: { z: 1.5, scale: 1, opacity: 1 },
    roof: { y: 3.2, rotationZ: 0.2, opacity: 1 }
  };

  // Setup initial states
  useEffect(() => {
    if (baseRef.current) { baseRef.current.position.y = -5; (baseRef.current.material as THREE.Material).transparent = true; (baseRef.current.material as THREE.Material).opacity = 0; }
    if (leftWallRef.current) { leftWallRef.current.position.x = -10; leftWallRef.current.rotation.y = Math.PI; (leftWallRef.current.material as THREE.Material).transparent = true; (leftWallRef.current.material as THREE.Material).opacity = 0; }
    if (rightWallRef.current) { rightWallRef.current.position.x = 10; rightWallRef.current.rotation.y = -Math.PI; (rightWallRef.current.material as THREE.Material).transparent = true; (rightWallRef.current.material as THREE.Material).opacity = 0; }
    if (windowRef.current) { windowRef.current.position.z = 10; windowRef.current.scale.set(0.1, 0.1, 0.1); (windowRef.current.material as THREE.Material).transparent = true; (windowRef.current.material as THREE.Material).opacity = 0; }
    if (roofRef.current) { roofRef.current.position.y = 10; roofRef.current.rotation.z = 0; (roofRef.current.material as THREE.Material).transparent = true; (roofRef.current.material as THREE.Material).opacity = 0; }
  }, []);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    const lerpSpeed = 0.05;

    // Parallax tilt based on mouse (desktop only)
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        (state.pointer.x * Math.PI) / 10 + time * 0.05,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        (-state.pointer.y * Math.PI) / 10,
        0.05
      );
    }

    // Assembly Animations
    if (time > 0.2 && baseRef.current) {
      baseRef.current.position.y = THREE.MathUtils.lerp(baseRef.current.position.y, targets.base.y, lerpSpeed);
      (baseRef.current.material as THREE.Material).opacity = THREE.MathUtils.lerp((baseRef.current.material as THREE.Material).opacity, 1, lerpSpeed);
    }
    
    if (time > 0.4 && leftWallRef.current) {
      leftWallRef.current.position.x = THREE.MathUtils.lerp(leftWallRef.current.position.x, targets.leftWall.x, lerpSpeed);
      leftWallRef.current.rotation.y = THREE.MathUtils.lerp(leftWallRef.current.rotation.y, 0, lerpSpeed);
      (leftWallRef.current.material as THREE.Material).opacity = THREE.MathUtils.lerp((leftWallRef.current.material as THREE.Material).opacity, 1, lerpSpeed);
    }

    if (time > 0.5 && rightWallRef.current) {
      rightWallRef.current.position.x = THREE.MathUtils.lerp(rightWallRef.current.position.x, targets.rightWall.x, lerpSpeed);
      rightWallRef.current.rotation.y = THREE.MathUtils.lerp(rightWallRef.current.rotation.y, 0, lerpSpeed);
      (rightWallRef.current.material as THREE.Material).opacity = THREE.MathUtils.lerp((rightWallRef.current.material as THREE.Material).opacity, 1, lerpSpeed);
    }

    if (time > 0.6 && windowRef.current) {
      windowRef.current.position.z = THREE.MathUtils.lerp(windowRef.current.position.z, targets.window.z, lerpSpeed);
      const s = THREE.MathUtils.lerp(windowRef.current.scale.x, targets.window.scale, lerpSpeed);
      windowRef.current.scale.set(s, s, s);
      (windowRef.current.material as THREE.Material).opacity = THREE.MathUtils.lerp((windowRef.current.material as THREE.Material).opacity, 1, lerpSpeed);
    }

    if (time > 0.7 && roofRef.current) {
      roofRef.current.position.y = THREE.MathUtils.lerp(roofRef.current.position.y, targets.roof.y, lerpSpeed);
      roofRef.current.rotation.z = THREE.MathUtils.lerp(roofRef.current.rotation.z, targets.roof.rotationZ, lerpSpeed);
      (roofRef.current.material as THREE.Material).opacity = THREE.MathUtils.lerp((roofRef.current.material as THREE.Material).opacity, 1, lerpSpeed);
    }
  });

  // Materials
  const stoneMaterial = new THREE.MeshStandardMaterial({ 
    color: "#cbd5e1", // Slate 200
    roughness: 0.8,
    metalness: 0.1
  });
  
  const darkSlateMaterial = new THREE.MeshStandardMaterial({
    color: "#0f172a", // Cream default (dark navy/slate)
    roughness: 0.6,
    metalness: 0.3
  });

  const accentMaterial = new THREE.MeshStandardMaterial({
    color: "#14532d", // Brand 900 (deep green)
    roughness: 0.2,
    metalness: 0.8
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
      <Environment preset="city" />

      <group ref={groupRef} position={[0, -1, 0]}>
        
        {/* Base / Floor */}
        <mesh ref={baseRef} material={stoneMaterial.clone()} castShadow receiveShadow>
          <boxGeometry args={[6, 0.2, 4]} />
        </mesh>

        {/* Left Wall (Tall) */}
        <mesh ref={leftWallRef} position={[-2.8, 1.5, 0]} material={darkSlateMaterial.clone()} castShadow receiveShadow>
          <boxGeometry args={[0.4, 3, 4]} />
        </mesh>

        {/* Right Wall (Short) */}
        <mesh ref={rightWallRef} position={[2.8, 1, 0]} material={darkSlateMaterial.clone()} castShadow receiveShadow>
          <boxGeometry args={[0.4, 2, 4]} />
        </mesh>

        {/* Floating Accent Plane (representing a window or partition) */}
        <mesh ref={windowRef} position={[0, 1.5, 1.5]} material={accentMaterial.clone()} castShadow>
          <boxGeometry args={[3, 2, 0.1]} />
        </mesh>

        {/* Abstract Angled Roof */}
        <mesh ref={roofRef} position={[-0.5, 3.2, 0]} rotation={[0, 0, 0.2]} material={stoneMaterial.clone()} castShadow receiveShadow>
          <boxGeometry args={[5, 0.2, 4.2]} />
        </mesh>

      </group>
    </>
  );
}
