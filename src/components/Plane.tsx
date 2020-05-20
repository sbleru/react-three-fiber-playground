import React from 'react';
import * as THREE from 'three';
import * as CANNON from 'cannon';
import { useCannon } from 'hooks/useCannon';

export const Plane = (props: any) => {
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