/** @jsx jsx */
import * as THREE from 'three';
import * as CANNON from 'cannon';
import { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { css, jsx } from '@emotion/core';
import React, { useEffect, useState } from 'react';
import { useCannon, Provider } from 'hooks/useCannon';

const theme = css`
  width: 100vw;
  height: 100vh;
  background-color: #272727;
`;

// const WalkingSphere = () => {
//   const ref: any = useRef()

//   useFrame(({clock}) => {
//     ref.current.position.x += Math.cos(clock.getElapsedTime()) * 3
//     ref.current.position.y += Math.cos(clock.getElapsedTime()) * 3
//     ref.current.position.z += Math.cos(clock.getElapsedTime()) * 3
//     ref.current.rotation.y += 0.01;
//   })

//   return (
//     <mesh ref={ref}>
//       <sphereGeometry attach='geometry' args={[300, 30, 30]} />
//       <meshStandardMaterial attach='material' color='#FF0000'/>
//     </mesh>
//   )
// };

// const Box = () => {
//   const ref: any = useRef();

//   useFrame(() => {
//     ref.current.rotation.y += 0.01;
//   });

//   return (
//     <mesh ref={ref}>
//       <boxGeometry attach='geometry' args={[400, 400, 400]} />
//       <meshNormalMaterial attach='material' />
//     </mesh>
//   );
// }

// export const Work = () => (
//   <div css={theme}>
//     <Canvas camera={{ position: [0, 0, 1000] }}>
//       <pointLight
//         color={`#FFFFFF` as any}
//         intensity={1}
//         position={[0, 2000, 1000]}
//       />
//       <WalkingSphere />
//       {/* <Box /> */}
//     </Canvas>
//   </div>
// );

const Plane = (props: any) => {
  const { position } = props
  const ref = useCannon({ mass: 0 }, (body: any) => {
      body.addShape(new CANNON.Plane());
      body.position.set(...position);
  });
  return (
      <mesh ref={ref} receiveShadow>
          <planeBufferGeometry attach='geometry' args={[1000, 1000]} />
          <meshPhongMaterial attach='material' color='#272727' />
      </mesh>
  );
};

const Box = (props: any) => {
  const { position, args } = props
  const ref = useCannon({ mass: 100000 }, (body: any) => {
      body.addShape(new CANNON.Box(new CANNON.Vec3(1, 1, 1)));
      body.position.set(...position);
  });
  return (
      <mesh ref={ref} castShadow receiveShadow>
          <boxGeometry attach='geometry' args={args} />
          <meshStandardMaterial attach='material' />
      </mesh>
  );
};

export const Work = () => {



  return (
      <div css={theme}>
        <Canvas camera={{ position: [0, 5, 15] }}>
          <ambientLight intensity={0.6} />
          <spotLight
            intensity={0.6}
            position={[30, 30, 50]}
            angle={0.2}
            penumbra={1}
            castShadow
          />
          <Provider>
            <Plane position={[0, 0, -10]} />
            <Box position={[1, 0, 1]} args={[2, 2, 2]} />
            <Box position={[1, 0, 1]} args={[1, 1, 5]} />
            <Box position={[2, 1, 5]} args={[3, 3, 3]} />
            <Box position={[0, 0, 6]} args={[2, 4, 2]} />
            <Box position={[-1, 1, 8]} args={[2, 3, 2]} />
            <Box position={[0, 2, 3]} args={[5, 5, 1]} />
            <Box position={[2, -1, 13]} args={[1, 1, 10]} />
          </Provider>
        </Canvas>
      </div>
  );
};