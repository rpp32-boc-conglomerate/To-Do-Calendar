import React, {useState, useEffect, useCallback} from 'react';
import Task from './Task.jsx';
import Tasks from './Tasks.jsx';
import { makeStyles, Paper, Container, Grid, ButtonGroup, Button, TextField, Toolbar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'inline-block',
    padding: '1rem',
    width: '100%',
    color: 'black'
  }
}))

function Category({tasks, addTask, isMobile, updateTodo, deleteTodo, draggedEvent, setDraggedEvent, handleDragStart}) {
  const classes = useStyles();
  const [totalTime, setTotalTime] = useState(0);
  // console.log('tasks in category', tasks)
  const todos = tasks.items

  const onCalendarTasks = todos.filter(task => task.in_calendar)
  // console.log('oncal', onCalendarTasks)

  console.log('tasks in category', todos)
  return (
    <Container>
      <Paper elevation={2} className={classes.paper}>
        <Container sx={{display: 'flex'}}>
          <div>{tasks.category}</div>
          <div>Time Spent So Far: 0</div>
          <Button onClick={() => {
            setTotalTime(totalTime + 1);
            addTask();
          }}>Add Task</Button>
        </Container>
        <Container sx={{ display: 'inline-block'}}>
          <Tasks tasks={todos} isMobile={isMobile} updateTodo={updateTodo} deleteTodo={deleteTodo}
          draggedEvent={draggedEvent} setDraggedEvent={setDraggedEvent} handleDragStart={handleDragStart}/>
        </Container>
    </Paper>
  </Container>
)}

export default Category;