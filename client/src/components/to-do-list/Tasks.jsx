//state array passed as props
//maps through array to render individual task component
import React from 'react';
import Task from './Task.jsx';

<<<<<<< HEAD
function Tasks({tasks, openModal}) {
  return(
    tasks.map((task, i) => <Task key={i} index={i} title={task.title} openModal={openModal}/>)
=======
function Tasks({tasks, editTask, deleteTask}) {
  return(
    tasks.map((task, i) => <Task key={i} index={i} title={task.title} deleteTask={deleteTask}/>)
>>>>>>> 995817ae3ec71ecad2ffbae479cc5105163ca4ec
  )
}

export default Tasks;