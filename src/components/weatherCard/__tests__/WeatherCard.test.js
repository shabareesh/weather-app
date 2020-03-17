import React from 'react';
import { render } from "@testing-library/react";
import WeatherCard from "../WeatherCard";

describe('WeatherCard', () => {
  test('should generate snapshot', () => {
    const data = {
      datetime: '2020-03-17',
      'high_temp': 13.1,
      'low_temp': 1.1,
      weather: {
        description: 'Partly Clouded',
      },
    };

    const { baseElement } = render(<WeatherCard data={data} />);
    expect(baseElement).toMatchSnapshot();
  });
});
