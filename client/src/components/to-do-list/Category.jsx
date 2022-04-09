import React, {useState} from 'react';
import Task from './Task.jsx';
import Tasks from './Tasks.jsx';
import { makeStyles, Paper, Container, Grid, ButtonGroup, Button, TextField, Toolbar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    padding: '2rem',
    width: '100%',
    color: 'grey'
  }
}))

function Category({tasks, addTask, deleteTask}) {
  const classes = useStyles();
  const [totalTime, setTotalTime] = useState(0);

  return (
  <Container>
    <Paper elevation={2} className={classes.paper}>
      <TextField
      label='New Category'
      variant='outlined'
      />
      <TextField
      label='Allotted Time'
      variant='outlined'
      />
        <Grid>
          <Button onClick={() => {
            setTotalTime(totalTime + 1);
            // addTask()
          }}>Add Task</Button>
        </Grid>
      <Tasks tasks={tasks} deleteTask={deleteTask}/>
    </Paper>
  </Container>
)}

export default Category;