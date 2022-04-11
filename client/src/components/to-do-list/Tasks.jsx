//state array passed as props
//maps through array to render individual task component
import React from 'react';
import Task from './Task.jsx';

function Tasks({tasks, editTask, deleteTask}) {
  return(
    tasks.map((task, i) => {
      if (task.inCalendar === false) {
        console.log('TASKS task: ', task);
        return (<Task key={i} index={i} title={task.title} task={task} deleteTask={deleteTask}/>);
      }
    })
  )
}

export default Tasks;