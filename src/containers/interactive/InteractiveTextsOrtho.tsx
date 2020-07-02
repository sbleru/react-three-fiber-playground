/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import * as THREE from 'three'
import React, { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame, extend, ReactThreeFiber } from 'react-three-fiber'
import niceColors from 'nice-color-palettes'
import { Effects } from './Effects'
import { InstancedMesh } from 'three/src/objects/InstancedMesh'
import { InstancedBufferAttribute } from 'three/src/core/InstancedBufferAttribute'
import helvetikerRegularFont from 'three/examples/fonts/helvetiker_regular.typeface.json'

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
// カラーパレットからカラーコード配列を作成する
const colors = new Array(1000).fill(undefined).map(() => niceColors[3][Math.floor(Math.random() * 5)])

const LETTER_BOX_WIDTH = 4
const FONT_SIZE = 100

type LettersProps = {
  text: string
}
const Letters: React.FC<LettersProps> = (props) => {

  const colorArray = useMemo(() => Float32Array.from(
    new Array(1000).fill(undefined).flatMap((_, i) => tempColor.set(colors[i]).toArray())
    ), [])
  
  const font = new THREE.FontLoader().parse(helvetikerRegularFont);
  const config = useMemo(
    () => ({ font, size: FONT_SIZE, height: 1, curveSegments: 32, bevelEnabled: true, bevelThickness: 6, bevelSize: 2.5, bevelOffset: 0, bevelSegments: 8 }),
    [font]
  )

  const ref = useRef<any>()

  useFrame(state => {
    const time = state.clock.getElapsedTime()
    ref.current.rotation.x = Math.sin(time / 4)
    ref.current.rotation.y = Math.sin(time / 2)
    let i = 0
    for (let x = 0; x < LETTER_BOX_WIDTH; x++)
      for (let y = 0; y < LETTER_BOX_WIDTH; y++)
        for (let z = 0; z < LETTER_BOX_WIDTH; z++) {
          const id = i++
          tempObject.position.set(
            LETTER_BOX_WIDTH/2 * FONT_SIZE - FONT_SIZE * x,
            LETTER_BOX_WIDTH/2 * FONT_SIZE - FONT_SIZE * y,
            LETTER_BOX_WIDTH/2 * FONT_SIZE - FONT_SIZE * z
          )
          // Boxの位置によって回転量を変えるための処理
          tempObject.rotation.y = Math.sin(x / 4 + time) + Math.sin(y / 4 + time) + Math.sin(z / 4 + time)
          tempObject.rotation.z = tempObject.rotation.y * 2
          const scale = 1
          tempObject.scale.set(scale, scale, scale)
          tempObject.updateMatrix()
          ref.current.setMatrixAt(id, tempObject.matrix)
        }
    ref.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={ref} args={[null as any, null as any, Math.pow(LETTER_BOX_WIDTH, 2)]}>
      <textBufferGeometry attach="geometry" args={[props.text, config]}>
        <instancedBufferAttribute attachObject={['attributes', 'color']} args={[colorArray, 3]} />
      </textBufferGeometry>
      {/* <meshNormalMaterial attach="material" /> */}
      {/* なぜかscroll, resizeするとライトがなくなる → header無くしてスクロールできないようにした */}
      <meshPhongMaterial attach="material" vertexColors={THREE.VertexColors} />
    </instancedMesh>
  )
}

const theme = css`
  width: 100%;
  height: 100vh;
  background-color: #272727;
`;

export const InteractiveTextsOrtho: React.FC = () => {

  const [text, setText] = useState<string>('hello,world!'[Math.floor(Math.random()*5)])
  const [openCanvas, setOpenCanvas] = useState<boolean>(true)

  useEffect(() => {
    var el = document.getElementsByTagName("canvas")[0];
    el.addEventListener("touchstart", () => setText('hello,world!'[Math.floor(Math.random()*5)]), false);
  }, [])

  return(
    <div css={theme}>
      {
        openCanvas
          ? <Canvas
              id="canvas"
              gl={new THREE.WebGLRenderer({alpha: false})}
              camera={{ position: [0, 0, 700], near: 5, far: 1400 }}
              onCreated={({ gl }) => gl.setClearColor('skyblue')}
              onClick={() => setText('hello,world!'[Math.floor(Math.random()*5)])}
            >
              <ambientLight />
              <pointLight position={[150, 150, 150]} intensity={0.55} />
              <Letters text={text} />
              <Effects />
            </Canvas>
          : <div>

            </div>
      }
    </div>
  )
}
