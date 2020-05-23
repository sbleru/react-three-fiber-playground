/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import * as THREE from 'three'
import React, { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame, extend, ReactThreeFiber } from 'react-three-fiber'
import niceColors from 'nice-color-palettes'
import { Effects } from './Effects'
import { InstancedMesh } from 'three/src/objects/InstancedMesh'
import { InstancedBufferAttribute } from 'three/src/core/InstancedBufferAttribute'

extend({ InstancedMesh })

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      instancedMesh: ReactThreeFiber.Node<InstancedMesh & {
        onPointerMove: any
        onPointerOut: any
      }, typeof InstancedMesh>
      instancedBufferAttribute: ReactThreeFiber.Node<InstancedBufferAttribute, typeof InstancedBufferAttribute>
    }
  }
}

const tempObject = new THREE.Object3D()
const tempColor = new THREE.Color()
const colors = new Array(1000).fill(undefined).map(() => niceColors[17][Math.floor(Math.random() * 5)])

const Boxes = () => {
  const [hovered, set] = useState()
  const colorArray = useMemo(() => Float32Array.from(new Array(1000).fill(undefined).flatMap((_, i) => tempColor.set(colors[i]).toArray())), [])

  const ref = useRef<any>()
  const previous = useRef<any>()
  useEffect(() => void (previous.current = hovered), [hovered])

  useFrame(state => {
    const time = state.clock.getElapsedTime()
    ref.current.rotation.x = Math.sin(time / 4)
    ref.current.rotation.y = Math.sin(time / 2)
    let i = 0
    for (let x = 0; x < 10; x++)
      for (let y = 0; y < 10; y++)
        for (let z = 0; z < 10; z++) {
          const id = i++
          tempObject.position.set(5 - x, 5 - y, 5 - z)
          tempObject.rotation.y = Math.sin(x / 4 + time) + Math.sin(y / 4 + time) + Math.sin(z / 4 + time)
          tempObject.rotation.z = tempObject.rotation.y * 2
          if (hovered !== previous.current) {
            tempColor.set(id === hovered ? 'white' : colors[id]).toArray(colorArray, id * 3)
            ref.current.geometry.attributes.color.needsUpdate = true
          }
          const scale = id === hovered ? 2 : 1
          tempObject.scale.set(scale, scale, scale)
          tempObject.updateMatrix()
          ref.current.setMatrixAt(id, tempObject.matrix)
        }
    ref.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={ref} args={[null as any, null as any, 1000]} onPointerMove={(e: any) => set(e.instanceId)} onPointerOut={(e: any) => set(undefined)}>
      <boxBufferGeometry attach="geometry" args={[0.7, 0.7, 0.7]}>
        <instancedBufferAttribute attachObject={['attributes', 'color']} args={[colorArray, 3]} />
      </boxBufferGeometry>
      <meshPhongMaterial attach="material" vertexColors={THREE.VertexColors} />
    </instancedMesh>
  )
}

const theme = css`
  width: 100vw;
  height: 100vh;
  background-color: #272727;
`;

export const InteractiveCubesOrtho = () => {
  return(
    <div css={theme}>
      <Canvas
        gl={new THREE.WebGLRenderer({alpha: false})}
        camera={{ position: [0, 0, 15], near: 5, far: 20 }}
        onCreated={({ gl }) => gl.setClearColor('lightpink')}
      >
        <ambientLight />
        <pointLight position={[150, 150, 150]} intensity={0.55} />
        <Boxes />
        <Effects />
      </Canvas>
    </div>
  )
}
