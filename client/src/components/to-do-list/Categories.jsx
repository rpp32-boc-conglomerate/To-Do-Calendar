//state array passed down as props
//maps through array to render individual category component
import React from 'react';
import Category from './Category.jsx';

function Categories ({addTask, isMobile, categorizedTasks, clickedTask, updateTodo, deleteTodo}) {
  return (
    categorizedTasks.map((category, i) => {
      return <Category key={i} tasks={category} updateTodo={updateTodo} deleteTodo={deleteTodo}
        addTask={addTask} isMobile={isMobile} clickedTask={clickedTask}
        />
      })
  )
}
export default Categories;