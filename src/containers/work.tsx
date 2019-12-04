/** @jsx jsx */
import { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { css, jsx } from '@emotion/core';

const theme = css`
    width: 100vw;
    height: 100vh;
`;

const Thing = () => {
    return <mesh></mesh>;
};

export const Work = () => (
    <div css={theme}>
        <Canvas>
            <Thing />
        </Canvas>
    </div>
);