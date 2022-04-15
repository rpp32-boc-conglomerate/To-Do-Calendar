import React, {useState, useEffect} from 'react';
import Categories from './Categories.jsx';
import Category from './Category.jsx';
import Tasks from './Tasks.jsx';
import TestModal from './testModal.jsx';
import TaskOptionsModal from '../TaskOptionsModal.jsx';
import Home from '../Home.jsx'
import { example } from '../../../../database/example.js';
import { makeStyles, Container, Button } from '@material-ui/core';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

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

function ToDoList({addToCalendar, isMobile, draggedEvent, setDraggedEvent, handleDragStart}) {
  //a state prop that's an array that has an element for everytime + task or + category is clicked
  const [categorizedTasks, setCategorizedTasks] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState();
  //mui width/height based on screen size
  //make outdiv scrollable/overflow
  //replace divs w containers

  const classes = useStyles()

  useEffect(() => {
    setCategorizedTasks(example);
  }, []);

  const deleteTask = (e) => {
    console.log('deletetask called');
  }

  var addTask = (e) => {
    console.log('addTask');
  }

  const setNewCategories = () => {
    console.log('click');
  }

  const setNewTasks = () => {
    console.log('click');
  }

  const openModal = (todoItem) => {
    console.log('openModal called');
    setModalOpen(true);
    setModalInfo(todoItem);
  }

  const handleEditClick = () => {
    setEditing(!editing)
  }

  return (
    <Container className={isMobile ? classes.mobileMain : classes.desktopMain}>
      <Container sx={{display: 'flex', height: '50px', width: '100%'}}>
        <div style={{width: '80%'}}>To-Do List</div>
        {modalOpen === true && <TaskOptionsModal handleOpen={modalOpen} handleClose={setModalOpen} task={modalInfo}/>}
        <Button variant="contained" onClick={() => setNewCategories(newCategories => newCategories.concat('New'))}>New Category</Button>
        <Button variant="contained" onClick={() => setNewTasks(newTasks => newTasks.concat('New task'))}>New Task</Button>
<<<<<<< HEAD
      </div>
      <div>
        <Categories deleteTask={deleteTask} categorizedTasks={categorizedTasks}
        openModal={openModal} isMobile={isMobile} draggedEvent={draggedEvent} setDraggedEvent={setDraggedEvent} handleDragStart={handleDragStart}/>
      </div>
=======
      </Container>
      <Categories deleteTask={deleteTask} categorizedTasks={categorizedTasks}
        openModal={openModal} isMobile={isMobile}/>
>>>>>>> a4660ebbdc138108f111200d615a32ced4139c5f
    </Container>
  )
};

export default ToDoList;