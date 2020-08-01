/** @jsx jsx */
import { css, jsx, Global } from '@emotion/core';
import emotionReset from 'emotion-reset';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ROUTES } from 'constants/Route';
import Sidebar from 'components/organisms/Sidebar';
import styled from 'styled-components';
import Header from 'components/organisms/Header';

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
      <Header />
      <Wrapper>
        <Sidebar />
        <Container>
          <Main>
            <Switch>
              {ROUTES.map((route) => (
                <Route key={route.path} exact={route.exact} path={route.path} component={route.component} />
              ))}
            </Switch>
          </Main>
        </Container>
      </Wrapper>
    </BrowserRouter>
    {/* <Work /> */}
  </div>
);

export default App;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  width: calc(100% - 200px);
`;

const Main = styled.main`
  width: 100%;
  height: calc(100% - 40px);
  box-sizing: border-box;
`;