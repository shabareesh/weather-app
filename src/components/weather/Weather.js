import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeather, weatherState } from "./weatherSlice";

import CitiesDropdown from "../citiesDropdown/CitiesDropdown";
import WeatherCard from "../weatherCard/WeatherCard";
import Spinner from "../spinner/Spinner";
import CurrentWeather from "../currentWeather/CurrentWeather";

import './weather.scss';

const Weather = () => {
  const { data, isLoading, error } = useSelector(weatherState);
  const dispatch = useDispatch();
  const [city, setCity] = useState(localStorage.getItem('city') || 'New York');

  useEffect(() => {
    dispatch(fetchWeather(city));
  }, [dispatch, city]);

  const onDropdownChange = (e) => {
    setCity(e.value);
    localStorage.setItem('city', e.value);
  };

  return(
    <div className="weather-container">
      <header className="header">
        <h3 className="header--title">Select City:</h3>
        <CitiesDropdown onChange={onDropdownChange} selectedValue={city} />
      </header>
      {isLoading && <Spinner />}
      {!isLoading && data.city_name && (
        <section className="weather-content">
          <CurrentWeather weatherInfo={data} />
          <div className="forecast-weather">
            {data.data.map(weather => <WeatherCard data={weather} key={weather.datetime} />)}
          </div>
        </section>
      )}
      {error && <div className="error">{error.message}</div>}
    </div>
  );
};

export default Weather;
