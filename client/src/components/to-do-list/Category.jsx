import React, {useState, useEffect} from 'react';
import Task from './Task.jsx';
import Tasks from './Tasks.jsx';
import { makeStyles, Paper, Container, Grid, ButtonGroup, Button, TextField, Toolbar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'inline-block',
    padding: '2rem',
    width: '100%',
    color: 'grey'
  }
}))

function Category({tasks, addTask, openModal, isMobile, deleteTask}) {
  const classes = useStyles();
  const [totalTime, setTotalTime] = useState(0);

  const {name} = tasks

  // console.log('category: ', tasks);

  return (
    <Container>
      <Paper elevation={2} className={classes.paper}>
        <Container sx={{display: 'flex'}}>
          <div>{tasks.category}</div>
          <div>Time Spent So Far: 0</div>
          <Button onClick={() => {
            setTotalTime(totalTime + 1);
            // addTask()
          }}>Add Task</Button>
        </Container>
        <Container sx={{ display: 'inline-block'}}>
          <Tasks tasks={tasks.tasks} deleteTask={deleteTask} openModal={openModal} isMobile={isMobile}/>
        </Container>
    </Paper>
  </Container>
)}

export default Category;