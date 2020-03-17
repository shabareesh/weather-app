import React from 'react';
import PropTypes from 'prop-types';

import {formatCurrentWeatherDate} from "../../utils/utils";
import './currentWeather.scss';

const CurrentWeather = ({ weatherInfo:{city_name, state_code, country_code, data} }) => (
  <div className="current-weather">
    <h4 className="current-weather--city">{city_name} - {state_code}, {country_code}</h4>
    <p className="current-weather--date">{formatCurrentWeatherDate(data[0].datetime)}</p>
    <p className="current-weather--highTemp"><strong>H {data[0].high_temp}<sup>o</sup></strong><span>/ L {data[0].low_temp}<sup>o</sup></span></p>
    <p className="current-weather--description">{data[0].weather.description}</p>
  </div>
);

CurrentWeather.propTypes = {
  weatherInfo: PropTypes.shape({
    city_name:PropTypes.string.isRequired,
    state_code:PropTypes.string.isRequired,
    country_code:PropTypes.string.isRequired,
    data:PropTypes.arrayOf(PropTypes.shape({
      high_temp:PropTypes.number.isRequired,
      low_temp:PropTypes.number.isRequired,
      weather:PropTypes.shape({
        description:PropTypes.string.isRequired,
      }).isRequired,
    })),
  }).isRequired,
};

export default CurrentWeather;
