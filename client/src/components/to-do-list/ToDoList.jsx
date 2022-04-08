import React, {useState, useEffect} from 'react';
import Categories from './Categories.jsx';
import Category from './Category.jsx';
import Tasks from './Tasks.jsx';
import { Button } from '@material-ui/core';

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

  return (
    <div id="todo-list" style={{width: '45%', display: 'inline-block'}}>
      <div style={{display: 'flex', height: '10%', width: '100%'}}>
        <div style={{width: '80%'}}>To-Do List</div>
        <Button variant="contained" onClick={() => setNewCategories(newCategories => newCategories.concat('New'))}>+ Category</Button>
        <Button variant="contained" onClick={() => setNewTasks(newTasks => newTasks.concat('New task'))}>+ Task</Button>
      </div>
      <div>
        <Categories categories={newCategories} deleteTask={deleteTask} tasks={newTasks}/>
        <Tasks tasks={newTasks} />
      </div>
    </div>
  )
}
//don't forget empty array parameter for useEffect !!!

export default ToDoList;