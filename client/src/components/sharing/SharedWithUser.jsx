import React, { useState, useEffect } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

export default function DisplaySharedWithUserItem(props) {
  const [checked, setChecked] = React.useState([0]);

  // array of shared emails
  var sharedEmailsArray = ['boc@isalmostdone.com', 'nate@conglomerate.com',
    'excitedtobe@free.com'];

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };


  return (
    <div>
      <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {sharedEmailsArray.map((email) => {
        const labelId = `shared-list-label-${email}`;
        return (
          <ListItem
            key={email}
            secondaryAction={
              <Checkbox
                edge="end"
                onChange={handleToggle(email)}
                checked={checked.indexOf(email) !== -1}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            }
            disablePadding
          >
          <ListItemButton role={undefined} onClick={handleToggle(email)} dense>
            <ListItemText id={labelId} primary={`${email}`} />
          </ListItemButton>
          </ListItem>
        );
      })}
    </List>
    </div>
  );
}
