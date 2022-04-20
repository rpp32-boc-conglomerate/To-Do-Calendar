import React, { useState, useEffect, Suspense } from 'react';
import { useDrag } from 'react-dnd';
import moment from 'moment';
import ContentEditable from 'react-contenteditable';
import { Button, Grid, Card, CardHeader, CardContent, CardActions, Collapse, makeStyles, Typography, Toolbar, TextField,  TextareaAutosize, Stack } from '@material-ui/core';
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
  const [modalOpen, setModalOpen] = useState(false);
  // const [modalInfo, setModalInfo] = useState();

  const classes = useStyles();

  return (
    <Grid item xs={12} lg={12}>
      <Grid item xs={12}>
        <Suspense fallback={<div>Loading...</div>}>
          <Card onDragStart={() => handleDragStart(task)} draggable='true'>
            {modalOpen === true && <TaskOptionsModal setModalOpen={setModalOpen} modalOpen={modalOpen} task={task} updateTodo={updateTodo} deleteTodo={deleteTodo} />}
            <CardContent>
              <div style={{display: 'flex', flexDirection: 'row', gap: '5%'}}>
                <Typography>
                  {task.title}
                </Typography>
                {isMobile /* && addToCal */}
              </div>
              <Typography>
                  {task.description}
                </Typography>
              <CardActions>
                <Button variant="contained" size="small" onClick={() => setModalOpen(true)}>Edit</Button>
              </CardActions>
            </CardContent>
          </Card>
        </Suspense>
      </Grid>
    </Grid>
  );
};

export default Task;
