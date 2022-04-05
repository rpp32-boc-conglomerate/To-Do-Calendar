import React, {useState, useEffect} from 'react';
import Categories from './Categories.jsx';
import Category from './Category.jsx';
import Tasks from './Tasks.jsx';
import Drop from './testDrop.jsx';
import "./styles.scss";
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';

//wrap with a provider for dnd
function ToDoList() {
  //a state prop that's an array that has an element for everytime + task or + category is clicked
  const [newTasks, setNewTasks] = useState([])
  const [newCategories, setNewCategories] = useState([])

  return(
    //when you put your provider, need to put your backend
    <DndProvider backend={HTML5Backend}>
    <div id="todo-list">To-Do List
      <div>
      <button onClick={() => setNewCategories(newCategories => newCategories.concat('New'))}>+ Category</button>
      <button onClick={() => setNewTasks(newTasks => newTasks.concat('New task'))}>+ Task</button>
      </div>
      <Categories categories={newCategories} />
      <Tasks tasks={newTasks} />
      <Drop tasks={newTasks}/>
    </div>
    </DndProvider>
  )
}
//don't forget empty array parameter for useEffect !!!

export default ToDoList;