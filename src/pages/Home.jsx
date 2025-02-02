import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Scroll, ScrollControls, Text } from "@react-three/drei";
import Hero from "../sections/Hero";
import Two from "../sections/Two";
import Three from "../sections/Three";
import Loader from "../helpers/Loader";
import { SubMarineModel } from "../helpers/Submarine_steampunk_palych";
import { Ripples } from "../helpers/Ripples";

export const Scene = () => (
  <Canvas
    shadows
    resize
    camera={{ position: [1, 0, 0], fov: 30, near: 0.05, far: 10 }}
  >
    <Ripples /> {/* Shaders to create water effect */}
    <Suspense fallback={<Loader />}>
      <ScrollControls pages={5} damping={0.8}>
        {/* model */}
        <SubMarineModel scale={0.03} />

        {/* Lighting the model */}
        <Environment files={"warehouse.hdr"} path={"/hdr/"} />

        <Scroll>
          <TitleText />
        </Scroll>

        <Scroll html style={{ width: "100%", zIndex: "0" }}>
          <PageContent />
        </Scroll>
      </ScrollControls>
    </Suspense>
  </Canvas>
);

const TitleText = () => (
  <>
    <Text
      font={"/KanitBold.ttf"}
      position={[-0.4, 0.2, 0]}
      rotation={[0, 0.5 * Math.PI, 0]}
      fontSize={0.2}
      color={"white"}
      fillOpacity={0.8}
    >
      SUBMARINE
    </Text>
    <Text
      font={"/KanitBold.ttf"}
      position={[0.2, -2.2, 0]}
      rotation={[0, 0.5 * Math.PI, 0]}
      fontSize={0.1}
      color={"white"}
      fillOpacity={1}
    >
      Fin.
    </Text>
  </>
);

const PageContent = () => (
  <>
    <Hero />
    <Two />
    <div className="h-[100dvh]"></div>
    <Three />
  </>
);
