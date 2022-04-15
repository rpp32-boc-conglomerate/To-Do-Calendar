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

  return (
      <Modal open={props.open} >
        <Container className={classes.modal}>
          <TextField label="Title" id="title" type="text" className={classes.input} />
          <TextField label="Description" id="description" type="text" className={classes.input} />
          <TextField label="Duration" id="duration" type="duration" className={classes.input} />
          <TextField id="start" type="date" className={classes.input} />
          <Button variant="contained" onClick={() => props.closeCat(false)}>Submit</Button>
        </Container>
      </Modal>
  );
};

export default AddToDoModal;