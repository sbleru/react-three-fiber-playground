/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { ROUTES } from 'constants/Route';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

type Props = {
  handleDrawerOpen: () => void
}
const Header: React.FC<Props> = (props) => {
  const location = useLocation();

  const route = ROUTES.find((route) => {
    if (location.pathname === '/') {
      return route.gnavi && location.pathname === route.path;
    } else {
      return route.gnavi && route.path !== '/' && location.pathname.indexOf(route.path) > -1;
    }
  });

  const classes = styles()

  return (
    <AppBar position="sticky" color="transparent">
      <Toolbar variant="dense">
        <IconButton edge="start" css={classes.root} color="inherit" aria-label="menu">
          <MenuIcon onClick={props.handleDrawerOpen} />
        </IconButton>
        <Typography variant="h6" color="inherit">
          <h2 css={classes.title}>{route ? route.title : ''}</h2>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

const styles = () => ({
  root: css`
    display: flex;
  `,
  title: css`
    color: #000;
    font-size: 1.3rem;
    font-family: 'Noto Sans JP', sans-serif;
  `,
})

export default Header;
