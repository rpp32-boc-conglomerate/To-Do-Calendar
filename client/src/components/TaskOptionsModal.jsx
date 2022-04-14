// import {React, useState} from 'react';
import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import { Button, TextField, Modal, Stack, InputLabel, Select, MenuItem, Container } from '@mui/material';

import { format } from 'date-fns';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  // border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};

var TaskOptionsModal = (props) => {
  const [duration, setDuration] = useState({
    increment: '',
    unit: ''
  });

  var handleIncrementChange = (event) => {
    setDuration({increment: event.target.value});
  }

  var handleUnitChange = (event) => {
    setDuration({unit: event.target.value});
    renderIncrements(duration.unit);
  }

  var renderIncrements = (value) => {
    if (value === 'minutes') {
      return minutes.map((minute) => {
        return (<MenuItem value={minute}>{minute}</MenuItem>);
      })
    } else if (value === 'hours') {
      return hours.map((hour) => {
        return (<MenuItem value={hour}>{hour}</MenuItem>);
      })
    } else if (value === 'days') {
      return days.map((day) => {
        return (<MenuItem value={day}>{day}</MenuItem>);
      })
    }
  }

//   <div style={{display: 'flex', flexDirection: 'row', gap: '5%'}}>
//   <ContentEditable variant="body1" contentEditable={isEditing}
//   onChange={(e)=>handleContentEditable(e, 'title')} html={task.title}
//   />
//   {isMobile && addToCal}
// </div>
// <ContentEditable variant="body1" contentEditable={isEditing}
// onChange={(e)=>handleContentEditable(e, 'description')} html={task.description}
// />
// <CardActions>
//   <ExpandMoreIcon/>
//   <Button variant="contained" size="small" onClick={() => openModal(task)}>Edit</Button>
//   <Button variant="contained" size="small" onClick={deleteTask}>Delete</Button>
// </CardActions>

  console.log(props.handleOpen);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Modal open={props.handleOpen} onClose={props.handleClose}>
        <Container sx={style}>
          {/* <ContentEditable variant="body1" contentEditable={} */}
          <DesktopDateTimePicker renderInput={(props) => <TextField {...props} />} label="Start Time"
            value={props.task.start || startTime} onChange={(newValue) => {setStartTime(newValue)}} />
          <DesktopDateTimePicker renderInput={(props) => <TextField {...props} />} label="End Time"
            value={props.task.end || endTime} onChange={(newValue) => {setEndTime(newValue)}}/>
        </Container>
      </Modal>
    </LocalizationProvider>
  );
};

export default TaskOptionsModal;

