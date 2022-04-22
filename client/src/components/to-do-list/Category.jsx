import React, {useState, useEffect, useCallback, Suspense} from 'react';
import Task from './Task.jsx';
import Tasks from './Tasks.jsx';
import { makeStyles, Paper, Container, Grid, ButtonGroup, Button, TextField, Toolbar } from '@material-ui/core';
import TaskOptionsModal from '../TaskOptionsModal.jsx';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'inline-block',
    padding: '1rem',
    width: '100%',
    color: 'black'
  }
}))

function Category({tasks, isMobile, draggedEvent, setDraggedEvent, handleDragStart, addTodo, updateTodo, deleteTodo}) {
  const classes = useStyles();
  const [totalTime, setTotalTime] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const todos = tasks.items;
  const categoryId = tasks.category_id
  const onCalendarTasks = todos.filter(task => task.in_calendar);

  return (
    <Container>
      <Paper elevation={2} className={classes.paper}>
        <Container sx={{display: 'flex'}}>
          <div>{tasks.category}</div>
          <div>Time Spent So Far: 0</div>
          <Button onClick={() => {
            setTotalTime(totalTime + 1);
            setModalOpen(true);
          }}>Add Task</Button>
          {modalOpen === true &&
          <TaskOptionsModal setModalOpen={setModalOpen} modalOpen={modalOpen} task={''}
          categoryId={categoryId} addTodo ={addTodo} updateTodo={updateTodo}
          deleteTodo={deleteTodo} newTodo={true}/>}
        </Container>
        <Container sx={{ display: 'inline-block'}}>
          <Tasks tasks={todos} isMobile={isMobile}
          draggedEvent={draggedEvent} setDraggedEvent={setDraggedEvent}
          handleDragStart={handleDragStart}
          updateTodo={updateTodo} deleteTodo={deleteTodo}
          modalOpen={modalOpen} setModalOpen={setModalOpen}/>
        </Container>
    </Paper>
  </Container>
)}

export default Category;