import React from 'react';
import Task from './Task.jsx';

function Tasks({tasks, openModal, isMobile, deleteTask, draggedEvent, setDraggedEvent, handleDragStart}) {
  // console.log('tasks in tasks', tasks)
  const todoItems = tasks.map(item => item.todoitems)
  const filteredTodoItems = todoItems.filter(task => !task.in_calendar)
  console.log('filteredTasks', filteredTodoItems)
  return(
    filteredTodoItems.map((task, i) => {
    return (<Task style={{display: 'inline-block'}}
    key={i} task={task} isMobile={isMobile} draggedEvent={draggedEvent}
    setDraggedEvent={setDraggedEvent} handleDragStart={handleDragStart}/>)
    }
   )
 )
};

export default Tasks;
