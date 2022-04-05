import React from 'react';
import ReactDOM from 'react-dom';
import Registration from './components/authentication/registration.jsx';
import MyCalendar from './components/calendar/MyCalendar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 'home'
    }
  }


  render() {
    if (this.state.currentPage === 'registration') {
      return (
        <>

          {/* <MyCalendar /> */}
          <Registration />
          <div />
        </>
      );
    }
    return (
      <>

        {/* <MyCalendar /> */}
        <Registration />
        <div />
      </>
    );
  }
}

export default App;