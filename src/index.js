import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import Weather from "./components/weather/Weather";
import weatherReducer from './components/weather/weatherSlice';

import './index.scss';

const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <Weather />
  </Provider>,
  document.getElementById('root')
);
