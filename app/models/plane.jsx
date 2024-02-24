import { useGLTF } from "@react-three/drei";

export default function AirPlane({ isRotating, ...props }) {
  const { scene, animations } = useGLTF("/3d/plane.glb");

  return (
    <mesh {...props}>
      <primitive object={scene} />
    </mesh>
  );
}
