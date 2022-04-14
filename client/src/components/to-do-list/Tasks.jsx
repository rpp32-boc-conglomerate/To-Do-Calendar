//state array passed as props
//maps through array to render individual task component
import React from 'react';
import Task from './Task.jsx';

function Tasks({tasks, openModal, isMobile, deleteTask}) {
  // console.log('tasks in tasks', tasks)
  return(
    tasks.map((task, i) => {
<<<<<<< HEAD
    return (<Task style={{display: 'inline-block'}}
    key={i} task={task} openModal={openModal} isMobile={isMobile}
    deleteTask={deleteTask}/>)
    }
  )
=======
      // console.log('Task: ', task);
      if (task.inCalendar === false) {
        return (<Task key={i} task={task} openModal={openModal} editClick={editClick} editing={editing} deleteTask={deleteTask}/>)
      }
    })
>>>>>>> f06c4a7cdf41b60cd40aa52cf9227935561e96b4
  )
}

export default Tasks;
