import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Preload, Sparkles } from "@react-three/drei";
import { useReducedMotion } from "framer-motion";
import * as THREE from "three";

function NetworkGraph({
  mobile,
  reducedMotion,
}: {
  mobile: boolean;
  reducedMotion: boolean;
}) {
  const group = useRef<THREE.Group>(null);
  const pointer = useThree((state) => state.pointer);
  const { nodePositions, linePositions } = useMemo(() => {
    const count = mobile ? 46 : 88;
    const points: THREE.Vector3[] = [];
    for (let index = 0; index < count; index += 1) {
      const y = 1 - (index / (count - 1)) * 2;
      const radius = Math.sqrt(1 - y * y);
      const angle = Math.PI * (3 - Math.sqrt(5)) * index;
      const irregularity = 0.72 + ((index * 37) % 19) / 100;
      points.push(
        new THREE.Vector3(
          Math.cos(angle) * radius * 2.65 * irregularity,
          y * 2.05 * irregularity,
          Math.sin(angle) * radius * 1.05 * irregularity,
        ),
      );
    }
    const lines: number[] = [];
    for (let first = 0; first < points.length; first += 1)
      for (let second = first + 1; second < points.length; second += 1) {
        if (points[first].distanceTo(points[second]) < (mobile ? 1.02 : 0.9))
          lines.push(...points[first].toArray(), ...points[second].toArray());
      }
    return {
      nodePositions: new Float32Array(
        points.flatMap((point) => point.toArray()),
      ),
      linePositions: new Float32Array(lines),
    };
  }, [mobile]);
  useFrame((state, delta) => {
    if (!group.current || reducedMotion) return;
    group.current.rotation.y += delta * 0.025;
    group.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.09) * 0.045;
    group.current.position.x = THREE.MathUtils.damp(
      group.current.position.x,
      pointer.x * 0.18,
      2,
      delta,
    );
    group.current.position.y = THREE.MathUtils.damp(
      group.current.position.y,
      pointer.y * 0.12,
      2,
      delta,
    );
  });
  return (
    <group ref={group}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#6edcff"
          transparent
          opacity={0.2}
          depthWrite={false}
        />
      </lineSegments>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[nodePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#b2f1ff"
          size={mobile ? 0.045 : 0.05}
          transparent
          opacity={0.84}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
      <mesh position={[-1.3, 0.55, 0.2]}>
        <icosahedronGeometry args={[0.105, 1]} />
        <meshBasicMaterial color="#aff4ff" />
      </mesh>
      <mesh position={[1.85, -0.8, -0.05]}>
        <icosahedronGeometry args={[0.08, 1]} />
        <meshBasicMaterial color="#a99bff" />
      </mesh>
      <mesh position={[0.55, 1.5, 0.25]}>
        <icosahedronGeometry args={[0.07, 1]} />
        <meshBasicMaterial color="#87eaff" />
      </mesh>
      {!reducedMotion && (
        <Sparkles
          count={mobile ? 20 : 42}
          scale={[6.7, 5.5, 2.5]}
          size={1.6}
          speed={0.12}
          opacity={0.28}
          color="#84dfff"
        />
      )}
    </group>
  );
}

export default function HeroScene() {
  const reducedMotion = useReducedMotion() ?? false;
  const [mobile, setMobile] = useState(
    () => typeof window !== "undefined" && window.innerWidth < 700,
  );
  useEffect(() => {
    const updateMobile = () => setMobile(window.innerWidth < 700);
    window.addEventListener("resize", updateMobile, { passive: true });
    return () => window.removeEventListener("resize", updateMobile);
  }, []);
  return (
    <Canvas
      camera={{ position: [0, 0, 8.5], fov: 48 }}
      dpr={mobile ? 1 : [1, 1.35]}
      frameloop={reducedMotion ? "demand" : "always"}
      gl={{ alpha: true, antialias: !mobile, powerPreference: "low-power" }}
    >
      <NetworkGraph mobile={mobile} reducedMotion={reducedMotion} />
      <Preload all />
    </Canvas>
  );
}
