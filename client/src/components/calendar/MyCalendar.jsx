import React, { Fragment, useCallback, useMemo, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import './CalendarStyle.scss';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';

const DragAndDropCalendar = withDragAndDrop(Calendar)
const localizer = momentLocalizer(moment);

const MyCalendar = (props) => {
  var calEvents = props.myEvents.filter(item => { if (item.inCalender === true) {
    return item
  }})
  console.log(calEvents)
  return (
    <DragAndDropCalendar
      className='calendar'
      localizer={localizer}
      defaultView="week"
      events={calEvents}
      startAccessor="start"
      endAccessor="end"
      onSelectEvent={(event) => {
        props.changeTitle(event);
      }}
      onEventDrop={props.moveEvent}
      onEventResize={props.resizeEvent}
      onDropFromOutside={props.onDropFromOutside}
      style={{ height: 1000 }}
    />
  )
}

export default MyCalendar;