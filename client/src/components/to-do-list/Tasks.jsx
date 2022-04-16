import React from 'react';
import Task from './Task.jsx';

<<<<<<< HEAD
function Tasks({tasks, openModal, isMobile, deleteTask, draggedEvent, setDraggedEvent, handleDragStart}) {
  console.log('tasks in tasks', tasks)
  return(
    tasks.map((task, i) => {
    return (<Task style={{display: 'inline-block'}}
    key={i} task={task} openModal={openModal} isMobile={isMobile}
    deleteTask={deleteTask} draggedEvent={draggedEvent}
    setDraggedEvent={setDraggedEvent} handleDragStart={handleDragStart}/>)
    }
  )
=======
function Tasks ({tasks, openModal, isMobile, deleteTask, handleModalOpen, isOpen, clickedTask}) {
  return (
    tasks.map((task, i) => {
      if (task.in_calendar === false) {
        return (<Task key={i} task={task} openModal={openModal} deleteTask={deleteTask} handleModalOpen={handleModalOpen} isOpen={isOpen} clickedTask={clickedTask}/>)
      }
    })
>>>>>>> f22e95f6c3427b3bb345d76a8cdfcf430fdc7b16
  )
}

// Will need for different functionality as a prop passed down to Task
// editClick={editClick} editing={editing}

export default Tasks;
