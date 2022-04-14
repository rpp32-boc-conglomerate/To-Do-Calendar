// import {React, useState} from 'react';
import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import { Button, TextField, Modal, Stack, InputLabel, Select, MenuItem, Container, makeStyles } from '@material-ui/core';

import { format } from 'date-fns';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker';

const useStyles = makeStyles(theme => ({
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: 'white',
    boxShadow: 24,
    display: 'inline-block',
    borderRadius: '15px',
    padding: '1rem'
  },
  input: {
    margin: '1rem'
  }
}));

var TaskOptionsModal = (props) => {
  const classes = useStyles();

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Modal open={props.handleOpen} onClose={() => props.handleClose(false)}>
        <Container className={classes.modal}>
          <TextField className={classes.input} />
          <DesktopDateTimePicker renderInput={(props) => <TextField className={classes.input} {...props} />} label="Start Time"
            value={props.task.start || startTime} onChange={(newValue) => {setStartTime(newValue)}} />
          <DesktopDateTimePicker renderInput={(props) => <TextField className={classes.input} {...props} />} label="End Time"
            value={props.task.end || endTime} onChange={(newValue) => {setEndTime(newValue)}}/>
        </Container>
      </Modal>
    </LocalizationProvider>
  );
};

export default TaskOptionsModal;

