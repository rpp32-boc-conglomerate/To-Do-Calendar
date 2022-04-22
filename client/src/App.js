import React, {useState, useEffect, Suspense} from 'react';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios'
// import ReactDOM from 'react-dom';
const Registration  = React.lazy(() => import('./components/authentication/Registrationv2.jsx'));
const Login  = React.lazy(() => import('./components/authentication/Login.jsx'));
import Home from './components/Home.jsx';
import { example } from './../../database/example.js'

function App() {
  const [currentPage, changePage] = useState("home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


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



  // all the props would pass to the homepage: './components/Home.jsx'
  const homePage = (
    <Home
      setIsLoading={setIsLoading}
      isMobile={isMobile}
      isLoggedIn={isLoggedIn}
      setIsLoggedIn={setIsLoggedIn}
      isLoading={isLoading}
    />
  );

  return (
    // react router
    <div>
      <Router>
        <Routes>
          <Route path="/" element={homePage} />
          <Route path="/signin" element={
            <Suspense fallback={<div>Loading...</div>}>
              <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
            </Suspense>
          } />
          <Route path="/signup" element={
            <Suspense fallback={<div>Loading...</div>}>
              <Registration />
            </Suspense>
          } />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
