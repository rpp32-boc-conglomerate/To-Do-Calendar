//state array passed down as props
//maps through array to render individual category component
import React from 'react';
import Category from './Category.jsx';

function Categories({addTask, openModal, isMobile, taskData, deleteTask,
  draggedEvent, setDraggedEvent, handleDragStart}) {
  const categorizedTasks = taskData
  return(
    categorizedTasks.length ? categorizedTasks.map((category, i) => {
    return <Category key={i}
    tasks={category}
    addTask={addTask}
    isMobile={isMobile} draggedEvent={draggedEvent}
    setDraggedEvent={setDraggedEvent} handleDragStart={handleDragStart}/>
    }): null
  )
}

export default Categories;