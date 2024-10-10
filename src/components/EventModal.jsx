import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEvent } from '../features/events/eventsSlice.js';
import { v4 as uuidv4 } from 'uuid';

function EventModal({ date, closeModal }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      id: uuidv4(),
      title,
      description,
      date: date.toISOString(),
    };
    dispatch(addEvent(newEvent));
    closeModal();
  };

  return (
    <div className="modal">
      <h2>Добавить событие для выбранного дня: </h2>
      <form onSubmit={handleSubmit}>
        <label>
          Название: 
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          Описание: 
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <button type="submit">Добавить описание</button>
      </form>
      <button onClick={closeModal}>Закрыть</button>
    </div>
  );
}

export default EventModal;
