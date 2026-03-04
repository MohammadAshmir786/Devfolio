import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useMemo, useRef, useState, useEffect } from "react";

const PARTICLES = 512;

function generatePositions() {
  const layouts: THREE.Vector3[][] = [];

  // -------- Plane --------
  const plane: THREE.Vector3[] = [];
  const amountX = 16;
  const separation = 5;
  for (let i = 0; i < PARTICLES; i++) {
    const x = (i % amountX) * separation;
    const z = Math.floor(i / amountX) * separation;
    const y = (Math.sin(x * 0.5) + Math.sin(z * 0.5)) * 2;
    plane.push(new THREE.Vector3(x - 40, y, z - 40));
  }
  layouts.push(plane);

  // -------- Cube --------
  const cube: THREE.Vector3[] = [];
  const size = 8;
  for (let i = 0; i < PARTICLES; i++) {
    cube.push(
      new THREE.Vector3(
        (i % size) - size / 2,
        (Math.floor(i / size) % size) - size / 2,
        Math.floor(i / (size * size)) - size / 2,
      ).multiplyScalar(5),
    );
  }
  layouts.push(cube);

  // -------- Random --------
  const random: THREE.Vector3[] = [];
  for (let i = 0; i < PARTICLES; i++) {
    random.push(
      new THREE.Vector3(
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
      ),
    );
  }
  layouts.push(random);

  // -------- Sphere --------
  const sphere: THREE.Vector3[] = [];
  const radius = 30;
  for (let i = 0; i < PARTICLES; i++) {
    const phi = Math.acos(-1 + (2 * i) / PARTICLES);
    const theta = Math.sqrt(PARTICLES * Math.PI) * phi;
    sphere.push(
      new THREE.Vector3(
        radius * Math.cos(theta) * Math.sin(phi),
        radius * Math.sin(theta) * Math.sin(phi),
        radius * Math.cos(phi),
      ),
    );
  }
  layouts.push(sphere);

  return layouts;
}

function Particles() {
  const meshRef = useRef<THREE.InstancedMesh>(null!);
  const groupRef = useRef<THREE.Group>(null!);
  const layouts = useMemo(() => generatePositions(), []);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const [current, setCurrent] = useState(0);
  const progress = useRef(0);

  // Change shape every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % layouts.length);
      progress.current = 0;
    }, 4000);
    return () => clearInterval(interval);
  }, [layouts.length]);

  useFrame((state, delta) => {
    progress.current += delta * 0.5;
    const t = Math.min(progress.current, 1);

    // ✅ Mouse reactive rotation (no dragging needed)
    if (groupRef.current) {
      groupRef.current.rotation.y = state.mouse.x * 0.6;
      groupRef.current.rotation.x = state.mouse.y * 0.4;
    }

    for (let i = 0; i < PARTICLES; i++) {
      const from = layouts[(current - 1 + layouts.length) % layouts.length][i];
      const to = layouts[current][i];

      const position = new THREE.Vector3().lerpVectors(from, to, t);

      dummy.position.copy(position);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <group ref={groupRef}>
      <instancedMesh ref={meshRef} args={[undefined, undefined, PARTICLES]}>
        <sphereGeometry args={[0.55, 20, 20]} />
        <meshPhysicalMaterial
          color="#cbd5e1"
          metalness={1}
          roughness={0.18}
          clearcoat={1}
          clearcoatRoughness={0.08}
          envMapIntensity={1.2}
        />
      </instancedMesh>
    </group>
  );
}

export default function SpritesScene(props: { className?: string }) {
  return (
    <div className={`absolute ${props.className || ""}`}>
      <Canvas camera={{ position: [0, 50, 120], fov: 60 }}>
        <ambientLight intensity={0.35} />
        <hemisphereLight args={["#ffffff", "#1e293b", 0.7]} />
        <directionalLight position={[10, 20, 10]} intensity={1.4} />
        <pointLight position={[-20, 15, 25]} intensity={0.9} color="#93c5fd" />
        <Particles />
      </Canvas>
    </div>
  );
}
