// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Assuming you have a rootReducer combining all reducers

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk], // Example middleware, if needed
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in development
});

export default store;
