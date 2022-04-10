import React, {useState, useEffect} from 'react';
import Categories from './Categories.jsx';
import Category from './Category.jsx';
import Tasks from './Tasks.jsx';
import {categories, tasks} from '/Users/meredithwhite/JavaScript/HackReactor/RPP32/Senior/To-Do-Calendar-2/database/example.js';
import { Button } from '@material-ui/core';

function ToDoList() {
  //a state prop that's an array that has an element for everytime + task or + category is clicked
  const [newTasks, setNewTasks] = useState({})
  const [newCategories, setNewCategories] = useState([])
  const [categorizedTasks, setCategorizedTasks] = useState([])
  const [touched, setTouch] = useState(false)

  var deleteTask = (e) => {
    // var target = e.target;
    // console.log(target);
    e.target.parentNode.style.display = 'none';

    console.log(e.target.parentNode.style);
  }

  const sampleCategories = () => {
    // categories.map(category => console.log(category.name))
    let storage = []
    // console.log('categories BEFORE', categories)
    categories.forEach((el) => {
      var category = {}
      var id = el.id
      var categoryTasks = tasks.filter(task => task.category_id === el.id)
      // console.log('categoryTasks', categoryTasks)
      category[id] = categoryTasks
      category['name'] = el.name
      // console.log('category', category)

      storage.push(category)
    })
    console.log('storage AFTER', storage)
    setCategorizedTasks(storage)
  }

  useEffect(() => {
    console.log('USING EFFECT')
    sampleCategories()
  }, [])


  return (
    <div id="todo-list" style={{width: '45%', display: 'inline-block'}}>
      <div style={{display: 'flex', height: '50px', width: '100%'}}>
        <div style={{width: '80%'}}>To-Do List</div>
        <Button variant="contained" onClick={() => setNewCategories(newCategories => newCategories.concat('New'))}>Add Category</Button>
        <Button variant="contained" onClick={() => setNewTasks(newTasks => newTasks.concat('New task'))}>Add Task</Button>
      </div>
      <div>
        <Categories categories={newCategories} deleteTask={deleteTask} tasks={newTasks} categorizedTasks={categorizedTasks}/>
        {/* <Tasks tasks={newTasks} /> */}
      </div>
    </div>
  )
}
//don't forget empty array parameter for useEffect !!!

export default ToDoList;