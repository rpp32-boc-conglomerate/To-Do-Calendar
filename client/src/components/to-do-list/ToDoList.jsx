import React, {useState, useEffect} from 'react';
import Categories from './Categories.jsx';
import Category from './Category.jsx';
import Tasks from './Tasks.jsx';
import Drop from './testDrop.jsx';
import "./styles.scss";
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';

// var newToDo = {
//   title: toDo.title,
//   start: toDo.start,
//   end: toDo.end ? toDo.end : new Date(moment(toDo.start).add(1, 'hour')),
//   allDay: toDo.allDay ? toDo.allDay : false
// }

const testToDos = [
  {
  title: 'clean floors',
  start: new Date('April 06, 2022 03:00:00'),
  end: new Date('April 06, 2022 04:00:00'),
  allDay: false
},
{
  title: 'make music',
  start: new Date('April 05, 2022 03:00:00'),
  end: new Date('April 05, 2022 04:00:00'),
  allDay: false
},
]
//wrap with a provider for dnd
function ToDoList() {
  //a state prop that's an array that has an element for everytime + task or + category is clicked
  const [newTasks, setNewTasks] = useState([])
  const [newCategories, setNewCategories] = useState([])

  function handleAddTask() {
    setNewTasks(newTasks => newTasks.concat('New'))
  }

  return(
    <div>
    <DndProvider backend={HTML5Backend}>
    <div id="todo-list">To-Do List
      <div>
      <button onClick={() => setNewCategories(newCategories => newCategories.concat('New'))}>+ Category</button>
      <button onClick={() => setNewTasks(newTasks => newTasks.concat('New task'))}>+ Task</button>
      </div>
      <Categories categories={newCategories} tasks={newTasks} addTask={handleAddTask}/>
      <Tasks tasks={newTasks} />
    </div>
      <Drop tasks={newTasks}/>
    </DndProvider>
    </div>
  )
}
//don't forget empty array parameter for useEffect !!!

export default ToDoList;