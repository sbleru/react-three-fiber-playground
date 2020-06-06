import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { ROUTES } from 'constants/Route';


const Sidebar: React.FC = (props) => {
  const { ...rest } = props;
  const location = useLocation();

  return (
    <Wrapper {...rest}>
      <TitleArea>
        <Title>THREE</Title>
      </TitleArea>
      <Navi>
        <List>
          {ROUTES.filter((route) => route.gnavi).map((route) => {
            let active = 0;
            if (location.pathname === '/') {
              active = route.path === '/' ? 1 : 0;
            } else {
              active = route.path !== '/' && location.pathname.indexOf(route.path) > -1 ? 1 : 0;
            }
            return (
              <Item key={route.path}>
                <SidebarLink to={route.path} active={active}>
                  {route.title}
                </SidebarLink>
              </Item>
            );
          })}
        </List>
      </Navi>
    </Wrapper>
  );
};

interface SidebarLinkIF {
  active: number;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 100vh;
  background-color: #143d54;
  box-sizing: border-box;
`;

const TitleArea = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 74px;
  padding: 22px 20px;
  box-sizing: border-box;
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 18px;
    width: calc(100% - 36px);
    height: 1px;
    background-color: #5a608e;
  }
`;

const Title = styled.h1`
  color: #ffffff;
  font-size: 2.4rem;
  font-weight: bold;
`;

const Navi = styled.nav`
  height: 100%;
  margin-top: 40px;
`;

const List = styled.ul``;

const Item = styled.li``;

const SidebarLink = styled(Link)`
  display: inline-block;
  width: 100%;
  padding: 20px;
  font-size: 0.8rem;
  font-weight: bold;
  background-color: ${(props: SidebarLinkIF) => (props.active === 0 ? 'inherit' : '#00253a')};
  color: ${(props: SidebarLinkIF) => (props.active === 0 ? '#8a8a8a' : '#ffffff')};
  cursor: ${(props: SidebarLinkIF) => (props.active === 0 ? 'pointer' : 'default')};
  text-decoration: none;
  box-sizing: border-box;
  &:hover {
    color: #ffffff;
    background-color: #00253a;
  }
`;

export default Sidebar;
