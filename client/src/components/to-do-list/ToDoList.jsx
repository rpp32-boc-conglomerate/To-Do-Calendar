import React, {useState, useEffect} from 'react';
import Categories from './Categories.jsx';
import Category from './Category.jsx';
import Tasks from './Tasks.jsx';
import TestModal from './testModal.jsx';
import TaskOptionsModal from '../TaskOptionsModal.jsx';
import Home from '../Home.jsx'
import { example } from '../../../../database/example.js';
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

function ToDoList({addToCalendar, isMobile}) {
  //a state prop that's an array that has an element for everytime + task or + category is clicked
  const [categorizedTasks, setCategorizedTasks] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState();
  const [newCatModalOpen, setNewCatModalOpen] = useState(false);
  const [newToDoModalOpen, setNewToDoModalOpen] = useState(false);
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
        {modalOpen === true && <TaskOptionsModal handleOpen={modalOpen} handleClose={setModalOpen} task={modalInfo}/>}
        <Button variant="contained" onClick={() => {openSetNewCat(true)}}>New Category</Button>
        < AddCategoryModal open={newCatModalOpen} closeCat={openSetNewCat}/>
        <Button variant="contained" onClick={() => {openSetNewToDo(true)}}>New Category</Button>
        < AddToDoModal open={newToDoModalOpen} closeCat={openSetNewToDo}/>
      </Container>
      <Categories deleteTask={deleteTask} categorizedTasks={categorizedTasks}
        openModal={openModal} isMobile={isMobile}/>
    </Container>
  )
};

export default ToDoList;