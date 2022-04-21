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

var AddCategoryModal = (props) => {

  const [category, setCategory] = useState('');

  const classes = useStyles();

  const handleAddCategory = () => {
    props.addCategory(category);
    props.closeCat(false);
  }

  return (
      <Modal open={props.open} >
        <Container className={classes.modal}>
          <TextField id="new_category" type="text" label="New Category" className={classes.input} defaultValue={''} onChange={(newValue) => setCategory(newValue.target.value)} />
          <Button variant="contained" onClick={() => handleAddCategory()}>Submit</Button>
        </Container>
      </Modal>
  );
};

export default AddCategoryModal;