//state array passed down as props
//maps through array to render individual category component
import React from 'react';
import Category from './Category.jsx';

function Categories({categories, addTask, openModal, categorizedTasks}) {
  console.log('tasks in categories', categorizedTasks)
  return(
    categorizedTasks.map((category, i) => <Category key={i} id={i}
    categorizedTasks={categorizedTasks}
    addTask={addTask} openModal={openModal} title={category.name} />)
  )
}
export default Categories;