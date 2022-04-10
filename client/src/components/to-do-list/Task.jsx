import React, {useEffect} from 'react';
import {useDrag} from 'react-dnd';
import "./styles.scss";
import { makeStyles, Container, Grid, Card, ButtonGroup, Button, TextareaAutosize } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  textArea: {
    padding: '2rem',
    width: '40vw',
    color: 'blue'
  },
  card: {
    border: '2rem solid black',
    display: 'flex'
  }
}))


//drag div , need to call hook
//isDragging returns t or f
//drag reference which element you want to make draggable
//every element requires a type
function Task({task}) {
  console.log('task in task', task )
  //the object is what you'll be passing in drop
  const classes = useStyles();
  // const [{isDragging}, drag] = useDrag(() => ({
  //   type: "task",
  //   id: props.index,
  //   item: {id: props.index},
  //   //define different states/props, but optional

  //   collect: (monitor) => ({
  //     isDragging: !!monitor.isDragging(),
  //   }),
  // }));

  return (
    <div style={{display: 'flex'}}>
  <Card
    id="task"
    // index={props.index}
    // ref={drag}
    className={classes.card}
    // onTouchStart={props.openModal}
    // onClick={props.openModal}
    // style={{border: isDragging ? "2px solid pink" : "0px"}}
  >{task.title}
  {/* //   <div>{task[i].title}</div>
  //   {/* <TextareaAutosize
  //     aria-label="empty textarea"
  //     placeholder="Empty"
  //     className={classes.textArea}
  //   /> */}
  <Button variant="contained" onClick={() => console.log('Task X Button Clicked!')}>X</Button>

  </Card>
  </div>
  );
};

export default Task;