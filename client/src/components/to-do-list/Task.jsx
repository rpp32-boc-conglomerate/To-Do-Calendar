import React, {useState, useEffect} from 'react';
import {useDrag} from 'react-dnd';
import "./styles.scss";
import { makeStyles, Grid, Card, CardHeader, CardContent, CardActions, Typography, Button, TextareaAutosize, Collapse } from '@material-ui/core';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const TaskOptionsModal = require('../TaskOptionsModal.jsx');

const useStyles = makeStyles((theme) => ({
  grid: {
    display: 'in-line block',
    alignItems: 'center'
  },
  header: {
    fontSize: 12
  },
  textArea: {
    padding: '2rem',
    width: '40vw',
    color: 'blue'
  },
  edit: {
    border: '2px blue solid'
  },

  title: {
    border: '2px black solid'
  }
  // card: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'center'
  // }
}))

//drag div , need to call hook
//isDragging returns t or f
//drag reference which element you want to make draggable
//every element requires a type
function Task({task, openModal, deleteTask}) {
  // console.log('task in task', task )
  const [expanded, setExpanded] = useState(false)
  const [isEditing, setIsEditing] = useState(false)

  const handleEdit = () => {
    setIsEditing(!isEditing)
  }

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const classes = useStyles();

  //the object is what you'll be passing in drop
  // const [{isDragging}, drag] = useDrag(() => ({
  //   type: "task",
  //   id: props.index,
  //   item: {id: props.index},
  //   //define different states/props, but optional

  //   collect: (monitor) => ({
  //     isDragging: !!monitor.isDragging(),
  //   }),
  // }));
  // const [isOpen, setIsOpen] = useState(false);


  return (

    <Grid container xs={12} lg={12}>
      <Grid item xs={12}>
      <Card>
          <CardContent>
            <div style={{display: 'flex', flexDirection: 'row', gap: '5%'}}>
            {/* {todoTitle} */}
            <Typography variant="body1" contentEditable={isEditing}>
              {task.title}
            </Typography>
            <Button variant="contained" size="small" onClick={openModal} >Add To Calendar</Button>
            </div>
            <Typography variant="body2" contentEditable={isEditing} class>
              {task.description}
            </Typography>
            <CardActions>
            <ExpandMoreIcon/>
            <Button variant="contained" size="small" onClick={handleEdit}>{isEditing ? 'Done' : 'Edit'}</Button>
            <Button variant="contained" size="small" onClick={deleteTask}>Delete</Button>
            </CardActions>
          </CardContent>
      </Card>
      </Grid>
    </Grid>

  //  (
    // <Card
    //   id="task"
    //   // index={props.index}
    //   // ref={drag}
    //   className={classes.card}
    //   // style={{border: isDragging ? "2px solid pink" : "0px"}}
    // >
    // <Card>{task.title}
    //   <Button variant="contained" onClick={() => setIsOpen()}>Edit</Button>
    //   <Button variant="contained" onClick={() => console.log('Task X Button Clicked!')}>X</Button>
    //   { isOpen === false && <TaskOptionsModal open={isOpen}/> }
    // </Card>
  )
};

export default Task;