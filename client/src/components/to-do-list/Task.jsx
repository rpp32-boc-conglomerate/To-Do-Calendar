import React, { useState, useEffect } from 'react';
import { useDrag } from 'react-dnd';
import moment from 'moment';
import { Button, Grid, Card, CardHeader, CardContent, CardActions, Collapse, makeStyles, Typography, Toolbar, TextField,  TextareaAutosize, Stack } from '@material-ui/core';
import { format } from 'date-fns';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const TaskOptionsModal = require('../TaskOptionsModal.jsx');

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
  const [taskWithTime, setTaskWithTime] = useState(task);
  const [expanded, setExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [hasDates, setHasDates] = useState(false);
  const [startTime, setStartTime] = useState(new Date('2018-01-01T00:00:00.000Z'));
  const [endTime, setEndTime] = useState(new Date('2018-01-01T00:00:00.000Z'));

  const addToCal =
  <Button variant="contained" size="small" touchstart={openModal} >Add To Calendar</Button>

  const timeSelectors =
  <div>
   <LocalizationProvider dateAdapter={AdapterDateFns}>
   <DesktopDateTimePicker
   renderInput={(props) => <TextField {...props} />}
   label="Start Time"
   value={startTime}
   onChange={(newValue) => {
     setStartTime(newValue)
   }}
  />
 </LocalizationProvider>

<LocalizationProvider dateAdapter={AdapterDateFns}>
   <DesktopDateTimePicker
   renderInput={(props) => <TextField {...props} />}
   label="End Time"
   value={endTime}
   onChange={(newValue) => {
     setEndTime(newValue)
   }}
  />
 </LocalizationProvider>
 </div>

  const timeDisplay =
  <div>
    <div>{task.start}</div>
    <div>{task.end}</div>
  </div>

  const isDateProvided = (task) => {
    if (!task.start && !task.end) {
      setHasDates(false)
    } else {
      setHasDates(true)
    }
  }
  //do i need to put task in state ?
  //if it has to go to parent component
  //props are static, state is dynamic

  const updateTaskTime = (startTime) => {
    console.log('type',  typeof startTime)
    // moment(startTime, 'MM-DD-YYYY')
    const newStart = new Date(moment(startTime))
    console.log('newStart', typeof newStart)
    const taskCopy = taskWithTime
    taskCopy.start = newStart

    setTaskWithTime(taskCopy)

    console.log('taskwithtime', taskWithTime)


  }

  const handleEdit = () => {
    setIsEditing(!isEditing)
  }

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const classes = useStyles();

  useEffect(() => {
    isDateProvided(task)
  }, [])

  useEffect(() => {
    updateTaskTime(startTime)
  }, [startTime])

  //the object is what you'll be passing in drop
  // const [{isDragging}, drag] = useDrag(() => ({
  //   type: "task",
  //   id: props.index,
  //   item: {id: props.index},
  //   //define different states/props, but optional

  //   collect: (monitor) => ({
  //     isDragging: !!monitor.isDragging(),
  //   }),
  // }));
  // const [isOpen, setIsOpen] = useState(false);


  // console.log('Task', task);
  // console.log(isOpen);

  return (
    <Grid item xs={12} lg={12}>
      <Grid item xs={12}>
      <Card>
          <CardContent>
            <div style={{display: 'flex', flexDirection: 'row', gap: '5%'}}>
            <Typography variant="body1" contentEditable={isEditing}>
              {task.title}
            </Typography>
            {isMobile && addToCal}
            </div>
            <Typography variant="body2" contentEditable={isEditing}>
              {task.description}
            </Typography>
            <CardActions>
            <ExpandMoreIcon/>
            <Button variant="contained" size="small" onClick={handleEdit}>{isEditing ? 'Done' : 'Edit'}</Button>
            <Button variant="contained" size="small" onClick={deleteTask}>Delete</Button>
            {!hasDates && timeSelectors}
            {hasDates && timeDisplay}
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