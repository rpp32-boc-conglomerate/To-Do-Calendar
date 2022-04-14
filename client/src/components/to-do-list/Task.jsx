import React, { useState, useEffect } from 'react';
import { useDrag } from 'react-dnd';
import moment from 'moment';
import ContentEditable from 'react-contenteditable'
import { Button, Grid, Card, CardHeader, CardContent, CardActions, Collapse, makeStyles, Typography, Toolbar, TextField,  TextareaAutosize, Stack } from '@material-ui/core';
import { format } from 'date-fns';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const TaskOptionsModal = require('../TaskOptionsModal.jsx');
//on hover over editable field -- pen icon or underline
const useStyles = makeStyles({
  grid: {
    display: 'in-line block',
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


// drag div, need to call hook
// isDragging returns t or f
// drag reference which element you want to make draggable
// every element requires a type
function Task({task, openModal, isMobile, deleteTask}) {
  // console.log('task in task', task )
  const [userTask, setUserTask] = useState(task);
  const [expanded, setExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [hasDates, setHasDates] = useState(false);
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date('2018-01-01T00:00:00.000Z'));

  const addToCal =
  <Button variant="contained" size="small" touchstart={openModal} >Add To Calendar</Button>

  const timeSelectors =
  <div>
   <LocalizationProvider dateAdapter={AdapterDateFns}>
   <DesktopDateTimePicker
   renderInput={(props) => <TextField {...props} />}
   label="Start Time"
   value={userTask.start || startTime}
   onChange={(newValue) => {
    setStartTime(newValue)
   }}
  />
 </LocalizationProvider>

<LocalizationProvider dateAdapter={AdapterDateFns}>
   <DesktopDateTimePicker
   renderInput={(props) => <TextField {...props} />}
   label="End Time"
   value={userTask.end || endTime}
   onChange={(newValue) => {
     setEndTime(newValue)
   }}
  />
 </LocalizationProvider>
 </div>

  const isDateProvided = (task) => {
    if (!userTask.start) {
      setHasDates(false)
    } else {
      setHasDates(true)
    }
  }

  const updateTaskTime = (startTime) => {
    console.log('startTime', typeof startTime)
    const momentTime = moment(startTime).format()
    console.log('momentTime', momentTime)
    let newStart = new Intl.DateTimeFormat('en-US',
    {dateStyle: 'full', timeStyle: 'long', }).format(startTime)

    console.log('momentized', newStart)
    const taskCopy = userTask
    taskCopy.start = newStart
    setUserTask(taskCopy)
    console.log('userTask', userTask)
  };

  const handleEdit = () => {
    setIsEditing(!isEditing)
  };

  const handleContentEditable = (e, field) => {
    const taskCopy = userTask;
    taskCopy[field] = e.target.value;
    setUserTask(taskCopy)
  };

  const handleExpandClick = () => {
    setExpanded(!expanded)
  };

  const classes = useStyles();

  useEffect(() => {
    isDateProvided(task)
  }, []);

  // console.log('Task', task);
  // console.log(isOpen);

  return (
    <Grid item xs={12} lg={12}>
      <Grid item xs={12}>
      <Card>
          <CardContent>
            <div style={{display: 'flex', flexDirection: 'row', gap: '5%'}}>
            <ContentEditable variant="body1" contentEditable={isEditing}
            onChange={(e)=>handleContentEditable(e, 'title')}
              html={task.title}
            />
            {isMobile && addToCal}
            </div>
            <ContentEditable variant="body1" contentEditable={isEditing}
            onChange={(e)=>handleContentEditable(e, 'description')}
            html={task.description}
            />
            <CardActions>
            <ExpandMoreIcon/>
            <Button variant="contained" size="small" onClick={handleEdit}>{isEditing ? 'Done' : 'Edit'}</Button>
            <Button variant="contained" size="small" onClick={deleteTask}>Delete</Button>
            {timeSelectors}
            </CardActions>
          </CardContent>
      </Card>
      </Grid>
    </Grid>
//     <Card
//       id="task"
//       index={props.index}
//       ref={drag}
//       className={classes.card}
//       // style={{border: isDragging ? "2px solid pink" : "0px"}}
//     >
//       <TextField
//         disabled
//         defaultValue={props.task.title}
//         className={classes.textArea}
//       />
//       <TextField
//         disabled
//         defaultValue={props.task.duration}
//         className={classes.textArea}
//       />
//       <Button variant="contained" onClick={() => setIsOpen()}>Edit</Button>
//       <Button variant="contained" onClick={() => console.log('Task X Button Clicked!')}>X</Button>
//       {/* { isOpen === false && <TaskOptionsModal open={isOpen}/> } */}
//     </Card>
  );
};

export default Task;

// function DraggableComponent(props) {
//   const [collected, drag, dragPreview] = useDrag(() => ({
//     type,
//     item: { id }
//   }))
//   return collected.isDragging ? (
//     <div ref={dragPreview} />
//   ) : (
//     <div ref={drag} {...collected}>
//       ...
//     </div>
//   )
// }