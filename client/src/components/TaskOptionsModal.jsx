// import {React, useState} from 'react';
import React, { useState, useEffect, useRef } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';

var minutes = [15, 30, 45, 60];
var hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
var units = ['minutes', 'hours', 'days'];

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

  var renderIncremenets = (value) => {
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

  return (
    <Modal open={props.open}>
      <Stack component="form" noValidate spacing={3}>
        <Button variant="contained" onClick={() => {
          console.log('Edit Button Clicked!')
        }}>
          Edit
        </Button>
        <TextField
          id="date"
          label="Date"
          type="date"
          sx={{width: '50%'}}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <InputLabel id="duration-select-label">Duration</InputLabel>
        <Select
          labelId="duration-select-label"
          id="duration-select-increment"
          value={duration.increment}
          label="Duration"
          onChange={handleIncrementChange}
        >
          { renderIncrements(duration.unit) }
        </Select>
        <Select
          id="duration-select-units"
          value={duration.unit}
          label="Duration"
          onChange={handleUnitChange}
        ></Select>
        { units.map((unit) => {
          return (<MenuItem value={unit}>{unit}</MenuItem>);
        }) }
        <input>Duration</input>
      </Stack>
    </Modal>
  )
};

export default TaskOptionsModal;