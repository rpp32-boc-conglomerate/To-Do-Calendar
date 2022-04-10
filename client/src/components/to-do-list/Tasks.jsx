//state array passed as props
//maps through array to render individual task component
import React from 'react';
import Task from './Task.jsx';

function Tasks({tasks, editTask, deleteTask, id}) {
  // console.log('tasks in tasks', tasks)
  const {array} = tasks
  console.log('tasks in tasks', tasks[id + 1])
  const listOfTasks = tasks[id + 1]
  return(
    listOfTasks.map((task, i) => {
      // console.log('task in tasks map', task)
    return (<Task key={i} i={i} task={task} deleteTask={deleteTask}/>)
    }
  )
  )
}

export default Tasks;

// category = {
//   1: [{id: 1, title: 'Trip to China'},
//       {id: 2, title: 'Trip to LA'}],
//   id: 1,
//   name: 'Travel'
// }