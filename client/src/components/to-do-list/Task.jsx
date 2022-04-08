import React, {useEffect} from 'react';

function Task({ editTask, deleteTask }) {
  return (
    <div draggable style={{display: 'flex', padding: '10px', margin: '10px', backgroundColor: 'yellow'}}>
      <div style={{width: '90%'}}>New Task</div>
      <button onClick={(e) => editTask(e)}>Edit</button>
      <button onClick={(e) => deleteTask(e)}>X</button>
    </div>
  );
}

export default Task;