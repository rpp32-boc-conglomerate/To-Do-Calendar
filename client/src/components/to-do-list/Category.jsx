import React, {useState} from 'react';
import Task from './Task.jsx';
import Tasks from './Tasks.jsx';

function Category ({ editTask, deleteTask }) {
  const [totalTime, setTotalTime] = useState(0);
  const [categoryTasks, setCategoryTasks] = useState([]);

  return (
    <div>
      <div style={{display: 'flex'}}>
        <div style={{padding: '10px'}}>New Category</div>
        <div style={{padding: '10px'}}>Total Time {totalTime}</div>
      </div>
      <div>
        <button onClick={() => {
          setTotalTime(totalTime + 1)
          setCategoryTasks(categoryTasks => categoryTasks.concat('New'))
        }}>+ Task</button>
      </div>
      <Tasks tasks={categoryTasks} editTask={editTask} deleteTask={deleteTask} />
    </div>
  )
}

export default Category;