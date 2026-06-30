import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Environment } from "@react-three/drei";



// To use ThreeJS built-in lights with a displaced geometry, we inject into MeshPhysicalMaterial
export default function FabricSim() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshPhysicalMaterial>(null);
  
  // Create a uniforms object to hold time
  const uniforms = useMemo(() => ({
    uTime: { value: 0 }
  }), []);

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle floating/rotation of the entire fabric plane
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.05;
    }
    uniforms.uTime.value = state.clock.elapsedTime;
  });

  const onBeforeCompile = (shader: any) => {
    shader.uniforms.uTime = uniforms.uTime;
    
    // Inject the noise functions and uniform
    shader.vertexShader = shader.vertexShader.replace(
      '#include <common>',
      `
      #include <common>
      uniform float uTime;
      
      vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
      vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
      vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

      float cnoise(vec3 P){
        vec3 Pi0 = floor(P);
        vec3 Pi1 = Pi0 + vec3(1.0);
        Pi0 = mod(Pi0, 289.0);
        Pi1 = mod(Pi1, 289.0);
        vec3 Pf0 = fract(P);
        vec3 Pf1 = Pf0 - vec3(1.0);
        vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
        vec4 iy = vec4(Pi0.yy, Pi1.yy);
        vec4 iz0 = Pi0.zzzz;
        vec4 iz1 = Pi1.zzzz;

        vec4 ixy = permute(permute(ix) + iy);
        vec4 ixy0 = permute(ixy + iz0);
        vec4 ixy1 = permute(ixy + iz1);

        vec4 gx0 = ixy0 / 7.0;
        vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
        gx0 = fract(gx0);
        vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
        vec4 sz0 = step(gz0, vec4(0.0));
        gx0 -= sz0 * (step(0.0, gx0) - 0.5);
        gy0 -= sz0 * (step(0.0, gy0) - 0.5);

        vec4 gx1 = ixy1 / 7.0;
        vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
        gx1 = fract(gx1);
        vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
        vec4 sz1 = step(gz1, vec4(0.0));
        gx1 -= sz1 * (step(0.0, gx1) - 0.5);
        gy1 -= sz1 * (step(0.0, gy1) - 0.5);

        vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
        vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
        vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
        vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
        vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
        vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
        vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
        vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

        vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
        g000 *= norm0.x;
        g010 *= norm0.y;
        g100 *= norm0.z;
        g110 *= norm0.w;
        vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
        g001 *= norm1.x;
        g011 *= norm1.y;
        g101 *= norm1.z;
        g111 *= norm1.w;

        float n000 = dot(g000, Pf0);
        float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
        float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
        float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
        float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
        float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
        float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
        float n111 = dot(g111, Pf1);

        vec3 fade_xyz = fade(Pf0);
        vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
        vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
        float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
        return 2.2 * n_xyz;
      }

      float disp(vec3 p) {
        float f = 1.2;
        vec3 np = vec3(p.x * f + uTime * 0.15, p.y * f - uTime * 0.1, p.z);
        return cnoise(np) * 0.8 + cnoise(np * 3.0) * 0.15;
      }
      `
    );

    // Displace vertices
    shader.vertexShader = shader.vertexShader.replace(
      '#include <begin_vertex>',
      `
      #include <begin_vertex>
      
      float noiseFreq = 1.2;
      float noiseAmp = 0.8;
      vec3 noisePos = vec3(position.x * noiseFreq + uTime * 0.15, position.y * noiseFreq - uTime * 0.1, position.z);
      
      // Main drape
      transformed.z += cnoise(noisePos) * noiseAmp;
      
      // Secondary ripples
      transformed.z += cnoise(noisePos * 3.0) * 0.15;
      `
    );

    // Calculate normals roughly by sampling neighboring points to ensure accurate lighting on the ripples
    shader.vertexShader = shader.vertexShader.replace(
      '#include <beginnormal_vertex>',
      `
      #include <beginnormal_vertex>
      
      // To compute normals, we sample displacement at 3 points (current, +dx, +dy)
      float eps = 0.01;
      
      float d0 = disp(position);
      float dx = disp(position + vec3(eps, 0.0, 0.0));
      float dy = disp(position + vec3(0.0, eps, 0.0));
      
      // Tangent vectors
      vec3 v1 = normalize(vec3(eps, 0.0, dx - d0));
      vec3 v2 = normalize(vec3(0.0, eps, dy - d0));
      
      // Cross product gives the new normal
      objectNormal = normalize(cross(v1, v2));
      `
    );
  };

  return (
    <>
      <ambientLight intensity={0.5} color="#ffffff" />
      {/* Hard directional light to emphasize sheen and shadows */}
      <directionalLight position={[5, 10, 5]} intensity={2.5} color="#ffffff" castShadow />
      <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#f0f0ed" />
      <Environment preset="studio" />

      <mesh ref={meshRef} position={[0, 0, -2]} rotation={[-Math.PI / 8, 0, 0]}>
        {/* High segment count required for smooth displacement */}
        <planeGeometry args={[16, 16, 128, 128]} />
        <meshPhysicalMaterial 
          ref={materialRef}
          color="#f7f7f5" // Ivory fabric
          roughness={0.4} // Silk-like
          metalness={0.1}
          clearcoat={0.3} // Adds sheen
          clearcoatRoughness={0.2}
          side={THREE.DoubleSide}
          onBeforeCompile={onBeforeCompile}
        />
      </mesh>
    </>
  );
}
