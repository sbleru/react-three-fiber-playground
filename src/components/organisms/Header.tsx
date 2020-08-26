/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import * as React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { ROUTES } from 'constants/Route';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { TexturedBox } from 'containers/geometry/TexturedBox';

type Props = {
  handleDrawerOpen: () => void
}
const Header: React.FC<Props> = (props) => {
  const location = useLocation();
  const history = useHistory();

  const route = ROUTES.find((route) => {
    if (location.pathname === '/') {
      return route.gnavi && location.pathname === route.path;
    } else {
      return route.gnavi && route.path !== '/' && location.pathname.indexOf(route.path) > -1;
    }
  });

  const classes = styles()

  return (
    <AppBar position="fixed" color="transparent" style={{top: 'auto', bottom: 0}}>
      <Toolbar variant="dense">
      <div css={classes.root}>
        <div css={classes.textureBox} onClick = {() => history.push('/')}>
          <TexturedBox />
        </div>
        <p css={classes.title}>{route ? route.title : ''}</p>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon css={classes.menuIcon} style={{color: 'primary'}} onClick={props.handleDrawerOpen} />
        </IconButton>
      </div>
      </Toolbar>
    </AppBar>
  );
};

const styles = () => ({
  appBar: css`
    position: fixed;
    top: auto;
    bottom: 0;
  `,
  textureBox: css`
    cursor: pointer;
  `,
  root: css`
    display: flex;
    align-items: center;
    flex-grow: 1;
  `,
  menuIcon: css`
    position: absolute;
  `,
  title: css`
    color: #000;
    font-size: 1.3rem;
    font-family: 'Noto Sans JP', sans-serif;
    padding: 12px;
    flex-grow: 1;
  `,
})

export default Header;
