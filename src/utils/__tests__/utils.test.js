import { formatCurrentWeatherDate, formatForecastWeatherDate } from "../utils";

describe('utils', () => {
  test('should test the util formatCurrentWeatherDate', () => {
    expect(formatCurrentWeatherDate('2020-03-17')).toEqual('Tuesday, March 17, 2020');
  });

  test('should test the util formatForecastWeatherDate', () => {
    expect(formatForecastWeatherDate('2020-03-17')).toEqual('Tue, 3/17');
  })
});
