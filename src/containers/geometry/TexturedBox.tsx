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
      <meshBasicMaterial attachArray="material" color="black" />
      <meshBasicMaterial attachArray="material" color="black" />
      <meshBasicMaterial attachArray="material" color="black" />
      <meshBasicMaterial attachArray="material" color="black" />
      <meshBasicMaterial attachArray="material" color="black" />
      <meshBasicMaterial attachArray="material" color="black" />
    </mesh>
  )
}

const TexturedBox = () => {
  return (
    <Canvas camera={{ position: [0, 0, 250] }} style={{height: '40px', width: '40px'}}>
      <Suspense fallback={null}>
        <Cube />
      </Suspense>
    </Canvas>
  )
}

export { TexturedBox };