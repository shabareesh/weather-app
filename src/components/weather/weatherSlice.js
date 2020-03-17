import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'weather',
  initialState: {
    data: {},
    isLoading: false,
    error: '',
  },
  reducers: {
    fetchWeatherStart: (state, action) => {
      state.isLoading = true;
    },
    fetchWeatherSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    fetchWeatherError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchWeatherStart, fetchWeatherSuccess, fetchWeatherError } = slice.actions;

export const fetchWeather = city => dispatch => {
  dispatch(fetchWeatherStart());
  fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&country=US&days=10&key=f6e2dd6033d74da4b62d6254a211c832`)
    .then((res) => {
      if (!res.ok) {
        throw Error(res.statusText);
      }
      return res.json()
    })
    .then(res => dispatch(fetchWeatherSuccess(res)))
    .catch(error => dispatch(fetchWeatherError(error)));
};

export const weatherState = state => state.weather;

export default slice.reducer;
