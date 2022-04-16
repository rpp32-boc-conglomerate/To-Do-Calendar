//state array passed down as props
//maps through array to render individual category component
import React from 'react';
import Category from './Category.jsx';

<<<<<<< HEAD
function Categories({addTask, openModal, isMobile, categorizedTasks, deleteTask,
  draggedEvent, setDraggedEvent, handleDragStart, events}) {
  console.log('events in categories', events)
  // return(
  //   events.map((category, i) => {
  //   return <Category key={i}
  //   tasks={category}
  //   addTask={addTask} openModal={openModal}
  //   isMobile={isMobile} deleteTask={deleteTask} draggedEvent={draggedEvent}
  //   setDraggedEvent={setDraggedEvent} handleDragStart={handleDragStart}/>
  //   })

    return <Category
    tasks={events}
    addTask={addTask} openModal={openModal}
    isMobile={isMobile} deleteTask={deleteTask} draggedEvent={draggedEvent}
    setDraggedEvent={setDraggedEvent} handleDragStart={handleDragStart}/>
    }

=======
function Categories ({addTask, openModal, isMobile, categorizedTasks, deleteTask, handleModalOpen, isOpen, clickedTask}) {
  return (
    categorizedTasks.map((category, i) => {
      return <Category key={i} tasks={category}
        addTask={addTask} openModal={openModal}
        isMobile={isMobile} deleteTask={deleteTask}
        handleModalOpen={handleModalOpen} isOpen={isOpen} clickedTask={clickedTask}
        />
      })
  )
}
>>>>>>> f22e95f6c3427b3bb345d76a8cdfcf430fdc7b16
export default Categories;