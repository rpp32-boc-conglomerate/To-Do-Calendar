import React, {useState, useEffect} from 'react';
import Categories from './Categories.jsx';
import Category from './Category.jsx';
import Tasks from './Tasks.jsx';

function ToDoList() {
  //a state prop that's an array that has an element for everytime + task or + category is clicked
  const [newTasks, setNewTasks] = useState([])
  const [newCategories, setNewCategories] = useState([])

  var deleteTask = (e) => {
    // var target = e.target;
    // console.log(target);
    e.target.parentNode.style.display = 'none';

    console.log(e.target.parentNode.style);
  }

  return(
    <div id="todo-list" style={{width: '50%'}}>
      <div style={{display: 'flex'}}>
        <div style={{width: '80%'}}>To-Do List</div>
        <button onClick={() => setNewCategories(newCategories => newCategories.concat('New'))}>+ Category</button>
        <button onClick={() => setNewTasks(newTasks => newTasks.concat('New task'))}>+ Task</button>
      </div>
      <Categories categories={newCategories} deleteTask={deleteTask}/>
      {/* <Tasks tasks={newTasks} /> */}
    </div>
  )
}
//don't forget empty array parameter for useEffect !!!

export default ToDoList;