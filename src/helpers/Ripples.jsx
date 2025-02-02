import { useRef, useEffect, useState } from "react";
import { extend, useFrame, useThree } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";

// GLSL Shader for Ripples
const RippleShaderMaterial = shaderMaterial(
  { time: 0, mouse: new THREE.Vector2(0, 0) },
  `
    varying vec2 vUv;
    uniform vec2 mouse;
    uniform float time;

    void main() {
      vUv = uv;
      vec3 pos = position;

      // Calculate distance from the mouse
      float dist = distance(mouse, vUv) * 10.0;

      // Create ripple effect
      pos.z += sin(dist - time * 3.0) * 0.03 * exp(-dist * 0.4);

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  `
    varying vec2 vUv;
    void main() {
      gl_FragColor = vec4(0.0, 0.2, 0.5, 0.3);
    }
  `
);

extend({ RippleShaderMaterial });

export function Ripples() {
  const meshRef = useRef();
  const { viewport } = useThree();
  const [mouse, setMouse] = useState(new THREE.Vector2(0, 0));

  // Update shader uniform for time
  useFrame(({ clock }) => {
    if (meshRef?.current) {
      meshRef.current.material.uniforms.time.value = clock.getElapsedTime();
      meshRef.current.material.uniforms.mouse.value = mouse;
    }
  });

  // Mouse movement handler
  const handlePointerMove = (event) => {
    const x = event.clientX / window.innerWidth;
    const y = 1 - event.clientY / window.innerHeight;
    gsap.to(mouse, { x, y, duration: 0.2, ease: "power2.out" });
  };

  useEffect(() => {
    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <mesh ref={meshRef} rotation-y={Math.PI / 2} position={[0.01, 0, 0]}>
      <planeGeometry args={[viewport.width, viewport.height, 64, 64]} />
      <rippleShaderMaterial time={0} mouse={mouse} transparent />
    </mesh>
  );
}
