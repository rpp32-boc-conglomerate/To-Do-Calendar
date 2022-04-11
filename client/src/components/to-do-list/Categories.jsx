//state array passed down as props
//maps through array to render individual category component
import React from 'react';
import Category from './Category.jsx';

function Categories({taskData, addTask, deleteTask}) {
  return(
    taskData.map((category, i) => <Category key={i} index={i} tasks={category.tasks} addTask={addTask} deleteTask={deleteTask}/>)
  )
}
export default Categories;