"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "./loader";
import Island from "@/app/models/island";
import Sky from "@/app/models/sky";
import Bird from "@/app/models/bird";
import AirPlane from "@/app/models/plane";

export default function Screen() {
  const adjustIslandForScreenSize = () => {
    let screenScale = null,
      screenPosition = [0, -6.5, -43];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  return (
    <Canvas
      className="w-full h-screen bg-transparent"
      camera={{ near: 0.1, far: 1000 }}
    >
      <Suspense fallback={<Loader />}>
        <directionalLight position={[1, 1, 1]} intensity={2} />
        <ambientLight intensity={0.6} />
        <hemisphereLight groundColor={"#000000"} intensity={1} />

        <Bird />
        <Sky />
        <Island position={islandPosition} scale={islandScale} />
        <AirPlane />
      </Suspense>
    </Canvas>
  );
}
