import React, { useEffect, useState } from 'react';
import { useDrag } from 'react-dnd';
import "./styles.scss";
import { makeStyles, Container, Grid, Card, ButtonGroup, Button, TextareaAutosize, TextField } from '@material-ui/core';

const TaskOptionsModal = require('../TaskOptionsModal.jsx');

const useStyles = makeStyles({
  textArea: {
    padding: '1rem',
    width: '90%',
    color: 'blue'
  },
  card: {
    display: 'flex',
    border: '2rem solid black',
  }
});


// drag div, need to call hook
// isDragging returns t or f
// drag reference which element you want to make draggable
// every element requires a type
var Task = (props) => {
  // the object is what you'll be passing in drop
  const classes = useStyles();

  const [{isDragging}, drag] = useDrag(() => ({
    type: "task",
    item: {id: props.index},
    //define different states/props, but optional

    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [isOpen, setIsOpen] = useState(false);

  console.log('Task', props.task);

  return (
    <Card
      id="task"
      index={props.index}
      ref={drag}
      className={classes.card}
      // style={{border: isDragging ? "2px solid pink" : "0px"}}
    >
      <TextField
        disabled
        defaultValue={props.task.title}
        className={classes.textArea}
      />
      <TextField
        disabled
        defaultValue={props.task.duration}
        className={classes.textArea}
      />
      <Button variant="contained" onClick={() => setIsOpen()}>Edit</Button>
      <Button variant="contained" onClick={() => console.log('Task X Button Clicked!')}>X</Button>
      {/* { isOpen === false && <TaskOptionsModal open={isOpen}/> } */}
    </Card>
  );
};

export default Task;

// function DraggableComponent(props) {
//   const [collected, drag, dragPreview] = useDrag(() => ({
//     type,
//     item: { id }
//   }))
//   return collected.isDragging ? (
//     <div ref={dragPreview} />
//   ) : (
//     <div ref={drag} {...collected}>
//       ...
//     </div>
//   )
// }