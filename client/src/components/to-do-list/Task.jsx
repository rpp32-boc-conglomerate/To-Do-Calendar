import React, { useState, useEffect, useCallback, Suspense } from 'react';
import { useDrag } from 'react-dnd';
import moment from 'moment';
import ContentEditable from 'react-contenteditable';
import { Button, Box, Grid, Card, CardHeader, CardContent, CardActions, Collapse, makeStyles, Typography, Toolbar, TextField,  TextareaAutosize, Stack } from '@material-ui/core';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const TaskOptionsModal = React.lazy(() => import('../TaskOptionsModal.jsx'));

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
    border: '1rem solid black'
  }
  })

function Task({task, isMobile, deleteTask, draggedEvent, setDraggedEvent, handleDragStart, clickedTask, updateTodo, deleteTodo}) {
  // console.log('task in task', task)

  // For Modal opening and closing
  const [todo, setTodo] = useState(task);
  const [modalOpen, setModalOpen] = useState(false);
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();

  // const [modalInfo, setModalInfo] = useState();

  const convertDuration = (duration) => {
    const splitDuration = duration.split(':')
    let hours = splitDuration[0]
    const hoursDigits = hours.split('')
    if (hoursDigits[0] === '0' && hoursDigits.length === 2) {
      hours = hoursDigits[1]
    }
    let minutes = splitDuration[1]
    const minutesDigits = minutes.split('')
    if (minutesDigits[0] === '0') {
      minutes = minutesDigits[1]
    }
    setHours(hours)
    setMinutes(minutes)
  }

  const updateTask = (task) => {
    setTodo(task)
    newTodo()
  }

  const classes = useStyles();

  useEffect(() => {
    convertDuration(todo.duration)
  }, [])

  const newTodo = useCallback(() => {
    convertDuration(todo.duration)
  }, [todo])

  return (
    <Grid item xs={12} lg={12}>
      <Grid item xs={12}>
        <Card onDragStart={() => handleDragStart(task)} draggable='true'>
          {modalOpen === true && <TaskOptionsModal setModalOpen={setModalOpen} modalOpen={modalOpen} task={task} updateTodo={updateTodo} deleteTodo={deleteTodo} updateTask={updateTask}/>}
          <CardContent>
            <div style={{display: 'flex', flexDirection: 'row', gap: '5%'}}>
              <Typography>
                {task.title}
              </Typography>
              <div>Duration:</div>
              <Box>{hours} {hours === '1' ? 'hour' : 'hours'}</Box>
              <Box>{minutes} {minutes === '1' ? 'minute' : 'minutes'}</Box>
              {isMobile && addToCal}
            </div>
            <Typography>
                {task.description}
              </Typography>
            <CardActions>
              <Button variant="contained" size="small" onClick={() => setModalOpen(true)}>Edit</Button>
            </CardActions>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Task;
