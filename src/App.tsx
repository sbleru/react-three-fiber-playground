/** @jsx jsx */
import { css, jsx, Global } from '@emotion/core';
import emotionReset from 'emotion-reset';
import { Work } from './containers/work';
import { HelloText } from './containers/gravity/TextWork01';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
//import './css/index.css'
import { TexturedBox } from './containers/geometry/TexturedBox'

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
    <BrowserRouter>
      <div>{document.title}</div>
      <Switch>
        <Route path='/1'><TexturedBox /></Route>
        <Route path='/gravity01'><HelloText /></Route>
      </Switch>
      <Link to='/'>ホーム画面へ</Link>
      <Link to='/1'>画像貼り付けた箱へ</Link>
    </BrowserRouter>
    {/* <Work /> */}
  </div>
);

export default App;