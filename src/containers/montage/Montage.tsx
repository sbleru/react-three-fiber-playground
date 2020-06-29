/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import * as THREE from 'three'
import React, { useEffect, useMemo } from 'react'
import { Canvas } from 'react-three-fiber'
import helvetikerRegularFont from 'three/examples/fonts/helvetiker_regular.typeface.json'
// import { useSprings, a } from 'react-spring/three' // Can't find module
const  { useSprings, a } = require('react-spring/three')

type Args = [number, number, number]

// const number = 35
const text = "hello,world!"
const number = text.length
const colors = ['#A2CCB6', '#FCEEB5', '#EE786E', '#e0feff', 'lightpink', 'lightblue']
const random = (i: number) => {
  const r = Math.random()
  return {
    position: [100 - Math.random() * 500, 100 - Math.random() * 500, 100 - Math.random() * 500] as Args,
    color: colors[Math.round(Math.random() * (colors.length - 1))],
    scale: [1 + r * 10, 1 + r * 10, 1] as Args,
    rotation: [0, 0, THREE.Math.degToRad(Math.round(Math.random()) * 45)] as Args,
  }
}

const data = (new Array(number)).fill(undefined).map((_, i) => {
  return {
    color: colors[Math.round(Math.random() * (colors.length - 1))],
    args: [0.1 + Math.random() * 9, 0.1 + Math.random() * 9, 10] as Args,
    str: text[i]
  }
})

const Content = () => {

  const font = new THREE.FontLoader().parse(helvetikerRegularFont);
  const textConfig = useMemo(
    () => ({ font, size: 40, height: 50, curveSegments: 32, bevelEnabled: true, bevelThickness: 6, bevelSize: 2.5, bevelOffset: 0, bevelSegments: 8 }),
    [font]
  )

  const [springs, set] = useSprings(number, (i: number) => ({
    from: random(i),
    ...random(i),
    config: { mass: 10, tension: 150, friction: 50 }
  }))

  useEffect(() =>
    void setInterval(() => 
      set(((i: number) => ({ ...random(i), delay: i * 40 })) as any),
      3000
    )
  , [])

  return (
    <React.Fragment>
      {
        data.map((d, index) => {
          return (
            <a.mesh key={index} {...springs[index]} castShadow receiveShadow>
              {/* <boxBufferGeometry attach="geometry" args={d.args} /> */}
              <textGeometry attach="geometry" args={[d.str, textConfig]} />
              <a.meshStandardMaterial attach="material" color={springs[index].color} roughness={0.75} metalness={0.5} />
            </a.mesh>
          )
        })
      }
    </React.Fragment>
  )
}

function Lights() {
  return (
    <group>
      <pointLight intensity={0.3} />
      <ambientLight intensity={2} />
      <spotLight
        castShadow
        intensity={0.2}
        angle={Math.PI / 7}
        position={[150, 150, 250]}
        penumbra={1}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
    </group>
  )
}

const theme = css`
  width: 100%;
  height: 100vh;
  background-color: #272727;
`;

export const Montage = () => {

  return(
    <div css={theme}>
      {/* rotation ref: https://threejs.org/docs/#api/en/math/Euler */}
      <Canvas shadowMap camera={{ position: [200, 0, 200], rotation: [0, .785, 0], fov: 100 }}>
        <Lights />
        <Content />
      </Canvas>
    </div>
  )
}