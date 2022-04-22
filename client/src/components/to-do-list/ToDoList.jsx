import React, {useState, useEffect} from 'react';
import Categories from './Categories.jsx';
import Category from './Category.jsx';
import Tasks from './Tasks.jsx';
import TestModal from './testModal.jsx';
import TaskOptionsModal from '../TaskOptionsModal.jsx';
import Home from '../Home.jsx'
import { makeStyles, Container, Button, Modal } from '@material-ui/core';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import AddCategoryModal from './newCategory.jsx';
import AddToDoModal from './newToDo.jsx'

const useStyles = makeStyles({
  mobileMain: {
    width: '100%',
    display: 'inline-block'
  },
  desktopMain: {
    width: '45%',
    display: 'inline-block'
  }
})

function ToDoList({addToCalendar, isMobile, draggedEvent, setDraggedEvent, handleDragStart, taskData, addCategory, addTodo}) {
  const [newCatModalOpen, setNewCatModalOpen] = useState(false);
  const [newToDoModalOpen, setNewToDoModalOpen] = useState(false);
  const [addTaskModal, setAddTaskModal] = useState(false)

// console.log('taskData in todolist', taskData)

  // useEffect(() => {
  //   console.log('taskdata', taskData)
  //   if (taskData?.length) {
  //     const [categorizedTasks] = taskData
  //     console.log('categories', categorizedTasks)
  //     taskData = categorizedTasks?.categories
  //     setCategories(taskData)
  //   }
  // }, [])

  const classes = useStyles();

  var addTask = (e) => {
    console.log('addTask');

  }

  const openSetNewCat = (boo) => {
    if (boo === false) {
      setNewCatModalOpen(false);
    } else {
      setNewCatModalOpen(true);
    }
  }

  const openSetNewToDo = (boo) => {
    console.log('boo', boo)
    if (boo === false) {
      setNewToDoModalOpen(false);
    } else {
      setNewToDoModalOpen(true);
    }
  }

  return (

    <Container className={isMobile ? classes.mobileMain : classes.desktopMain}>
      <Container sx={{display: 'flex', height: '50px', width: '100%'}}>
        <div style={{width: '80%'}}>To-Do List</div>
        <Button variant="contained" onClick={() => {openSetNewCat(true)}}>New Category</Button>
        <AddCategoryModal open={newCatModalOpen} closeCat={openSetNewCat} addCategory={addCategory} />
        <Button variant="contained" onClick={() => {openSetNewToDo(true)}}>New Task</Button>
        <AddToDoModal open={newToDoModalOpen} closeCat={openSetNewToDo} addTodo={addTodo} info={taskData}/>
      </Container>
      <div>
        <Categories taskData={taskData} isMobile={isMobile} draggedEvent={draggedEvent}
        setDraggedEvent={setDraggedEvent}
        handleDragStart={handleDragStart}
        addTodo={addTodo}/>
      </div>
    </Container>
    )
};

export default ToDoList;