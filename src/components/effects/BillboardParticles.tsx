import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { useMemo, useRef } from "react";

// Png textures for particles
const modules = import.meta.glob<{ default: string }>(
  "/src/assets/textures/*.png",
  { eager: true },
);

// production-safe URLs
const imageUrls: string[] = Object.values(modules).map((mod) => mod.default);

const PARTICLE_COUNT = 90;

function Particles({ imageUrls }: { imageUrls: string[] }) {
  const groupRef = useRef<THREE.Group>(null!);

  // Load textures
  const textures = useLoader(THREE.TextureLoader, imageUrls);

  // color handling
  textures.forEach((texture) => {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.needsUpdate = true;
  });

  const particleGroups = useMemo(() => {
    if (!textures || textures.length === 0) return [];

    const groupCount = textures.length;
    const baseCount = Math.floor(PARTICLE_COUNT / groupCount);
    const remainder = PARTICLE_COUNT % groupCount;

    return textures.map((texture, index) => {
      const count = baseCount + (index < remainder ? 1 : 0);
      const positions = new Float32Array(count * 3);

      for (let i = 0; i < count; i++) {
        positions[i * 3] = 2000 * Math.random() - 1000;
        positions[i * 3 + 1] = 2000 * Math.random() - 1000;
        positions[i * 3 + 2] = 2000 * Math.random() - 1000;
      }

      return { texture, positions, count };
    });
  }, [textures]);

  useFrame((state) => {
    const { x, y } = state.pointer;

    state.camera.position.x += (-x * 500 - state.camera.position.x) * 0.05;
    state.camera.position.y += (-y * 500 - state.camera.position.y) * 0.05;
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <group ref={groupRef}>
      {particleGroups.map(({ texture, positions, count }, index) => (
        <points key={`${texture.uuid}-${index}`}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={count}
              array={positions}
              itemSize={3}
            />
          </bufferGeometry>

          <pointsMaterial
            size={80}
            sizeAttenuation
            map={texture}
            alphaTest={0.5}
            transparent
            depthWrite={false}
            color="#ffffff"
          />
        </points>
      ))}
    </group>
  );
}

export default function BillboardParticles() {
  // Fallback safety
  const particleImages = useMemo(() => {
    return imageUrls.length > 0 ? imageUrls : [];
  }, []);

  return (
    <div className="w-full h-screen absolute top-0 left-0 inset-0 z-10">
      <Canvas camera={{ position: [0, 0, 1000], fov: 55, near: 2, far: 2000 }}>
        <fog attach="fog" args={["#6a6c70", 500, 3000]} />
        <Particles imageUrls={particleImages} />
      </Canvas>
    </div>
  );
}
