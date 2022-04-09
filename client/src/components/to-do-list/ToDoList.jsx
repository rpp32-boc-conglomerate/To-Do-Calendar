import React, {useState, useEffect} from 'react';
import Categories from './Categories.jsx';
import Category from './Category.jsx';
import Tasks from './Tasks.jsx';
<<<<<<< HEAD
import Drop from './testDrop.jsx';
import TestModal from './testModal.jsx';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Container, Grid, ButtonGroup, Button } from '@material-ui/core';
=======
import { Button } from '@material-ui/core';
>>>>>>> 995817ae3ec71ecad2ffbae479cc5105163ca4ec

function ToDoList() {
  //a state prop that's an array that has an element for everytime + task or + category is clicked
  const [newTasks, setNewTasks] = useState({})
  const [newCategories, setNewCategories] = useState([])
  const [touched, setTouch] = useState(false)

<<<<<<< HEAD
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
=======
  var deleteTask = (e) => {
    // var target = e.target;
    // console.log(target);
    e.target.parentNode.style.display = 'none';

    console.log(e.target.parentNode.style);
  }

  return (
    <div id="todo-list" style={{width: '45%', display: 'inline-block'}}>
      <div style={{display: 'flex', height: '50px', width: '100%'}}>
        <div style={{width: '80%'}}>To-Do List</div>
        <Button variant="contained" onClick={() => setNewCategories(newCategories => newCategories.concat('New'))}>Add Category</Button>
        <Button variant="contained" onClick={() => setNewTasks(newTasks => newTasks.concat('New task'))}>Add Task</Button>
      </div>
      <div>
        <Categories categories={newCategories} deleteTask={deleteTask} tasks={newTasks}/>
        {/* <Tasks tasks={newTasks} /> */}
      </div>
    </div>
>>>>>>> 995817ae3ec71ecad2ffbae479cc5105163ca4ec
  )
}
//don't forget empty array parameter for useEffect !!!

export default ToDoList;