/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { ROUTES } from 'constants/Route';
import { Drawer, IconButton } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

type Props = {
  open: boolean
  handleDrawerClose: () => void
}
const Sidebar: React.FC<Props> = (props) => {

  const location = useLocation();
  const history = useHistory()
  const classes = styles({ open: props.open })

  const handleChangeRouter = (path: string) => {
    history.push(path)
    props.handleDrawerClose()
  }

  return (
    <Drawer
      css={classes.drawer}
      variant="temporary"
      anchor="bottom"
      open={props.open}
      ModalProps={{ onBackdropClick: props.handleDrawerClose }}
    >
      <nav css={classes.drawerNav}>
        <ul>
          {ROUTES.filter((route) => route.gnavi).map((route) => {
            let active = 0;
            if (location.pathname === '/') {
              active = route.path === '/' ? 1 : 0;
            } else {
              active = route.path !== '/' && location.pathname.indexOf(route.path) > -1 ? 1 : 0;
            }
            const routeClasses = routeStyles({ active })
            return (
              <li key={route.path}>
                <p onClick={() => handleChangeRouter(route.path)} css={routeClasses.item}>
                  {route.title}
                </p>
              </li>
            );
          })}
        </ul>
      </nav>
      <div css={classes.drawerHeader}>
        <IconButton onClick={props.handleDrawerClose}>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </Drawer>
  );
};

type StyleProps = {
  open: boolean
}
const styles = (props: StyleProps) => ({
  drawer: css`
    width: ${props.open ? '100px' : '0px'};
    flex-shrink: 0;
  `,
  drawerHeader: css`
    display: flex;
    align-items: center;
    padding: 10px;
    justify-content: flex-end;
  `,
  drawerNav: css`
    height: 100%;
    margin-top: 40px;
  `,
})

type RouteStyleProps = {
  active: number
}
const routeStyles = (props: RouteStyleProps) => ({
  item: css`
    display: inline-block;
    width: 100%;
    padding: 20px;
    font-size: 0.8rem;
    font-weight: bold;
    background-color: ${props.active === 0 ? 'inherit' : '#00253a'};
    color: ${props.active === 0 ? '#8a8a8a' : '#ffffff'};
    cursor: ${props.active === 0 ? 'pointer' : 'default'};
    text-decoration: none;
    box-sizing: border-box;
    &:hover {
      color: #ffffff;
      background-color: #00253a;
    }
  `,
})

export default Sidebar;
