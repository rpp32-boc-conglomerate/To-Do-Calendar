import React, { useState, useEffect, useRef } from 'react';
import { CssBaseline } from '@material-ui/core';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import img from '../../dist/images/d1.png';

var pages = [];
const settings = ['Profile', 'Account', 'Logout'];

const TopBar = ({isMobile, onCalendar, setOnCalendar}) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const isLogin = false;
  if (!isMobile) {
    pages = []
  } else if (isMobile && onCalendar) {
    pages = ['To Do List']
  } else {
    pages = ['Calendar']
  }

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handlePage = (event) => {
    setOnCalendar(!onCalendar);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
      <CssBaseline />
      <AppBar style={{ background: 'white', marginBottom:'20px' }} position='static'>
        <Toolbar >
          <Box>
            {isMobile && <IconButton
              name={pages[0]}
              onClick={(e) => {handlePage(e)}}
              >
                {pages[0] === 'Calendar' ?
                <CalendarMonthIcon style={{fontSize: '50px'}}/> :
                <AssignmentTurnedInIcon style={{fontSize: '50px'}}/>}
              </IconButton>}
          </Box>
          <Box style={{margin: '0 auto', display: "flex"}}>
            <Avatar variant="square" src={img} style={{width:'60px', height:'50px'}}/>
          </Box>
         <Box sx={{ flexGrow: 0 }}>
            {isLogin ?
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Yanlin" src="/" />
              </IconButton>
            </Tooltip>
            :
            <Box>
              <Button  style={{ background: '#1d71e4', color:'white', borderRadius:'5px' }}>
                Sign in
              </Button >
            </Box>
            }
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TopBar;
