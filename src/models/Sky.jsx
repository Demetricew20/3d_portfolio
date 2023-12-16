import { useGLTF } from "@react-three/drei";
import React from "react";

import skyScene from "../assets/3d/sky.glb";

const Sky = () => {
  //primitive element that only consumes the model that it uses
  const sky = useGLTF(skyScene);

  return (
    <mesh>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;
