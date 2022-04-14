//state array passed as props
//maps through array to render individual task component
import React from 'react';
import Task from './Task.jsx';

function Tasks ({tasks, openModal, isMobile, deleteTask}) {
  return (
    tasks.map((task, i) => {
      if (task.in_calendar === false) {
        return (<Task key={i} task={task} openModal={openModal} deleteTask={deleteTask}/>)
      }
    })
  )
}

// Will need for different functionality as a prop passed down to Task
// editClick={editClick} editing={editing}

export default Tasks;
