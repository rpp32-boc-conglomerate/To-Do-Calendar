import React, {useState} from 'react';
import Task from './Task.jsx';
import Tasks from './Tasks.jsx';

function Category() {
  const [totalTime, setTotalTime] = useState(0)
  const [categoryTasks, setCategoryTasks] = useState([])

  return <div>New Category
    <div>Total Time {totalTime}</div>
    <div>
    <button onClick={() => {
      setTotalTime(totalTime + 1)
      setCategoryTasks(categoryTasks => categoryTasks.concat('New'))
    }
    }>+ Task</button>
    </div>
    <Tasks tasks={categoryTasks} />
  </div>
}

export default Category;