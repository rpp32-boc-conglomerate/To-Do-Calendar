import React, {useState} from 'react';
import ToDoList from './ToDoList.jsx';
import Tasks from './Tasks.jsx';
import {useDrop} from 'react-dnd';

function Drop({tasks}) {
  const [board, setBoard] = useState(tasks);
  const[{isOver}, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => addTaskToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  const addTaskToBoard = (id) => {
    console.log('id', id)
  };
  return <div className="drop-board">
    {board.map((task, i) => {
      return <Task/>
    })}
  </div>
}

export default Drop;