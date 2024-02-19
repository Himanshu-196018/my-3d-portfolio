'use client';
import { Canvas } from "@react-three/fiber";

export default function Screen() {
    return (
        <Canvas>
            <ambientLight />
        </Canvas>
    );
}