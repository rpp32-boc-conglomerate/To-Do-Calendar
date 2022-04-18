import React, {useState, useEffect} from 'react';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios'
import ReactDOM from 'react-dom';
import Registration from './components/authentication/Registrationv2.jsx';
import Login from './components/authentication/Login.jsx';
import Home from './components/Home.jsx';
import { example } from './../../database/example.js'

function App() {
  const [currentPage, changePage] = useState("home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userEmail, setEmail] = useState(null);
  const [info, setInfo] = useState([]);

  useEffect(async () => {
    await axios.get('http://localhost:3000/auth/isLoggedIn', {withCredentials: true})
    .then( async (result) => {
      console.log('is login auth:', result.data)
      setIsLoading(false);
      if (result.data) {
        console.log('is login auth:', result.data)
        setIsLoggedIn(result.data.loggedIn);
        setEmail(result.data.info)
        await axios.get('http://localhost:3000/todoList/info',{ params: { email: result.data.info } })
        .then((response) => {
          console.log('info response:', response.data.results[0])
          setInfo(response.data.results[0]);
        })
        .catch((err) => {
          console.log('info err:', err);
          return err;
        })
      }
    })
    .catch((err) => {
      console.log(err);
      return err;
    })
  }, [isLoggedIn])

  // useEffect(() => {
  //   axios.get('http://localhost:3000/auth/userEmail', {withCredentials: true})
  //   .then((result) => {
  //     console.log('result:', result);
  //     setEmail(result.data.username);
  //   })
  //   .catch((err) => {
  //     // Default email for DEMO Landing Page
  //     setEmail('1@qq.com');
  //     console.log(err);
  //   })
  // }, [userEmail])


  // const naviBar = (<TopBar isMobile={isMobile} onCalendar={onCalendar} setOnCalendar={setOnCalendar}/>)
  // const toDoList = (<ToDoList addToCalendar={addToCalendar}/>)
  // const myCalender = (<MyCalendar myEvents={myEvents} moveEvent={moveEvent} resizeEvent={resizeEvent}/>)

  // all the props would pass to the homepage: './components/Home.jsx'
  const homePage = (
    <Home
      isMobile={isMobile}
      isLoggedIn={isLoggedIn}
      setIsLoggedIn={setIsLoggedIn}
      isLoading={isLoading}
      userEmail={userEmail}
      info={info}
    />
  );

  return (
    // react router
    <div>
      <Router>
        <Routes>
          <Route path="/" element={homePage} />
          <Route path="/signin" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="/signup" element={<Registration />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
