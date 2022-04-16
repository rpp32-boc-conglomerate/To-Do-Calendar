import React, { useState, useEffect } from 'react';
import { useDrag } from 'react-dnd';
import moment from 'moment';
import ContentEditable from 'react-contenteditable';
import { Button, Grid, Card, CardHeader, CardContent, CardActions, Collapse, makeStyles, Typography, Toolbar, TextField,  TextareaAutosize, Stack } from '@material-ui/core';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TaskOptionsModal from '../TaskOptionsModal.jsx';

//on hover over editable field -- pen icon or underline
const useStyles = makeStyles({
  grid: {
    display: 'inline-block',
    alignItems: 'center'
  },
  header: {
    fontSize: 12
  },
  textArea: {
    padding: '1rem',
    width: '90%',
    color: 'black'
  },
  card: {
    display: 'flex',
    border: '1rem solid black'
  }
  })


//only want task.in_calendar === false
function Task({task, openModal, isMobile, deleteTask, draggedEvent, setDraggedEvent, handleDragStart, myEvents}) {
  // console.log('task in task', task )

  const [userTask, setUserTask] = useState(task);
  const [expanded, setExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [hasDates, setHasDates] = useState(false);
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date(moment(Date.now()).add(2, 'hours')));

  // For Modal opening and closing
  const [modalOpen, setModalOpen] = useState(false);
  // const [modalInfo, setModalInfo] = useState();

  const handleEdit = () => {
    setIsEditing(!isEditing);
    console.log('isediting')
    //setOpen modal to true
  };

  const classes = useStyles();

  return (
    <Grid item xs={12} lg={12}>
      <Grid item xs={12}>
      <Card onDragStart={() => handleDragStart(task)} draggable='true'>
          <CardContent>
            <div style={{display: 'flex', flexDirection: 'row', gap: '5%'}}>
              <Typography>
                {task.title}
              </Typography>
              {isMobile && addToCal}
            </div>
            <Typography>
                {task.description}
              </Typography>
            <CardActions>
              <Button variant="contained" size="small" onClick={() => setModalOpen(true)}>Edit</Button>
            </CardActions>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Task;