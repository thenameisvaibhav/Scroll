import { ScrollScene, UseCanvas } from '@14islands/r3f-scroll-rig';
import React, { useRef } from 'react'

const Canvas = () => {
    const track = useRef(null)
  return (
    <>
      <div
        ref={track}
        className="size-60 bg-red-500 absolute left-1/3 top-1/3"
      ></div>

      <UseCanvas>
        <ScrollScene track={track}>
          {({ scale, ...props }) => (
            <mesh scale={scale}>
              <sphereGeometry />
              <meshNormalMaterial />
            </mesh>
          )}
        </ScrollScene>
      </UseCanvas>
    </>
  );
}

export default Canvas