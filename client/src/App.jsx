import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import Registration from './components/authentication/registration.jsx';
import Login from './components/authentication/Login.jsx';
import MyCalendar from './components/calendar/MyCalendar.jsx';
import ToDoList from './components/to-do-list/ToDoList.jsx';

function App () {
  var eventsList = [{
    title: 'Sample Event',
    start: new Date,
    end: new Date(moment().add(1, 'hour')),
    allDay: false
  }]
  const [currentPage, changePage] = useState('home');
  const [events, updateCalendar] = useState(eventsList);

  const addToCalendar = function (toDo) {
    //requires object with title, start time, (optional) end time, and (optional) all day setting (boolean)
    //example: this.addToCalendar({title: 'test', start: new Date, end: new Date(moment().add(2, 'hours')), allDay: false})
    var newToDo = {
      title: toDo.title,
      start: toDo.start,
      end: toDo.end ? toDo.end : new Date(moment(toDo.start).add(1, 'hour')),
      allDay: toDo.allDay ? toDo.allDay : false
    }
    updateCalendar(...events, newToDo)
  }

    return (
      <div>
        <MyCalendar myEventsList={events}/>
        <ToDoList />
        <Registration />
        {/* <Login /> */}
      </div>
    );
}

export default App;