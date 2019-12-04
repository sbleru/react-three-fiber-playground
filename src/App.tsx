/** @jsx jsx */
import React, { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber'
import { css, jsx, Global } from '@emotion/core';
import emotionReset from "emotion-reset";

const globalStyles = css`
    ${emotionReset}
    *, *::after, *::before {
        box-sizing: border-box;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-smoothing: antialiased;
    }
`;

const theme = css`
    width: 100vw;
    height: 100vh;
    background-color: #000;
`;

const App: React.FC = () => {
  return (
    <div>
      <Global styles={globalStyles} />
      <div css={theme}>
        <Canvas>
          <Thing />
        </Canvas>
      </div>
    </div>
  );
}

const Thing = () => {
  const ref: any = useRef()
  useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.01))
  return (
    <mesh
      ref={ref}
      onClick={e => console.log('click')}
      onPointerOver={e => console.log('hover')}
      onPointerOut={e => console.log('unhover')}>
      {/* <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshNormalMaterial attach="material" /> */}
      <planeBufferGeometry attach='geometry' args={[1, 1]} />
      <meshBasicMaterial
          attach='material'
          color='hotpink'
          opacity={0.5}
          transparent
      />
    </mesh>
  )
}

export default App;
