//state array passed down as props
//maps through array to render individual category component
import React from 'react';
import Category from './Category.jsx';

function Categories({addTask, isMobile, categorizedTasks,
  draggedEvent, setDraggedEvent, handleDragStart, events}) {

  return(
    categorizedTasks.map((category, i) => {
    return <Category key={i}
    tasks={category}
    addTask={addTask}
    isMobile={isMobile} draggedEvent={draggedEvent}
    setDraggedEvent={setDraggedEvent} handleDragStart={handleDragStart}/>
    })
  )

    // return <Category
    // tasks={categorizedTasks}
    // addTask={addTask} openModal={openModal}
    // isMobile={isMobile} deleteTask={deleteTask} draggedEvent={draggedEvent}
    // setDraggedEvent={setDraggedEvent} handleDragStart={handleDragStart}/>
    }

export default Categories;