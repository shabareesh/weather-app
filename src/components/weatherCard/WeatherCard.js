import React from 'react';
import PropTypes from 'prop-types';

import {formatForecastWeatherDate} from "../../utils/utils";

import './weatherCard.scss';

const WeatherCard = ({ data }) => (
  <div className="weather-card">
    <p className="weather-card--date">{formatForecastWeatherDate(data.datetime)}</p>
    <p className="weather-card--temp"><strong>H {data.high_temp}<sup>o</sup></strong><br /><span>L {data.low_temp}<sup>o</sup></span></p>
    <p className="weather-card--description">{data.weather.description}</p>
  </div>
);

WeatherCard.propTypes = {
  data: PropTypes.shape({
    datetime: PropTypes.string.isRequired,
    high_temp: PropTypes.number.isRequired,
    low_temp: PropTypes.number.isRequired,
    weather:PropTypes.shape({
      description:PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default WeatherCard;
