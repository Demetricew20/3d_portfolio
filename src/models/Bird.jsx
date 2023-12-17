import React, { useEffect, useRef } from "react";

import birdScene from "../assets/3d/bird.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Bird = ({ isRotating, ...props }) => {
  const birdRef = useRef();
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef);

  useFrame((_, delta) => {
    if (isRotating) {
      //   birdRef.current.rotation.y += 0.1 * delta;
    }
  });

  useEffect(() => {
    if (!isRotating) {
      actions["Take 001"].play();
    } else {
      actions["Take 001"].stop();
    }
  });

  return (
    <mesh position={[-4, 2, -3]} scale={[0.003, 0.003, 0.003]} ref={birdRef}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Bird;
