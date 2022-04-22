//state array passed down as props
//maps through array to render individual category component
import React from 'react';
import Category from './Category.jsx';

function Categories({addTodo, openModal, isMobile, taskData, deleteTask,
  draggedEvent, setDraggedEvent, handleDragStart, openSetNewToDo}) {
  const categorizedTasks = taskData
  return(
    categorizedTasks.length ? categorizedTasks.map((category, i) => {
    return <Category key={i}
    tasks={category}
    isMobile={isMobile} draggedEvent={draggedEvent}
    setDraggedEvent={setDraggedEvent} handleDragStart={handleDragStart}
    addTodo={addTodo}/>
    }): null
  )
}

export default Categories;