/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { ROUTES } from 'constants/Route';
import { Drawer, IconButton } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import sample from 'resources/InteractiveCubesOrtho.png'

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
        <div css={classes.listRoot}>
          {ROUTES.filter((route) => route.gnavi).map((route) => {
            let active = 0;
            if (location.pathname === '/') {
              active = route.path === '/' ? 1 : 0;
            } else {
              active = route.path !== '/' && location.pathname.indexOf(route.path) > -1 ? 1 : 0;
            }
            return (
              <div key={route.path} css={classes.listItem(active)}>
                <img src={sample} alt={''} onClick={() => handleChangeRouter(route.path)} />
              </div>
            );
          })}
        </div>
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
    position: fixed;
    bottom: 0px;
    width: 100%;
    align-items: center;
    padding: 10px;
    justify-content: flex-end;
  `,
  drawerNav: css`
    height: 400px;
    margin-top: 40px;
  `,
  listRoot: css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 90%;
    margin: 0 auto;
  `,
  listItem: (active: number) => css`
    display: inline-block;
    width: 31%;
    margin-bottom: 40px;
    cursor: ${active === 0 ? 'pointer' : 'default'};
    img{
      width: 100%;
      border-radius: 12px;
    }
  `,
})

export default Sidebar;
