import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const styles = {
  calendar: {
    backgroundColor: '#F8F8F8',
    
  },
  dateCell: {
    backgroundColor: '#FFFFFF',
    color: '#333333',
    border: '1px solid #CCCCCC',
    borderRadius: '4px',
    padding: '5px',
  },
  eventCell: {
    backgroundColor: '#EEEEEE',
    color: '#333333',
    border: 'none',
    borderRadius: '4px',
    padding: '5px',
    fontSize: '14px',
    fontWeight: 'bold',
  },
};
const CalendarioAsesorias = ({ eventos }) => {
  return (
    <div style={{ height: '500pt', paddingLeft: '5%', paddingRight: '5%' }}>
      <Calendar
        localizer={localizer}
        events={eventos}
        startAccessor="start"
        endAccessor="end"
        style={styles.calendar}
        eventPropGetter={(event) => ({ style: styles.eventCell })}
        dayPropGetter={(date) => ({ style: styles.dateCell })}
      />
    </div>
  );
};


export default CalendarioAsesorias;
