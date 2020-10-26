/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import ReactDOM from 'react-dom'
import * as THREE from 'three'
import React, { Suspense, useCallback, useEffect, useRef, useState } from 'react'
import { Canvas, useLoader, useFrame } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Text, { TextWithCannon } from 'components/Text'
import { useValueRef } from 'hooks/useValue'
import * as CANNON from 'cannon';
import { useCannon, Provider } from 'hooks/useCannon';
import { Plane } from 'components/Plane'

const theme = css`
  width: 100vw;
  height: 100vh;
  background-color: #272727;
`;

const HelloWorld = () => {

  // const [useGravity, setUseGravity] = useState<boolean>(false)

  const ref: any = useRef()

  return (
    <group ref={ref}>
      <TextWithCannon hAlign="left" position={[0, 4.2, 0]} children="REACT" />
      <Text hAlign="left" position={[0, 0, 0]} children="THREE" />
      <Text hAlign="left" position={[0, -4.2, 0]} children="FIBER" />
      <Text hAlign="left" position={[12, 0, 0]} children="4" size={3} />
      <Text hAlign="left" position={[16.5, -4.2, 0]} children="X" />
    </group>
  )
}

type CanvasWorkProps = {
  textObjects: string[]
}
const CanvasWork: React.FC<CanvasWorkProps> = (props) => {
  return (
    <Canvas camera={{ position: [0, 0, 30] }}>
      <ambientLight intensity={2} />
      <pointLight position={[40, 40, 40]} />
      <Provider>
        <Suspense fallback={null}>
          <Plane position={[0, 0, -300]} />
          {/* <HelloWorld /> */}
          {
            props.textObjects.map((text, i) => {
              const xPos = -20 + 5 * i
              return (
                <TextWithCannon
                  key={i}
                  hAlign="left"
                  position={[xPos, 0, 20]}
                  children={text}
                />
              )
            })
          }
        </Suspense>
      </Provider>
    </Canvas>
  )
}

export const HelloText = () => {

  const [textObjects, setTextObjects] = useState<string[]>([])

  const createTextObjects = useCallback((e: any) => {
    if (e.key === "Escape") {
      setTextObjects([])
    } else {
      setTextObjects(textObjects.concat(e.key))
    }
  }, [textObjects]);

  useEffect(() => {
    document.addEventListener("keydown", createTextObjects)
    return () => {
      document.removeEventListener("keydown", createTextObjects)
    }
  }, [createTextObjects])

  return (
    <div css={theme}>
      <CanvasWork textObjects={textObjects} />
    </div>
  )
}

