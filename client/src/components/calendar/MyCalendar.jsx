import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
const localizer = momentLocalizer(moment)

const MyCalendar = (props) => (
  <div className='calendar'>
    <Calendar
      localizer={localizer}
      defaultView="week"
      events={props.myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
)

export default MyCalendar;