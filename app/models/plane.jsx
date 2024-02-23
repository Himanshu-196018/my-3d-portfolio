import { useGLTF } from "@react-three/drei";

export default function AirPlane() {
  const { scene, animations } = useGLTF("/3d/plane.glb");

  return (
    <mesh>
      <primitive object={scene} />
    </mesh>
  );
}
