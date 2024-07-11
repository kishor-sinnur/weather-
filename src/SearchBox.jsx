import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './searchbox.css';
import WeatherInfo from './WeatherInfo';

export default function SearchBox() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const GEO_API_URL = "http://api.openweathermap.org/geo/1.0/direct";
  const WEATHER_API_URL = "http://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "6200d2b726763aee16539369113edd1f";

  const getWeatherData = async (lat, lon) => {
    try {
      let response = await fetch(`${WEATHER_API_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
      let data = await response.json();
      setWeatherData(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch weather data.');
    }
  };

  const getInfo = async () => {
    try {
      let response = await fetch(`${GEO_API_URL}?q=${city}&appid=${API_KEY}`);
      let jsonResponse = await response.json();
      if (jsonResponse.length > 0) {
        const { lat, lon } = jsonResponse[0];
        await getWeatherData(lat, lon);
      } else {
        setError('City not found.');
        setWeatherData(null);
      }
    } catch (err) {
      setError('Failed to fetch location data.');
    }
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getInfo();
    setCity("");
  };

  return (
    <div className='search'>
      <h2>Search for the weather</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="City name"
          color="secondary"
          focused
          required
          value={city}
          onChange={handleChange}
        />
        <br /><br />
        <Button variant="contained" type='submit'>Send</Button>
      </form>
      {weatherData && (
        <WeatherInfo weatherData={weatherData} />
      )}
      {error && (
        <div>
          <p>Error: {error}</p>
        </div>
      )}
    </div>
  );
}
