//state array passed down as props
//maps through array to render individual category component
import React from 'react';
import Category from './Category.jsx';

function Categories({addTask, openModal, isMobile, taskData, deleteTask,
  draggedEvent, setDraggedEvent, handleDragStart}) {
    console.log('tasks in categories', taskData)
    const categorizedTasks = taskData.categories
    console.log('categortasks', categorizedTasks)
  return(
    categorizedTasks?.map((category, i) => {
    return <Category key={i}
    tasks={category}
    addTask={addTask}
    isMobile={isMobile} draggedEvent={draggedEvent}
    setDraggedEvent={setDraggedEvent} handleDragStart={handleDragStart}/>
    })
  )
}

export default Categories;