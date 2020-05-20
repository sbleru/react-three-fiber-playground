/** @jsx jsx */
import { css, jsx, Global } from '@emotion/core';
import emotionReset from 'emotion-reset';
import { Work } from './containers/work';
import { HelloText } from './containers/gravity/TextWork01';

const globalStyles = css`
    ${emotionReset}
    *, *::after, *::before {
        box-sizing: border-box;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-smoothing: antialiased;
    }
`;

const App = () => (
  <div>
    <Global styles={globalStyles} />
    <HelloText />
    {/* <Work /> */}
  </div>
);

export default App;