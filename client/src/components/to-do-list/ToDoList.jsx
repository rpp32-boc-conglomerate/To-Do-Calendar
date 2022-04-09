import React, {useState, useEffect} from 'react';
import "./styles.scss";
import Categories from './Categories.jsx';
import Category from './Category.jsx';
import Tasks from './Tasks.jsx';
import Drop from './testDrop.jsx';
import TestModal from './testModal.jsx';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Container, Grid, ButtonGroup, Button } from '@material-ui/core';

// var newToDo = {
//   title: toDo.title,
//   start: toDo.start,
//   end: toDo.end ? toDo.end : new Date(moment(toDo.start).add(1, 'hour')),
//   allDay: toDo.allDay ? toDo.allDay : false
// }

//wrap with a provider for dnd
function ToDoList() {
  //a state prop that's an array that has an element for everytime + task or + category is clicked
  const [newTasks, setNewTasks] = useState({})
  const [newCategories, setNewCategories] = useState([])
  const [touched, setTouch] = useState(false)

  function handleAddTask(index) {
    console.log('add task category index', index)
    if (newTasks[index]) {
      setNewTasks(newTasks => newTasks[index].concat('New'))
    } else {
      let newTask = {}
      newTask = {index: 'new'}
      setNewTasks(newTasks => ({
        ...newTasks,
        ...newTask
      }))
    }
    console.log('newTasks', newTasks)
}

  function openModal() {
    console.log('openModal called')
    setTouch(true)
  }

  return(
    <Container>
    <DndProvider backend={HTML5Backend}>
    <Grid item xs={2} md={4}>To-Do List
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button onClick={() => setNewCategories(newCategories => newCategories.concat('New'))}>+ Category</Button>
      <Button onClick={() => setNewTasks(newTasks => newTasks.concat('New task'))}>+ Task</Button>
    </ButtonGroup>
      </Grid>
      <Categories categories={newCategories} tasks={newTasks} addTask={handleAddTask} openModal={openModal}/>
      {/* <Tasks tasks={newTasks} openModal={openModal} /> */}
      <Drop tasks={newTasks}/>
      {touched && <TestModal/>}
    </DndProvider>
    </Container>
  )
}
//don't forget empty array parameter for useEffect !!!

export default ToDoList;