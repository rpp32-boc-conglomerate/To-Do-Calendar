import React from 'react';
import Paper from '@mui/material/Paper';

function TestToDo(props) {
  var test = {
    id: 1,
    title: 'Trip to China',
    description: '5-day business trip to meet with manufacturers',
    duration: '5 days',
    start: new Date('April 9, 2022 09:30:00'),
    end: new Date('April 13, 2022 09:30:00'),
    category_id: 1,
    inCalendar: true
  }
  return (
    <Paper style={{height: '300px', width: '300px'}} onDragStart={() => props.handleDragStart(test)} draggable='true'>{JSON.stringify(test)}</Paper>
  )
}

export default TestToDo;