import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import { Button, TextField, Modal, Stack, InputLabel, Select, MenuItem, Container, makeStyles, IconButton} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 600,
    backgroundColor: 'white',
    boxShadow: 24,
    display: 'inline-block',
    borderRadius: '3px',
    padding: '1rem'
  },
  input: {
    margin: '1rem'
  }
}));

var AddToDoModal = (props) => {
  const classes = useStyles();

  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [duration, setDuration] = useState(null);
  const [start, setStart] = useState(null);
  const [category, setCategory] = useState(null);

  let userCats = [];

  if (props.info.calendars) {
  userCats = props.info.calendars[0].categories;
  console.log('user cats: ', userCats);
  }

  const handleAddTodo = () => {

    //props.addCategory(category);
    props.closeCat(false)
  }

  return (
      <Modal open={props.open} >
        <Container className={classes.modal}>
          <TextField label="Title" id="title" type="text" className={classes.input} onChange={(newValue) => setTitle(newValue.target.value)} />
          <TextField label="Description" id="description" type="text" className={classes.input} onChange={(newValue) => setDescription(newValue.target.value)} />
          <TextField label="Duration" id="duration" type="duration" className={classes.input} onChange={(newValue) => setDuration(newValue.target.value)} />
          <TextField id="start" type="date" className={classes.input} onChange={(newValue) => setStart(newValue.target.value)} />
          <Select id="category" className={classes.input} onChange={(newValue) => setCategory(newValue.target.value)}>
          {userCats.map(option => {
          return (
            <MenuItem key={option.category_id} value={option.category}>
              {option.category}
            </MenuItem>
          )
})}
          </Select>
          <Button variant="contained" onClick={() => handleAddTodo()}>Submit</Button>
        </Container>
      </Modal>
  );
};

export default AddToDoModal;