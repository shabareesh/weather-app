import weatherReducer, { fetchWeatherStart, fetchWeatherSuccess, fetchWeatherError } from "../weatherSlice";

describe('weatherSlice', () => {
  test('should handle initial state', () => {
    expect(weatherReducer(undefined, {type: ''})).toMatchObject({
      isLoading: false,
      data: {},
      error: '',
    });
  });

  test('should handle fetch start', () => {
    expect(weatherReducer(undefined, fetchWeatherStart())).toEqual({
      data: {},
      error: '',
      isLoading: true,
    });
  });

  test('should handle fetch success', () => {
    expect(weatherReducer(undefined, fetchWeatherSuccess({test: 'test'}))).toMatchObject({
      isLoading: false,
      data: {
        test: 'test'
      },
      error: '',
    });
  });

  test('should handle fetch error', () => {
    expect(weatherReducer(undefined, fetchWeatherError('error'))).toMatchObject({
      isLoading: false,
      error: 'error',
      data: {},
    });
  });
});
