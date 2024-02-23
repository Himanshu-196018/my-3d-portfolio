import { useGLTF } from "@react-three/drei";

export default function Bird() {
  const { scene, animations } = useGLTF("/3d/bird.glb");

  return (
    <mesh>
      <primitive object={scene} />
    </mesh>
  );
}
