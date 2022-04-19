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

<<<<<<< HEAD
function ToDoList({addToCalendar, isMobile, draggedEvent, setDraggedEvent, handleDragStart, taskData}) {
  const [categorizedTasks, setCategorizedTasks] = useState(taskData);
=======
function ToDoList({addToCalendar, isMobile, draggedEvent, setDraggedEvent, handleDragStart, taskData, addCategory}) {
  const [categorizedTasks, setCategorizedTasks] = useState([]);
>>>>>>> b29882fe2b135c2b5098062b9b9ef8be943e19fc
  const [newCatModalOpen, setNewCatModalOpen] = useState(false);
  const [newToDoModalOpen, setNewToDoModalOpen] = useState(false);

  // console.log('taskData', taskData)

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
    if (boo === false) {
      setNewToDoModalOpen(false);
    } else {
      setNewToDoModalOpen(true);
    }
  }

  const handleEditClick = () => {
    setEditing(!editing)
  }

  return (
    <Container className={isMobile ? classes.mobileMain : classes.desktopMain}>
      <Container sx={{display: 'flex', height: '50px', width: '100%'}}>
        <div style={{width: '80%'}}>To-Do List</div>
        <Button variant="contained" onClick={() => {openSetNewCat(true)}}>New Category</Button>
        <AddCategoryModal open={newCatModalOpen} closeCat={openSetNewCat} addCategory={addCategory} />
        <Button variant="contained" onClick={() => {openSetNewToDo(true)}}>New Task</Button>
        <AddToDoModal open={newToDoModalOpen} closeCat={openSetNewToDo}/>
      </Container>
      <div>
        <Categories taskData={taskData} isMobile={isMobile} draggedEvent={draggedEvent}
        setDraggedEvent={setDraggedEvent}
        handleDragStart={handleDragStart}/>
      </div>
    </Container>
  )
};

export default ToDoList;