import React, {useState, useEffect} from 'react';
import Categories from './Categories.jsx';
import Category from './Category.jsx';
import Tasks from './Tasks.jsx';
import TestModal from './testModal.jsx';
import Home from '../Home.jsx'
import { example } from '../../../../database/example.js';
import { makeStyles, Container, Button } from '@material-ui/core';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

//need to filter task for inCalendar

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
  const [categorizedTasks, setCategorizedTasks] = useState([])
  const [modalOpen, setModalOpen] = useState(false)
  //mui width/height based on screen size
  //make outdiv scrollable/overflow
  //replace divs w containers

  const classes = useStyles()

  const deleteTask = (e) => {
    // var target = e.target;
    // console.log(target);
    // e.target.parentNode.style.display = 'none';
    console.log('deletetask called');
  }

  const openModal = () => {
    console.log('openModal called');
    setModalOpen(true);
  }

  const handleEditClick = () => {
    setEditing(!editing)
  }

  useEffect(() => {
    setCategorizedTasks(example);
  }, [])

  var addTask = (e) => {
    console.log('addTask');
  }

  const setNewCategories = () => {
    console.log('click');
  }

  const setNewTasks = () => {
    console.log('click');
  }

  console.log(example);

  return (
    <Container className={isMobile ? classes.mobileMain : classes.desktopMain}>
      <div style={{display: 'flex', height: '50px', width: '100%'}}>
        <div style={{width: '80%'}}>To-Do List</div>
        {modalOpen && <TestModal/>}
        <Button variant="contained" onClick={() => setNewCategories(newCategories => newCategories.concat('New'))}>New Category</Button>
        <Button variant="contained" onClick={() => setNewTasks(newTasks => newTasks.concat('New task'))}>New Task</Button>
      </div>
      <div>
        <Categories deleteTask={deleteTask} categorizedTasks={categorizedTasks}
        openModal={openModal} isMobile={isMobile}/>
      </div>
    </Container>
  )
};

export default ToDoList;