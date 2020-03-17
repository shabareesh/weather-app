import React from 'react';
import { render } from "@testing-library/react";

import CurrentWeather from "../CurrentWeather";

describe('CurrentWeather', () => {
  const props = {
    weatherInfo:{
      city_name:'Chicago',
      state_code:'1234',
      country_code: 'US',
      data: [
        {
          high_temp: 45.1,
          low_temp: 45.1,
          weather: {
            description:'some desc'
          },
        },
      ],
    },
  };

  test('should match snapshot', () => {
    const { baseElement } = render(<CurrentWeather {...props} />);

    expect(baseElement).toMatchSnapshot();
  });
});
