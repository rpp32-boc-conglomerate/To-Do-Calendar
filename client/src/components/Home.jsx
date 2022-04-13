import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Login from './authentication/Login.jsx';
import Registration from './authentication/Registration.jsx';
import MyCalendar from './calendar/MyCalendar.jsx';
import ToDoList from './to-do-list/ToDoList.jsx';
import TopBar from './TopBar.jsx';

function Home (
  {isMobile={isMobile},
   isLoggedIn={isLoggedIn},
   isLoading={isLoading},
   setIsLoggedIn={setIsLoggedIn},
   onCalendar={onCalendar},
   setOnCalendar={setOnCalendar},
   addToCalendar={addToCalendar},
   myEvents={myEvents},
   moveEvent={moveEvent},
   resizeEvent={resizeEvent}}){


  const naviBar = (<TopBar isMobile={isMobile} onCalendar={onCalendar} setOnCalendar={setOnCalendar}/>)
  const toDoList = (<ToDoList addToCalendar={addToCalendar} isMobile={isMobile}/>)

  // useEffect(async () => {
  //   axios.get('http://localhost:3000/auth/isLoggedIn', {withCredentials: true})
  //   .then((result) => {
  //     setIsLoggedIn(result.data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })
  // }, [])

  const naviBar = (<TopBar isLoading={isLoading} setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} isMobile={isMobile} onCalendar={onCalendar} setOnCalendar={setOnCalendar}/>)
  const toDoList = (<ToDoList addToCalendar={addToCalendar}/>)

  const myCalender = (<MyCalendar myEvents={myEvents} moveEvent={moveEvent} resizeEvent={resizeEvent}/>)

  // condition redering base on device
  const renderContent = () => {
    // view for mobile and in to do list page
    if (isMobile && !onCalendar) {
      return (
        <div>
          {naviBar}
          <div className="">
            {toDoList}
          </div>
        </div>
      )
    } else if (isMobile && onCalendar) {
      // // view for mobile and in calendar page
      return (
        <div>
          {naviBar}
          <div>
            {myCalender}
          </div>
        </div>
      )
    } else {
      return (
        // view for desktop display both calendar and to do list
        <div>
          {naviBar}
          <div>
            {myCalender}
            {toDoList}
          </div>
        </div>
      )
    }
 }
  return (
    <div>
      {renderContent()}
    </div>
  )
}

export default Home;