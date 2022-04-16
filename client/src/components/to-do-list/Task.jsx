import React, { useState, useEffect } from 'react';
import { useDrag } from 'react-dnd';
import moment from 'moment';
import ContentEditable from 'react-contenteditable';
import { Button, Grid, Card, CardHeader, CardContent, CardActions, Collapse, makeStyles, Typography, Toolbar, TextField,  TextareaAutosize, Stack } from '@material-ui/core';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TaskOptionsModal from '../TaskOptionsModal.jsx';

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


//only want task.in_calendar === false
function Task({task, isMobile, draggedEvent, setDraggedEvent, handleDragStart, myEvents}) {
  // console.log('task in task', task )

  // For Modal opening and closing
  const [modalOpen, setModalOpen] = useState(false);
  // const [modalInfo, setModalInfo] = useState();

  const updateTaskTime = (startTime) => {
    const momentTime = moment(startTime).format();
    let newStart = new Intl.DateTimeFormat('en-US', {dateStyle: 'full', timeStyle: 'long'}).format(startTime);
    const taskCopy = userTask;
    taskCopy.start = newStart;
    setUserTask(taskCopy);
  };



  const classes = useStyles();

  return (
    <Grid item xs={12} lg={12}>
      <Grid item xs={12}>
        <Card>
          {modalOpen === true && <TaskOptionsModal setModalOpen={setModalOpen} modalOpen={modalOpen} task={task} updateTodo={updateTodo} deleteTodo={deleteTodo} />}
          <CardContent>
            <div style={{display: 'flex', flexDirection: 'row', gap: '5%'}}>
              <ContentEditable variant="body1" html={task.title}
              />
            </div>
            <ContentEditable variant="body1" html={task.description}
            />
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