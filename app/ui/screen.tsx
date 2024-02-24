"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import clsx from "clsx";
import Loader from "./loader";
import Island from "@/app/models/island";
import Sky from "@/app/models/sky";
import Bird from "@/app/models/bird";
import AirPlane from "@/app/models/plane";

export default function Screen() {
  const [isRotating, setIsRotating] = useState(false);

  const adjustIslandForScreenSize = () => {
    let screenScale = null,
      screenPosition = [0, -6.5, -43],
      rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const [planeScale, PlanePosition] = adjustPlaneForScreenSize();

  return (
    <Canvas
      className={clsx("w-full h-screen bg-transparent cursor-grab", {
        "cursor-grabbing": isRotating,
      })}
      camera={{ near: 0.1, far: 1000 }}
    >
      <Suspense fallback={<Loader />}>
        <directionalLight position={[1, 1, 1]} intensity={2} />
        <ambientLight intensity={0.6} />
        <hemisphereLight groundColor={"#000000"} intensity={1} />

        <Bird />
        <Sky />
        <Island
          position={islandPosition}
          scale={islandScale}
          rotation={islandRotation}
          isRotating={isRotating}
          setIsRotating={setIsRotating}
        />
        <AirPlane
          isRotating={isRotating}
          planeScale={planeScale}
          planePosition={PlanePosition}
          rotation={[0, 20, 0]}
        />
      </Suspense>
    </Canvas>
  );
}
