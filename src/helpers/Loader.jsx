import { Html, useProgress } from "@react-three/drei";

export default function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="text-center grid place-content-center h-[100dvh] w-screen bg-black">
        <h2 className="text-white text-5xl mt-10 font-bold">
          {Math.round(progress * 100) / 100}%
        </h2>
      </div>
    </Html>
  );
}
