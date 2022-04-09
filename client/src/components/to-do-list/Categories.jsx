//state array passed down as props
//maps through array to render individual category component
import React from 'react';
import Category from './Category.jsx';

function Categories({categories, tasks, addTask, deleteTask}) {
  return(
    categories.map((category, i) => <Category key={i} index={i} tasks={tasks} addTask={addTask} deleteTask={deleteTask}/>)
  )
}
export default Categories;