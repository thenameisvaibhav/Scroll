import { useTexture } from "@react-three/drei";
import React, { useEffect, useMemo, useRef } from "react";
import vertex from "../shaders/vertex.glsl";
import fragment from "../shaders/fragment.glsl";
import { useScrollbar } from "@14islands/r3f-scroll-rig";

const WebglImage = ({ src, ...props }) => {
  const texture = useTexture(src);
  const mat = useRef(null);

  const globalLenis = useScrollbar();
  
  
  const uniforms = useMemo(
    () => ({
      uTexture: { value: texture },
      uVelocity: { value: 0 },
    }),
    []
  );
  
  useEffect(() => {
    const lenis = globalLenis.__lenis;
    lenis.on("scroll", ({ velocity }) => {
      mat.current.uniforms.uVelocity.value = velocity;
    });
  }, []);

  return (
    <mesh {...props}>
      <planeGeometry args={[1, 1, 64, 64]} />
      <shaderMaterial vertexShader={vertex} fragmentShader={fragment} ref={mat}uniforms={uniforms} />
    </mesh>
  );
};

export default WebglImage;
