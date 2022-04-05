import React, {useState} from 'react';
import ToDoList from './ToDoList.jsx';
import Tasks from './Tasks.jsx';
import Task from './Task.jsx';
import {useDrop} from 'react-dnd';
import "./styles.scss"


function Drop({tasks}) {
  console.log('drop tasks', tasks)
  const [board, setBoard] = useState([]);
  const[{isOver}, drop] = useDrop(() => ({
    accept: "task",
    drop: (item, monitor) => addTaskToBoard(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  const addTaskToBoard = (item) => {
    console.log('id addTaskToBoard', item);
    const draggedTasks = tasks.filter((task) => {
      console.log('item.id', item.id)
      console.log('task.index', task.index)
      item.id === task.index
    });
    console.log('draggedTasks', draggedTasks)
    setBoard((board) => [...board, draggedTasks])
  };
  return <div id="drop-board" ref={drop} style={{border: isOver ? "5px solid pink" : "10px solid red"}}>drop board
    {board?.map((item, i) => {
      console.log('board map task', item)
      return <Task key={i} index={item.id}/>
    })}
  </div>
}

export default Drop;