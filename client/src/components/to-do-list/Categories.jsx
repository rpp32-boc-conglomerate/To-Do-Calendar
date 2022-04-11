//state array passed down as props
//maps through array to render individual category component
import React from 'react';
import Category from './Category.jsx';

function Categories({addTask, openModal, categorizedTasks, deleteTask}) {
  // console.log('tasks in categories', categorizedTasks)
  return(
    categorizedTasks.map((category, i) => {
    return <Category key={i}
    tasks={category}
    addTask={addTask} openModal={openModal}
    deleteTask={deleteTask}/>
    })
  )
}
export default Categories;