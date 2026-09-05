import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";
import type { MotionValue } from "framer-motion";
import * as THREE from "three";

const earthModelPath = `${import.meta.env.BASE_URL}models/earth.glb`;

interface EarthModelProps {
  scale: MotionValue<number>;
  y: MotionValue<number>;
}

function EarthModel({ scale, y }: EarthModelProps) {
  const { scene } = useGLTF(earthModelPath);

  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!groupRef.current) return;

    const currentScale = scale.get();
    const currentY = y.get();

    groupRef.current.scale.set(currentScale, currentScale, currentScale);

    groupRef.current.position.y = currentY;

    // Slow rotation
    groupRef.current.rotation.y += 0.002;
  });

  return (
    <group ref={groupRef} >
      <primitive object={scene} />
    </group>
  );
}

interface EarthProps {
  scale: MotionValue<number>;
  y: MotionValue<number>;
}

export default function Earth({ scale, y }: EarthProps) {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        camera={{
          position: [0, 0, 100],
          fov: 45,
        }}
        dpr={[1, 3]}
         gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.0,
        }}
      >
        <ambientLight intensity={0.01} />
        {/* <Environment preset="night" /> */}

        <directionalLight
          position={[-23, 10, -10]}
          intensity={4}
          castShadow
        />


        <EarthModel scale={scale} y={y} />
      </Canvas>
    </div>
  );
}

useGLTF.preload(earthModelPath);
