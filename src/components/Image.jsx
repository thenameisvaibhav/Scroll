import { ScrollScene, UseCanvas } from '@14islands/r3f-scroll-rig'
import React, { useRef } from 'react'
import WebglImage from './WebglImage';

const Image = ({className,src, ...props}) => {
  const img = useRef(null);
  return (
    <>
      <img
        ref={img}
        className={`invisible ${className || ""}`}
        src={src}
        alt=""
      />

      <UseCanvas>
        <ScrollScene track={img}>
          {({...props }) => (
            <WebglImage {...props} src={src} />
          )}
        </ScrollScene>
      </UseCanvas>
    </>
  );
};

export default Image