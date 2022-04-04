import React, {useState, useEffect} from 'react';
import Categories from './Categories.jsx';
import Category from './Category.jsx';
import Tasks from './Tasks.jsx';

function ToDoList() {
  //a state prop that's an array that has an element for everytime + task or + category is clicked
  const [newTasks, setNewTasks] = useState([])
  const [newCategories, setNewCategories] = useState([])

  return(
    <div id="todo-list">To-Do List
      <div>
      <button onClick={() => setNewCategories(newCategories => newCategories.concat('New'))}>+ Category</button>
      <button onClick={() => setNewTasks(newTasks => newTasks.concat('New task'))}>+ Task</button>
      </div>
      <Categories categories={newCategories} />
      <Tasks tasks={newTasks} />
    </div>
  )
}
//don't forget empty array parameter for useEffect !!!

export default ToDoList;