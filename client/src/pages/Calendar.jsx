import React from 'react';
import { mockCalendarEvents } from '../mockData';

const Calendar = () => {
  const events = mockCalendarEvents;

  return (
    <div>
      <h2>Calendar</h2>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <strong>{event.title}</strong> - {new Date(event.date).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Calendar;
