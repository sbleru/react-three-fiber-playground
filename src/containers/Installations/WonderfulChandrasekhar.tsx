/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import * as THREE from 'three'
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader'
import React, { Suspense, useState, useEffect, useMemo } from 'react'
import { Canvas, useLoader, useThree } from 'react-three-fiber'
import { useTransition, useSpring, a } from '@react-spring/three'
// import './styles.css'

const colors = ['#21242d', '#ea5158', '#0d4663', '#ffbcb7', '#2d4a3e', '#8bd8d2']
const urls = ['night', 'city', 'morning', 'tubes', 'woods', 'beach'].map(
  name => `https://raw.githubusercontent.com/drcmda/react-three-fiber/master/examples/src/resources/images/svg/${name}.svg`
)

const Shape = ({ shape, rotation, position, color, opacity, index }: any) => {
  if (!position) return null
  return (
    <a.mesh rotation={rotation} position={position.to((x: any, y: any, z: any) => [x, y, z + index * 50])}>
      <a.meshPhongMaterial attach="material" color={color} opacity={opacity} side={THREE.DoubleSide} depthWrite={false} transparent />
      <shapeBufferGeometry attach="geometry" args={[shape]} />
    </a.mesh>
  )
}

const Scene = () => {
  const { viewport } = useThree()
  const [page, setPage] = useState(0)
  useEffect(() => void setInterval(() => setPage(i => (i + 1) % urls.length), 3500), [])

  const data = useLoader(SVGLoader, urls[page])
  const shapes = useMemo(
    () => (data.paths).flatMap(
      (g, index) => g.toShapes(true).map(
        (shape) => ({ shape, color: (g as any).color, index })
      )
    ), [data]
  )
  const [{ color }] = useSpring({ color: colors[page] }, [page])
  const [transition] = useTransition(
    shapes,
    {
      keys: (item: { shape: { uuid: any } }) => item.shape.uuid,
      from: { rotation: [0.0, -Math.PI / 4, 0], position: [0, 50, 200], opacity: 0 },
      enter: { rotation: [0, 0, 0], position: [0, 0, 0], opacity: 1 },
      leave: { rotation: [0, 0.25, 0], position: [0, -50, 10], opacity: 0 },
      trail: 5
    },
    [page]
  )

  return (
    <React.Fragment>
      <mesh scale={[viewport.width * 2, viewport.height * 2, 1]}>
        <planeGeometry attach="geometry" args={[1, 1]} />
        <a.meshPhongMaterial attach="material" color={color} depthTest={false} />
      </mesh>
      <group position={[viewport.width / 3, viewport.height / 4, page]} rotation={[0, 0, Math.PI]}>
        {transition((props, item, t, i) => (
          <Shape {...item} {...props} />
        ))}
      </group>
    </React.Fragment>
  )
}

export const WonderfulChandrasekhar = () => {
  return (
    <div css={theme}>
      <Canvas
        camera={{
          fov: 80,
          position: [2000, 300, 2000],
          rotation: [0, Math.PI / 10, 0],
          near: 0.1,
          far: 20000
        }}>
        <ambientLight intensity={0.5} />
        <spotLight intensity={0.5} position={[300, 300, 4000]} />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  )
}

const theme = css`
  width: 100%;
  height: 100vh;
  background-color: #272727;
`;