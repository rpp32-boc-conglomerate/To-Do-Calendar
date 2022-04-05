import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import Registration from './components/authentication/registration.jsx';
import MyCalendar from './components/calendar/MyCalendar.jsx';
import ToDoList from './components/to-do-list/ToDoList.jsx';

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
    this.addToCalendar = this.addToCalendar.bind(this);
  }
  addToCalendar(toDo) {
    //requires object with title, start time, (optional) end time, and (optional) all day setting (boolean)
    //example: this.addToCalendar({title: 'test', start: new Date, end: new Date(moment().add(2, 'hours')), allDay: false})
    var newToDo = {
      title: toDo.title,
      start: toDo.start,
      end: toDo.end ? toDo.end : new Date(moment(toDo.start).add(1, 'hour')),
      allDay: toDo.allDay ? toDo.allDay : false
    }
    this.setState({events: this.state.events.concat(newToDo)})
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
        <MyCalendar myEventsList={this.state.events}/>
        {/* <ToDoList /> */}
        {/* <Registration /> */}
        <div />
      </>
    );
  }
}

export default App;