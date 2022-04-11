import React, {useState} from 'react';
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

function Category({tasks, addTask, deleteTask}) {
  const classes = useStyles();
  const [totalTime, setTotalTime] = useState(0);

  console.log('category: ', tasks);

  return (
  <Container>
    <Paper elevation={2} className={classes.paper} sx={{ display: 'inline-block' }}>
      <Container  sx={{ display: 'flex' }}>
        <TextField
        required
        label='New Category'
        variant='outlined'
        />
        <TextField
        required
        label='Allotted Time'
        variant='outlined'
        />
        <Button onClick={() => {
          setTotalTime(totalTime + 1);
          addTask()
        }}>Add Task</Button>
      </Container>
      <Container sx={{ display: 'inline-block' }}>
        <Tasks tasks={tasks} deleteTask={deleteTask}/>
      </Container>
    </Paper>
  </Container>
)}

export default Category;