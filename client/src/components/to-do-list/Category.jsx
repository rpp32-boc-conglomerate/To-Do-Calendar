import React, {useState} from 'react';
import Task from './Task.jsx';
import Tasks from './Tasks.jsx';

function Category({tasks, addTask}) {
  console.log('category tasks', tasks)
  const [totalTime, setTotalTime] = useState(0)
  // const [newTasks, setNewTasks] = useState(tasks)

  // function handleClick() {
  //   addTask()
  // }
  return <div id="category">New Category
    <div>Total Time {totalTime}</div>
    <div>
    <button onClick={() => {
      setTotalTime(totalTime + 1);
      // setNewTasks(newTasks => newTasks.concat('New'))
      addTask()
    }
    }>+ Task</button>
    </div>
    <Tasks tasks={tasks} />
  </div>
}

export default Category;