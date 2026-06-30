import { useRef, useMemo, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function NetworkSim({ quality }: { quality: "full" | "reduced" }) {
  const nodeCount = quality === "full" ? 80 : 30;
  
  const nodes = useRef<THREE.InstancedMesh>(null);

  // Generate random hub positions on a plane
  const positions = useMemo(() => {
    const pos = [];
    for (let i = 0; i < nodeCount; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 2;
      pos.push(new THREE.Vector3(x, y, z));
    }
    return pos;
  }, [nodeCount]);

  // Set instance matrices after mount so ref is populated
  useEffect(() => {
    if (!nodes.current) return;
    const tempObject = new THREE.Object3D();
    positions.forEach((pos, i) => {
      tempObject.position.copy(pos);
      tempObject.updateMatrix();
      nodes.current!.setMatrixAt(i, tempObject.matrix);
    });
    nodes.current.instanceMatrix.needsUpdate = true;
  }, [positions]);

  // Generate line segments between close nodes to form a network
  const { lineGeom } = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    const pts: number[] = [];
    const distances: number[] = [];
    
    // Connect nodes that are within a certain distance
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const d = positions[i].distanceTo(positions[j]);
        if (d < 4.5) {
          pts.push(positions[i].x, positions[i].y, positions[i].z);
          pts.push(positions[j].x, positions[j].y, positions[j].z);
          // Distance attribute used for dash offset logic in shader
          distances.push(0, d);
        }
      }
    }
    geom.setAttribute("position", new THREE.Float32BufferAttribute(pts, 3));
    geom.setAttribute("lineDistance", new THREE.Float32BufferAttribute(distances, 1));
    return { lineGeom: geom };
  }, [nodeCount, positions]);

  // Custom shader for flowing lines (dash offset simulation)
  const lineShader = useMemo(() => new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0 },
      color: { value: new THREE.Color("#F97316") } // Brand orange
    },
    vertexShader: `
      attribute float lineDistance;
      varying float vDistance;
      void main() {
        vDistance = lineDistance;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float time;
      uniform vec3 color;
      varying float vDistance;
      void main() {
        // Create a flowing dashed effect
        float dash = sin(vDistance * 2.0 - time * 5.0);
        if (dash < 0.0) discard;
        // Fade out slightly based on distance to soften the network
        gl_FragColor = vec4(color, 0.6);
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  }), []);

  useFrame((state) => {
    // Update shader time uniform directly
    lineShader.uniforms.time.value = state.clock.elapsedTime;
    
    // Slowly rotate the whole network for ambient motion
    if (nodes.current && nodes.current.parent) {
      nodes.current.parent.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <group position={[0, 0, -5]} rotation={[0.4, 0, 0]}>
      {/* Nodes (Hubs) */}
      <instancedMesh ref={nodes} args={[undefined, undefined, nodeCount]}>
        <sphereGeometry args={[0.06, 8, 8]} />
        <meshBasicMaterial color="#38BDF8" /> {/* Sky blue for hubs */}
      </instancedMesh>
      
      {/* Flowing connections */}
      <lineSegments geometry={lineGeom} material={lineShader} />
    </group>
  );
}
