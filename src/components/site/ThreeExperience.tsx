import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, MeshDistortMaterial } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Mesh } from "three";

function OrganicForm() {
  const ref = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.15;
      ref.current.rotation.x += delta * 0.05;
    }
  });
  return (
    <mesh ref={ref} castShadow receiveShadow>
      {/* Replace with your own .glb via useGLTF later */}
      <torusKnotGeometry args={[1.1, 0.36, 220, 32]} />
      <MeshDistortMaterial
        color="#b8956a"
        roughness={0.25}
        metalness={0.85}
        distort={0.32}
        speed={1.4}
      />
    </mesh>
  );
}

export default function ThreeScene() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0, 4.2], fov: 38 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[4, 6, 3]} intensity={1.4} castShadow />
      <Suspense fallback={null}>
        <OrganicForm />
        <Environment preset="warehouse" />
      </Suspense>
      <OrbitControls enablePan={false} enableZoom={false} enableRotate={false} autoRotate={true} minDistance={2.5} maxDistance={8} />
    </Canvas>
  );
}