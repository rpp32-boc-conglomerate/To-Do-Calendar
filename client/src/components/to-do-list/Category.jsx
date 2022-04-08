import React, {useState} from 'react';
import Task from './Task.jsx';
import Tasks from './Tasks.jsx';
import { makeStyles, Paper, Container, Grid, ButtonGroup, Button, TextField, Toolbar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '2rem',
    width: '40vw',
    color: 'grey'
  }
}))

function Category({index, tasks, addTask, openModal}) {
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
      addTask(index)
    }
    }>+ Task</Button>
    </Grid>
    <Tasks tasks={tasks} categoryIndex={index} openModal={openModal}/>
    </Paper>
</Container>
)}

export default Category;