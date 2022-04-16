import React from 'react';
import Task from './Task.jsx';

function Tasks ({tasks, isMobile, updateTodo, deleteTodo, clickedTask}) {
  return (
    tasks.map((task, i) => {
      if (task.in_calendar === false) {
        return (<Task key={i} task={task} clickedTask={clickedTask} updateTodo={updateTodo} deleteTodo={deleteTodo} />)
      }
    })
  )
}

// Will need for different functionality as a prop passed down to Task
// editClick={editClick} editing={editing}

export default Tasks;
