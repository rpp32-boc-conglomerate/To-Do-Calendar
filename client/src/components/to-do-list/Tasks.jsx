import React from 'react';
import Task from './Task.jsx';

function Tasks({tasks, openModal, isMobile, deleteTask, draggedEvent, setDraggedEvent, handleDragStart}) {
  // console.log('tasks in tasks', tasks)
  const filteredTasks = tasks.filter(task => !task.in_calendar)
  // console.log('filteredTasks', filteredTasks)

  const formatTask = (task) => {
    const taskCopy = task
    const startTime = task.start
    const endTime = task.end_date
    taskCopy.start = new Date(startTime)
    taskCopy.end_date = new Date(endTime)
    return taskCopy
  }
  return(
    filteredTasks.map((task, i) => {
    return (<Task style={{display: 'inline-block'}}
    key={i} task={formatTask(task)} isMobile={isMobile} draggedEvent={draggedEvent}
    setDraggedEvent={setDraggedEvent} handleDragStart={handleDragStart}/>)
    }
   )
 )
};

export default Tasks;
