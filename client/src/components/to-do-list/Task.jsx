import React, { useState, useEffect } from 'react';
import { useDrag } from 'react-dnd';
import moment from 'moment';
import ContentEditable from 'react-contenteditable';
import { Button, Grid, Card, CardHeader, CardContent, CardActions, Collapse, makeStyles, Typography, Toolbar, TextField,  TextareaAutosize, Stack } from '@material-ui/core';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const TaskOptionsModal = require('../TaskOptionsModal.jsx');
//on hover over editable field -- pen icon or underline
const useStyles = makeStyles({
  grid: {
    display: 'inline-block',
    alignItems: 'center'
  },
  header: {
    fontSize: 12
  },
  textArea: {
    padding: '1rem',
    width: '90%',
    color: 'black'
  },
  card: {
    display: 'flex',
    border: '1rem solid black',
  }
});

//only want task.in_calendar === false
function Task({task, openModal, isMobile, deleteTask, draggedEvent, setDraggedEvent, handleDragStart, myEvents}) {
  // console.log('task in task', task )
  const [userTask, setUserTask] = useState(task);
  const [expanded, setExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [hasDates, setHasDates] = useState(false);
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date(moment(Date.now()).add(2, 'hours')));

  const addToCal = <Button variant="contained" size="small" touchstart={openModal} >Add To Calendar</Button>;

  const isDateProvided = (task) => {
    if (!userTask.start) {
      setHasDates(false)
    } else {
      setHasDates(true)
    }
  }

  const updateTaskTime = (startTime) => {
    console.log('startTime', typeof startTime)
    const momentTime = new Date(moment(startTime))
    console.log('momentTime', momentTime)
    // let newStart = new Intl.DateTimeFormat('en-US',
    // {dateStyle: 'full', timeStyle: 'long', }).format(startTime)
    const taskCopy = userTask
    taskCopy.start = momentTime
    setUserTask(taskCopy)
    console.log('userTask', userTask)
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleContentEditable = (e, field) => {
    const taskCopy = userTask;
    taskCopy[field] = e.target.value;
    setUserTask(taskCopy);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const classes = useStyles();

  useEffect(() => {
    isDateProvided(task);
  }, []);

  return (
    <Grid item xs={12} lg={12}>
      <Grid item xs={12}>
      <Card onDragStart={() => handleDragStart(task)} draggable='true'>
          <CardContent>
            <div style={{display: 'flex', flexDirection: 'row', gap: '5%'}}>
              <ContentEditable variant="body1" contentEditable={isEditing}
              onChange={(e)=>handleContentEditable(e, 'title')} html={task.title}
              />
              {isMobile && addToCal}
            </div>
            <ContentEditable variant="body1" contentEditable={isEditing}
            onChange={(e)=>handleContentEditable(e, 'description')} html={task.description}
            />
            <CardActions>
              <ExpandMoreIcon/>
              <Button variant="contained" size="small" onClick={() => openModal(task)}>Edit</Button>
              <Button variant="contained" size="small" onClick={deleteTask}>Delete</Button>
            </CardActions>
          </CardContent>
      </Card>
      </Grid>
    </Grid>
  );
};

export default Task;