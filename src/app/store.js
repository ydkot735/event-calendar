import { configureStore } from '@reduxjs/toolkit';
import eventsReducer from '../features/events/eventsSlice.js';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('eventsState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('eventsState', serializedState);
  } catch {
  }
};

const preloadedState = loadState();

const store = configureStore({
  reducer: {
    events: eventsReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveState({
    events: store.getState().events,
  });
});

export {store};
