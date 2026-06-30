import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Environment } from "@react-three/drei";

const NODE_COUNT = 150;
const RADIUS = 4;
const HEIGHT = 8;
const TURNS = 3;

export default function AscendingNodes() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Initialize node positions
  const nodes = useMemo(() => {
    const data = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      const t = i / NODE_COUNT; // 0 to 1
      const angle = t * Math.PI * 2 * TURNS;
      // Taper the radius as it goes up
      const currentRadius = RADIUS * (1 - t * 0.5);
      
      const x = Math.cos(angle) * currentRadius;
      const y = (t * HEIGHT) - (HEIGHT / 2);
      const z = Math.sin(angle) * currentRadius;

      // Add a little randomness
      const jitter = 0.5;
      data.push({
        x: x + (Math.random() - 0.5) * jitter,
        y: y + (Math.random() - 0.5) * jitter,
        z: z + (Math.random() - 0.5) * jitter,
        scale: Math.random() * 0.5 + 0.5,
        speed: Math.random() * 0.5 + 0.5,
        offset: Math.random() * Math.PI * 2
      });
    }
    return data;
  }, []);

  useFrame((state) => {
    if (!meshRef.current || !groupRef.current) return;
    
    const time = state.clock.elapsedTime;

    // Slow continuous rotation of the whole group
    groupRef.current.rotation.y = time * 0.05;
    
    // Parallax on mouse move
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      (state.pointer.y * Math.PI) / 10,
      0.05
    );
    groupRef.current.rotation.z = THREE.MathUtils.lerp(
      groupRef.current.rotation.z,
      -(state.pointer.x * Math.PI) / 10,
      0.05
    );

    // Update individual instances
    nodes.forEach((node, i) => {
      // Gentle floating motion
      const floatY = Math.sin(time * node.speed + node.offset) * 0.2;
      
      dummy.position.set(node.x, node.y + floatY, node.z);
      dummy.scale.set(node.scale, node.scale, node.scale);
      
      // Orient towards center axis
      dummy.lookAt(0, node.y, 0);
      
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <>
      <ambientLight intensity={0.4} />
      {/* Warm lighting to match the coral/amber palette */}
      <pointLight position={[5, 5, 5]} intensity={2} color="#f97316" />
      <pointLight position={[-5, -5, -5]} intensity={1} color="#fb923c" />
      <Environment preset="city" />

      <group ref={groupRef} position={[0, -1, -5]}>
        <instancedMesh ref={meshRef} args={[undefined, undefined, NODE_COUNT]}>
          <boxGeometry args={[0.8, 0.1, 0.4]} />
          <meshStandardMaterial 
            color="#f97316" 
            roughness={0.2}
            metalness={0.8}
            emissive="#ea580c"
            emissiveIntensity={0.2}
          />
        </instancedMesh>
      </group>
    </>
  );
}
