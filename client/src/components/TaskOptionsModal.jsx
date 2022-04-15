// import {React, useState} from 'react';
import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import { Button, TextField, Modal, Stack, InputLabel, Select, MenuItem, Container, makeStyles } from '@material-ui/core';

import { format } from 'date-fns';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker';

const useStyles = makeStyles({
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
    width: '90%',
    margin: '1rem'
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    padding: '0.5rem 0 0 0'
  },
  done: {
    margin: '0.5rem 0.5rem 0.5rem 0rem'
  },
  delete: {
    backgroundColor: 'red',
    color: 'white',
    margin: '0.5rem'
  }
});

// display: flex; justify-content: flex-end

var TaskOptionsModal = (props) => {
  const classes = useStyles();

  console.log(props);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Modal open={props.isOpen} onClose={() => props.handleModalOpen(false)}>
        <Container className={classes.modal}>
          <TextField label="Title" className={classes.input} defaultValue={props.task.title} />
          <TextField multiline label="Description" className={classes.input} defaultValue={props.task.description} />
          <DesktopDateTimePicker renderInput={(props) => <TextField className={classes.input} {...props} />} label="Start Time"
            value={props.task.start || startTime} onChange={(newValue) => {setStartTime(newValue)}} />
          <DesktopDateTimePicker renderInput={(props) => <TextField className={classes.input} {...props} />} label="End Time"
            value={props.task.end || endTime} onChange={(newValue) => {setEndTime(newValue)}}/>
          <Container className={classes.container}>
            <Button className={classes.done} variant="contained" size="medium">Done</Button>
            <Button className={classes.delete} variant="contained" size="medium">Delete</Button>
          </Container>
        </Container>
      </Modal>
    </LocalizationProvider>
  );
};

export default TaskOptionsModal;

