import React, {useState, useCallback, useEffect} from 'react';
import { BrowserView, MobileView, isBrowser, isMobile} from 'react-device-detect';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios'
import ReactDOM from 'react-dom';
import moment from 'moment';
import Registration from './components/authentication/Registrationv2.jsx';
import Login from './components/authentication/Login.jsx';
import MyCalendar from './components/calendar/MyCalendar.jsx';
import ToDoList from './components/to-do-list/ToDoList.jsx';
import TopBar from './components/TopBar.jsx';
import Home from './components/Home.jsx';

function App() {
  const [currentPage, changePage] = useState("home");
  const [myEvents, setMyEvents] = useState([
    {
      id: 0,
      title: "Sample Event",
      start_date: new Date(),
      end_date: new Date(moment().add(1, "hour")),
      allDay: false,
      inCalendar: true
    },
  ]);
  const [onCalendar, setOnCalendar] = useState(false);
  const [draggedEvent, setDraggedEvent] = useState()
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userEmail, setEmail] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/auth/isLoggedIn', {withCredentials: true})
    .then((result) => {
      console.log('is login auth:', result.data)
      setIsLoggedIn(result.data);
      setIsLoading(false);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [isLoggedIn])

  useEffect(() => {
    axios.get('http://localhost:3000/auth/userEmail', {withCredentials: true})
    .then((result) => {
      console.log('result:', result);
      setEmail(result.data.username);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [userEmail])

  //Calendar helper functions
  const moveEvent = useCallback(
    ({ event, start, end, isAllDay: droppedOnAllDaySlot = false }) => {
      const { allDay } = event;
      if (!allDay && droppedOnAllDaySlot) {
        event.allDay = true;
      }

      setMyEvents((prev) => {
        const existing = prev.find((ev) => ev.id === event.id) ?? {};
        const filtered = prev.filter((ev) => ev.id !== event.id);
        return [...filtered, { ...existing, start, end, allDay }];
      });
    },
    [setMyEvents]
  );

  const newEvent = useCallback(
    (event) => {
      setMyEvents((prev) => {
        const idList = prev.map((item) => item.id)
        const newId = Math.max(...idList) + 1
        return [...prev, { ...event, id: newId }]
      })
    },
    [setMyEvents]
  )

  const resizeEvent = useCallback(
    ({ event, start, end }) => {
      setMyEvents((prev) => {
        const existing = prev.find((ev) => ev.id === event.id) ?? {};
        const filtered = prev.filter((ev) => ev.id !== event.id);
        return [...filtered, { ...existing, start, end }];
      });
    },
    [setMyEvents]
  );

  const changeTitle = (event) => {
    var title = prompt("Change title", event.title);
    var newList = myEvents;
    setMyEvents((prev) => {
      newList[prev.indexOf(event)].title = title;
      return newList
    });
  };
  const handleDragStart = useCallback((event) => setDraggedEvent(event), [])

  const onDropFromOutside = useCallback(
    () => {
      setMyEvents((prev) => {
        const existing = draggedEvent;
        existing.inCalendar = !existing.inCalendar;
        const filtered = prev.filter((ev) => ev.id !== draggedEvent.id);
        return [...filtered, { ...existing }];
      });
      setDraggedEvent(null)
    },
    [draggedEvent, setDraggedEvent, newEvent]
  )
  // const naviBar = (<TopBar isMobile={isMobile} onCalendar={onCalendar} setOnCalendar={setOnCalendar}/>)
  // const toDoList = (<ToDoList addToCalendar={addToCalendar}/>)
  // const myCalender = (<MyCalendar myEvents={myEvents} moveEvent={moveEvent} resizeEvent={resizeEvent}/>)

  // all the props would pass to the homepage: './components/Home.jsx'
  const homePage = (
    <Home
      isMobile={isMobile}
      isLoggedIn={isLoggedIn}
      setIsLoggedIn={setIsLoggedIn}
      onCalendar={onCalendar}
      setOnCalendar={setOnCalendar}
      myEvents={myEvents}
      moveEvent={moveEvent}
      resizeEvent={resizeEvent}
      newEvent={newEvent}
      changeTitle={changeTitle}
      handleDragStart={handleDragStart}
      draggedEvent={draggedEvent}
      setDraggedEvent={setDraggedEvent}
      onDropFromOutside={onDropFromOutside}
      isLoading={isLoading}
      userEmail={userEmail}
    />
  );

  return (
    // react router
    <div>
      <Router>
        <Routes>
          <Route path="/" element={homePage} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Registration />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
