import React, { useState, useEffect } from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import TextField from '@mui/material/TextField';
import emailSchema from './EmailValidation.jsx';
import AddBoxIcon from '@mui/icons-material/AddBox';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));



export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [formErr, setFormErr] = useState('');
  const [state, setState] = useState({'email': ''});
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleChange = (e) => {
    setFormErr('');
    const { name, value } = e.target;
      setState((prevState) => ({
        ...prevState,
        [name]: value,
      }))
  };
  const validation = async () => {
    emailSchema.validate(formData).catch((err) => {
      setFormErr(err.errors[0].split(' ')[0]);
      setErrMsg(err.errors[0])
    });
    let isValid = await emailSchema.isValid(formData);
    return isValid;
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Share
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >

      <MenuItem onClick={handleClose} disableRipple>
      <Divider sx={{ my: 0.5 }} />
        <TextField
          name='email'
          error={formErr === 'email' ? true : false}
          placeholder='Enter email address'
          label="Email"
          variant="outlined"
          value={state["email"]}
          require = 'true'
          helperText={formErr === 'email' ? errMsg : ''}
          fullWidth
          // className={classes.fieldGap}
          onChange={(e)=>(handleChange(e))}
        />
        <IconButton aria-label="add">
        <AddBoxIcon />
        </IconButton>
      </MenuItem>
      <Divider sx={{ my: 0.5 }} />
      <MenuItem onClick={handleClose} disableRipple>
        List of Shared users
      </MenuItem>
      <MenuItem onClick={handleClose} disableRipple>
        example@example.com    - button here
      </MenuItem>
      </StyledMenu>
    </div>
  );
}
