//state array passed down as props
//maps through array to render individual category component
import React from 'react';
import Category from './Category.jsx';

function Categories({categories, editTask, deleteTask}) {
  return(
    categories.map((category, i) => <Category key={i} index={i} editTask={editTask} deleteTask={deleteTask}/>)
  )
}
export default Categories;