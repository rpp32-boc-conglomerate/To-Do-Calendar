import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import Registration from './components/authentication/registration.jsx';
import MyCalendar from './components/calendar/MyCalendar.jsx';
import './CalendarStyle.scss'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 'home',
      events: [{
        title: 'Sample Event',
        start: new Date,
        end: new Date(moment().add(1, 'hour')),
        allDay: false
      }]
    }
  }

  render() {
    return (
      <>
        <MyCalendar myEventsList={this.state.events}/>
        <Registration />
        <div />
      </>
    );
  }
}

export default App;