import * as React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { ROUTES } from 'constants/Route';

const Header: React.FC = () => {
  const location = useLocation();

  const route = ROUTES.find((route) => {
    if (location.pathname === '/') {
      return route.gnavi && location.pathname === route.path;
    } else {
      return route.gnavi && route.path !== '/' && location.pathname.indexOf(route.path) > -1;
    }
  });
  return (
    <Wrapper>
      <Title>{route ? route.title : ''}</Title>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 13px 20px 12px;
  background-color: #f5f6fa;
  border-bottom: 1px solid #dfe3f2;
  box-sizing: border-box;
`;

const Title = styled.h2`
  color: #222753;
  font-size: 1.3rem;
  font-family: 'Noto Sans JP', sans-serif;
`;

export default Header;
