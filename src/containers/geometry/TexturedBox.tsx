import * as THREE from 'three'
import React, { useRef, Suspense } from 'react'
import { Canvas, useFrame, useLoader } from 'react-three-fiber'
// import textureUrl from 'https://threejs.org/examples/textures/crate.gif'

function Cube() {
  const mesh = useRef<any>()
  const texture = useLoader(THREE.TextureLoader, 'https://threejs.org/examples/textures/crate.gif')
  useFrame(() => {
    mesh.current.rotation.x += 0.005;
    mesh.current.rotation.y += 0.01;
  })
  return (
    <mesh ref={mesh}>
      <boxBufferGeometry attach="geometry" args={[200, 200, 200]} />
      {/* <meshBasicMaterial attach="material" map={texture} depthTest={false} /> */}
      <meshBasicMaterial attachArray="material" color="#A2CCB6" />
      <meshBasicMaterial attachArray="material" color="#FCEEB5" />
      <meshBasicMaterial attachArray="material" color="#EE786E" />
      <meshBasicMaterial attachArray="material" color="#E0FEFF" />
      <meshBasicMaterial attachArray="material" color="lightpink" />
      <meshBasicMaterial attachArray="material" color="lightblue" />
    </mesh>
  )
}

const TexturedBox = () => {
  return (
    <Canvas camera={{ position: [0, 0, 400] }}>
      <Suspense fallback={null}>
        <Cube />
      </Suspense>
    </Canvas>
  )
}

export { TexturedBox };