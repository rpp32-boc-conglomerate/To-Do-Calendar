import React, {useEffect} from 'react';
import {useDrag} from 'react-dnd';
import "./styles.scss";

//drag div , need to call hook
//isDragging returns t or f
//drag reference which element you want to make draggable
//every element requires a type
function Task(props) {
  const [{isDragging}, drag] = useDrag(() => ({
    type: "task",
    item: {id: props.index},
    //define different states/props, but optional
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return  (
  <div
    id="task"
    index={props.index}
    ref={drag}
    style={{border: isDragging ? "2px solid pink" : "0px"}}
  >{props.index}</div>
  );
};

export default Task;