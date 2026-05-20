import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Group } from "three";

function ArchitecturalModel() {
  const groupRef = useRef<Group>(null);

  // Add gentle floating animation and continuous auto-rotation
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.05 - 0.2;
      groupRef.current.rotation.y += 0.003;
    }
  });

  // To use a custom .glb later, you would comment out the group contents below 
  // and uncomment the useGLTF hook implementation:
  // const { scene } = useGLTF('/building.glb');
  // return <primitive object={scene} />;

  return (
    <group ref={groupRef}>
      {/* Central Core */}
      <mesh position={[0, 0.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.8, 2.5, 0.8]} />
        <meshStandardMaterial color="#d4d0c8" roughness={0.8} metalness={0.1} />
      </mesh>

      {/* Base Slab */}
      <mesh position={[0, -0.6, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.2, 0.15, 2.8]} />
        <meshStandardMaterial color="#e5e0d8" roughness={0.8} metalness={0.1} />
      </mesh>

      {/* Middle Slab (Cantilevered) */}
      <mesh position={[0.3, 0.2, -0.2]} castShadow receiveShadow>
        <boxGeometry args={[2.8, 0.15, 2.4]} />
        <meshStandardMaterial color="#e5e0d8" roughness={0.8} metalness={0.1} />
      </mesh>

      {/* Top Slab */}
      <mesh position={[-0.2, 1.1, 0.2]} castShadow receiveShadow>
        <boxGeometry args={[2.4, 0.12, 2.0]} />
        <meshStandardMaterial color="#e5e0d8" roughness={0.8} metalness={0.1} />
      </mesh>

      {/* Roof / Observation Deck */}
      <mesh position={[0.2, 1.6, -0.3]} castShadow receiveShadow>
        <boxGeometry args={[1.5, 0.1, 1.5]} />
        <meshStandardMaterial color="#e5e0d8" roughness={0.8} metalness={0.1} />
      </mesh>

      {/* Metallic Pillars */}
      {/* Base to Middle Slab Pillars */}
      <mesh position={[1.2, -0.2, -0.8]} castShadow receiveShadow>
        <cylinderGeometry args={[0.04, 0.04, 0.8]} />
        <meshStandardMaterial color="#c5a059" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[-0.8, -0.2, 0.8]} castShadow receiveShadow>
        <cylinderGeometry args={[0.04, 0.04, 0.8]} />
        <meshStandardMaterial color="#c5a059" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Middle to Top Slab Pillars */}
      <mesh position={[1.0, 0.65, -0.5]} castShadow receiveShadow>
        <cylinderGeometry args={[0.03, 0.03, 0.9]} />
        <meshStandardMaterial color="#c5a059" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[-0.9, 0.65, 0.5]} castShadow receiveShadow>
        <cylinderGeometry args={[0.03, 0.03, 0.9]} />
        <meshStandardMaterial color="#c5a059" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Top to Roof Pillars */}
      <mesh position={[0.8, 1.35, -0.8]} castShadow receiveShadow>
        <boxGeometry args={[0.04, 0.5, 0.04]} />
        <meshStandardMaterial color="#c5a059" metalness={0.85} roughness={0.15} />
      </mesh>

      {/* Decorative Bronze Fins */}
      {Array.from({ length: 5 }).map((_, i) => (
        <mesh key={i} position={[-0.4 + i * 0.2, 1.35, -0.2]} castShadow receiveShadow>
          <boxGeometry args={[0.02, 0.4, 0.8]} />
          <meshStandardMaterial color="#8a7350" metalness={0.85} roughness={0.15} />
        </mesh>
      ))}
    </group>
  );
}

export default function ThreeScene() {
  return (
    <Canvas
      orthographic
      shadows
      dpr={[1, 2]}
      camera={{ position: [10, 4, 10], zoom: 110, near: -100, far: 100 }}
      gl={{ antialias: true, alpha: true }}
      className="pointer-events-none"
    >
      <ambientLight intensity={0.4} />
      <directionalLight 
        position={[4, 6, 3]} 
        intensity={1.4} 
        castShadow 
        shadow-mapSize={[1024, 1024]} 
      />
      <Suspense fallback={null}>
        <ArchitecturalModel />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}