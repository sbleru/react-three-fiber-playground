import * as THREE from 'three'
import React, { useMemo } from 'react'
import { useLoader, useUpdate } from 'react-three-fiber'
import helvetikerRegularFont from 'three/examples/fonts/helvetiker_regular.typeface.json'
import * as CANNON from 'cannon';
import { useCannon } from 'hooks/useCannon';

export default function({ children, vAlign = 'center', hAlign = 'center', size = 1, color = '#000000', ...props }: any) {
  const font = new THREE.FontLoader().parse(helvetikerRegularFont);
  const config = useMemo(
    () => ({ font, size: 40, height: 30, curveSegments: 32, bevelEnabled: true, bevelThickness: 6, bevelSize: 2.5, bevelOffset: 0, bevelSegments: 8 }),
    [font]
  )
  const mesh = useUpdate(
    (self: any) => {
      const size = new THREE.Vector3()
      self.geometry.computeBoundingBox()
      self.geometry.boundingBox.getSize(size)
      self.position.x = hAlign === 'center' ? -size.x / 2 : hAlign === 'right' ? 0 : -size.x
      self.position.y = vAlign === 'center' ? -size.y / 2 : vAlign === 'top' ? 0 : -size.y
    },
    [children]
  )
  return (
    <group {...props} scale={[0.1 * size, 0.1 * size, 0.1]}>
      <mesh ref={mesh}>
        <textGeometry attach="geometry" args={[children, config]} />
        <meshNormalMaterial attach="material" />
      </mesh>
    </group>
  )
}


export const TextWithCannon = ({ children, vAlign = 'center', hAlign = 'center', size = 1, color = '#000000', ...props }: any) => {
  const { position } = props
  const font = new THREE.FontLoader().parse(helvetikerRegularFont);
  const config = useMemo(
    () => ({ font, size: 40, height: 30, curveSegments: 32, bevelEnabled: true, bevelThickness: 6, bevelSize: 2.5, bevelOffset: 0, bevelSegments: 8 }),
    [font]
  )
  const cannon = useCannon({ mass: 100000 }, (body: any) => {
    body.addShape(new CANNON.Box(new CANNON.Vec3(1, 1, 1)));
    body.position.set(...position);
  });
  const mesh = useUpdate(
    (self: any) => {
      const size = new THREE.Vector3()
      self.geometry.computeBoundingBox()
      self.geometry.boundingBox.getSize(size)
      self.position.x = hAlign === 'center' ? -size.x / 2 : hAlign === 'right' ? 0 : -size.x
      self.position.y = vAlign === 'center' ? -size.y / 2 : vAlign === 'top' ? 0 : -size.y
    },
    [children]
  )
  return (
    <group {...props} scale={[0.1 * size, 0.1 * size, 0.1]}>
      <mesh ref={cannon}>
        <mesh ref={mesh}>
          <textGeometry attach="geometry" args={[children, config]} />
          <meshNormalMaterial attach="material" />
        </mesh>
      </mesh>
    </group>
  )
}