/** @jsx jsx */
import { css, jsx, Global } from '@emotion/core';
import * as React from 'react';
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

const App: React.FC = () => {

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  return (
    <div>
      <Global styles={globalStyles} />
      <BrowserRouter>
        <Header handleDrawerOpen={handleDrawerOpen} />
        <Wrapper>
          <Sidebar open={open} handleDrawerClose={handleDrawerClose} />
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
  )
};

export default App;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  width: 100%;
`;

const Main = styled.main`
  width: 100%;
  height: calc(100% - 40px);
  box-sizing: border-box;
`;