import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useSelector } from 'react-redux';
import EventModal from './EventModal.jsx';

function CalendarView() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const events = useSelector(state => state.events.events);

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setIsModalOpen(true);
  };

  const getEventsForDate = (date) => {
    return events.filter(event => new Date(event.date).toDateString() === date.toDateString());
  };

  return (
    <div>
      <Calendar onClickDay={handleDateClick} />
      <div>
        <h3>События этого дня:</h3>
        <ul>
          {getEventsForDate(selectedDate).map(event => (
            <li key={event.id}>{event.title} - {event.description}</li>
          ))}
        </ul>
      </div>
      {isModalOpen && <EventModal date={selectedDate} closeModal={() => setIsModalOpen(false)} />}
    </div>
  );
}

export default CalendarView;
