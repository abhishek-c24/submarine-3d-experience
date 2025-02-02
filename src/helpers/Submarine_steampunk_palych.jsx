import React, { useEffect, useRef } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";

export function SubMarineModel(props) {
  const groupRef = useRef();
  const modelRef = useRef();

  // get scroll value
  const scroll = useScroll();

  // timeline reference
  const tl = useRef();

  // update seek - scroll offset
  useFrame(() => {
    if (tl?.current) tl.current.seek(scroll.offset * tl.current.duration());
  });

  const { nodes, materials } = useGLTF(
    "/model-assets/submarine_steampunk_palych-transformed.glb"
  );

  useEffect(() => {
    if (modelRef.current) {
      // Compute bounding box
      const bbox = new THREE.Box3().setFromObject(modelRef.current);
      const center = new THREE.Vector3();
      bbox.getCenter(center);

      // Shift model so that pivot is at the center for rotation to be precise
      modelRef.current.position.set(-center.x, -center.y, -center.z);
      groupRef.current.rotation.y = 2.5;
    }
  }, []);

  useEffect(() => {
    // gsap timeline initiated
    tl.current = gsap.timeline({
      defaults: { duration: 2, ease: "power1.inOut" },
    });
    
    // Define animations for the submarine model
    tl.current
      .to(groupRef.current.scale, { y: 0.04, x: 0.04, z: 0.04 }, 0)
      .to(groupRef.current.position, { y: 0, x: 0, z: -0.2 }, 0)
      .to(groupRef.current.rotation, { y: -2.5, x: 0, z: 0 }, 2)
      .to(groupRef.current.position, { y: 0, x: 0, z: 0.2 }, 2)
      .to(groupRef.current.scale, { y: 0.03, x: 0.03, z: 0.03 }, 3)
      .to(groupRef.current.rotation, { y: -Math.PI / 2, x: 0, z: 0 }, 4)
      .to(groupRef.current.position, { y: 0, x: 0, z: 0 }, 4);
  }, []);

  return (
    <group ref={groupRef} {...props}>
      <group ref={modelRef}>
        <mesh
          geometry={nodes["Plane003_Material_#25_0"].geometry}
          material={materials.Material_25}
          position={[-33.181, -1.537, 1.083]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.001}
        />
        <mesh
          geometry={nodes["Line012_Material_#1638_0"].geometry}
          material={materials.Material_1638}
          position={[-41.898, 4.494, 1.115]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.001}
        />
        <mesh
          geometry={nodes["Cylinder023_Material_#33_0"].geometry}
          material={materials.Material_33}
          position={[-43.1, 2.117, 1.122]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.001}
        />
        <mesh
          geometry={nodes["Cylinder023_Material_#1558_0"].geometry}
          material={materials.Material_1558}
          position={[-43.1, 2.117, 1.122]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.001}
        />
        <mesh
          geometry={nodes["Cylinder021_Material_#36_0"].geometry}
          material={materials.Material_36}
          position={[-38.918, 0.807, 1.095]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.001}
        />
        <mesh
          geometry={nodes["Circle012_Material_#1603_0"].geometry}
          material={materials.Material_1603}
          position={[-43.2, -5.385, 0.974]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.001}
        />
        <mesh
          geometry={nodes["Circle012_Material_#207_0"].geometry}
          material={materials.Material_207}
          position={[-43.2, -5.385, 0.974]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.001}
        />
        <mesh
          geometry={nodes["Cylinder017_Material_#40_0"].geometry}
          material={materials.Material_40}
          position={[-40.433, 0.51, 1.517]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.001}
        />
        <mesh
          geometry={nodes["Cylinder006_Material_#42_0"].geometry}
          material={materials.Material_42}
          position={[-41.429, 0.462, 1.131]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.001}
        />
        <mesh
          geometry={nodes["Circle011_Material_#1603_0"].geometry}
          material={materials.Material_1603_0}
          position={[-36.455, 0.767, 1.118]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.001}
        />
        <mesh
          geometry={nodes["Cylinder016_Material_#53_0"].geometry}
          material={materials.Material_53}
          position={[-41.843, -1.082, 0.145]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.001}
        />
        <mesh
          geometry={nodes["Cylinder001_Material_#58_0"].geometry}
          material={materials.Material_58}
          position={[-34.246, -1.197, 1.115]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.001}
        />
        <mesh
          geometry={nodes["Cylinder026_Material_#2343_0"].geometry}
          material={materials.Material_2343}
          position={[-38.993, -1.071, 2.483]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.001}
        />
        <mesh
          geometry={nodes["Sphere012_Material_#1739_0"].geometry}
          material={materials.Material_1739_0}
          position={[-39.978, -1.122, 2.588]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.001}
        />
        <mesh
          geometry={nodes["Line019_Material_#80_0"].geometry}
          material={materials.Material_80}
          position={[-42.983, 2.04, 1.115]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.001}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/model-assets/submarine_steampunk_palych-transformed.glb");
