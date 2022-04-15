import React, { useState, useEffect } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

export default function DisplaySharedWithUserItem() {
  const [shares, setShares] = React.useState(['boc@isalmostdone.com', 'nate@conglomerate.com',
  'excitedtobe@free.com']);

  // array of shared emails


  const handleEmailRemove = (email) => () => {
    const currentIndex = shares.indexOf(email);
    const newShares = [...shares];

    newShares.splice(currentIndex, 1);

    setShares(newShares);
  };


  return (
    <div>
      <List dense sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}>
      {shares.map((email) => {
        const labelId = `shared-list-label-${email}`;
        return (
          <ListItem
            key={email}
            secondaryAction={
              <RemoveCircleIcon
                edge="end"
                onClick={handleEmailRemove(email)}

              />
            }
            disablePadding
          >
          <ListItemButton dense>
            <ListItemText id={labelId} primary={`${email}`} />
          </ListItemButton>
          </ListItem>
        );
      })}
    </List>
    </div>
  );
}
