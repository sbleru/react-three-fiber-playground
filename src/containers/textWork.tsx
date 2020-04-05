/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import ReactDOM from 'react-dom'
import * as THREE from 'three'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useLoader, useFrame } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Text from 'components/Text'
import { useValueRef } from 'hooks/useValue'

const theme = css`
  width: 100vw;
  height: 100vh;
  background-color: #272727;
`;

function Jumbo() {
  const ref: any = useRef()
  useFrame(({ clock }) => 
    (ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z = Math.sin(clock.getElapsedTime()) * 0.3)
  )
  return (
    <group ref={ref}>
      <Text hAlign="left" position={[0, 4.2, 0]} children="REACT" />
      <Text hAlign="left" position={[0, 0, 0]} children="THREE" />
      <Text hAlign="left" position={[0, -4.2, 0]} children="FIBER" />
      <Text hAlign="left" position={[12, 0, 0]} children="4" size={3} />
      <Text hAlign="left" position={[16.5, -4.2, 0]} children="X" />
    </group>
  )
}

export const HelloText = () => {

  const [cameraPosZ, setCameraPosZ] =useState<number>(15)
  const refCameraPosZ = useValueRef(cameraPosZ)

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCameraPosZ(refCameraPosZ.current + 1)
  //   }, 1000)

  //   return () => {
  //     clearInterval(timer)
  //   }
  // }, [])

  return (
    <div css={theme}>
      <Canvas camera={{ position: [0, 0, 30] }}>
        <ambientLight intensity={2} />
        <pointLight position={[40, 40, 40]} />
        <Suspense fallback={null}>
          <Jumbo />
        </Suspense>
      </Canvas>
    </div>
  )
}

