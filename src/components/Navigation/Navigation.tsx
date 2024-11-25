import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { routes } from '@utils/constants/routes';
import { useNavigate } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import { useIsMobile } from '@utils/hooks/useIsMobile';

export const Navigation = () => {
  const [drawerOpen, setDrawerOpen] = React.useState<boolean>(false);
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const handleMenuClick = () => {
    setDrawerOpen(true);
  };

  const handleClose = () => {
    setDrawerOpen(false);
  };

  const handleHomeClick = () => {
    setDrawerOpen(false);
    navigate(routes.home);
  };

  return (
    <AppBar position='fixed'>
      <Toolbar>
        <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='menu'
          sx={{
            mr: 2,
            transition: 'transform 0.3s',
            transform: drawerOpen ? 'rotate(90deg)' : 'rotate(0deg)',
          }}
          onClick={handleMenuClick}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          open={drawerOpen}
          onClose={handleClose}
          anchor={isMobile ? 'bottom' : 'left'}
          sx={isMobile ? { borderRadius: 10 } : undefined}
        >
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Typography
              variant='h6'
              sx={{
                flexGrow: 1,
                textAlign: 'center',
                color: 'common.black',
              }}
            >
              Menu
            </Typography>
            {!isMobile && (
              <IconButton
                size='large'
                edge='end'
                color='inherit'
                aria-label='close'
                onClick={handleClose}
              >
                <CloseIcon />
              </IconButton>
            )}
          </Toolbar>
          <List>
            <ListItem>
              <ListItemButton onClick={handleHomeClick}>Home</ListItemButton>
            </ListItem>
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};
