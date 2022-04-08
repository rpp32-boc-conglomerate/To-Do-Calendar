import React, {useState, useCallback} from 'react';
import { BrowserView, MobileView, isBrowser, isMobile} from 'react-device-detect';
import ReactDOM from 'react-dom';
import moment from 'moment';
import Registration from './components/authentication/Registration.jsx';
import Login from './components/authentication/Login.jsx';
import MyCalendar from './components/calendar/MyCalendar.jsx';
import ToDoList from './components/to-do-list/ToDoList.jsx';
import TopBar from './components/TopBar.jsx';

function App () {
  var eventsList = [{
    title: 'Sample Event',
    start: new Date,
    end: new Date(moment().add(1, 'hour')),
    allDay: false
  }]

  const [currentPage, changePage] = useState('home');
  const [myEvents, setMyEvents] = useState(eventsList);
  const [onCalendar, setOnCalendar] = useState(false);

  //Calendar helper functions
  const moveEvent = useCallback(
    ({ event, start, end, isAllDay: droppedOnAllDaySlot = false }) => {
      const { allDay } = event
      if (!allDay && droppedOnAllDaySlot) {
        event.allDay = true
      }

      setMyEvents((prev) => {
        const existing = prev.find((ev) => ev.id === event.id) ?? {}
        const filtered = prev.filter((ev) => ev.id !== event.id)
        return [...filtered, { ...existing, start, end, allDay }]
      })
    },
    [setMyEvents]
  )

  const resizeEvent = useCallback(
    ({ event, start, end }) => {
      setMyEvents((prev) => {
        const existing = prev.find((ev) => ev.id === event.id) ?? {}
        const filtered = prev.filter((ev) => ev.id !== event.id)
        return [...filtered, { ...existing, start, end }]
      })
    },
    [setMyEvents]
  )

  const addToCalendar = function (toDo) {
    //requires object with title, start time, (optional) end time, and (optional) all day setting (boolean)
    //example: this.addToCalendar({title: 'test', start: new Date, end: new Date(moment().add(2, 'hours')), allDay: false})
    var newToDo = {
      title: toDo.title,
      start: toDo.start,
      end: toDo.end ? toDo.end : new Date(moment(toDo.start).add(1, 'hour')),
      allDay: toDo.allDay ? toDo.allDay : false
    }
    updateCalendar(...myEvents, newToDo)
  }
  const renderContent = () => {
    if (isMobile && !onCalendar) {
      return (
        <div>
          <TopBar isMobile={isMobile} onCalendar={onCalendar} setOnCalendar={setOnCalendar}/>
          <ToDoList addToCalendar={addToCalendar}/>
        </div>
      )
    } else if (isMobile && onCalendar) {
      return (
        <div>
          <TopBar isMobile={isMobile} onCalendar={onCalendar} setOnCalendar={setOnCalendar}/>
          <MyCalendar myEvents={myEvents} moveEvent={moveEvent} resizeEvent={resizeEvent}/>
        </div>
      )
    } else {
      return (
        <div>
          <TopBar isMobile={isMobile}/>
          <MyCalendar myEvents={myEvents} moveEvent={moveEvent} resizeEvent={resizeEvent}/>
          <ToDoList addToCalendar={addToCalendar}/>
        </div>
      )
    }

  }
    return (
      <div>
        {/* <MyCalendar myEvents={myEvents} moveEvent={moveEvent} resizeEvent={resizeEvent}/>
        <ToDoList addToCalendar={addToCalendar}/> */}
        {/* <Registration /> */}
        {/* <Login /> */}
        {renderContent()}
      </div>
    );
}

export default App;