import React, {useState, useEffect} from 'react';
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

function Category({id, categorizedTasks, addTask, openModal, deleteTask, title}) {
  const classes = useStyles();
  const [totalTime, setTotalTime] = useState(0);

  console.log('categorized tasks', categorizedTasks)
  const [tasks] = categorizedTasks.filter((category, i) => i===id)
  console.log('tasks in category', tasks)

  return (
  <Container>
    <div style={{display: 'flex'}}>
    <Paper elevation={2} className={classes.paper}>
      {/* <TextField
      required
      label='New Category'
      variant='outlined'
      onClick=''
      /> */}
      <div>{tasks[name]}</div>
      <div>Time Spent So Far: 0</div>
      <div>
        <Button onClick={() => {
            setTotalTime(totalTime + 1);
            // addTask()
          }}>Add Task</Button>
      </div>
      <Tasks tasks={tasks} deleteTask={deleteTask} id={id}/>
    </Paper>
    </div>
  </Container>
)}

export default Category;