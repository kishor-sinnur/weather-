import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import './WeatherInfo.css';

const WeatherInfo = ({ weatherData }) => {
  if (!weatherData) {
    return null;
  }

  const { name, weather, main, wind } = weatherData;
  const weatherDescription = weather[0].description;
  const rainImage = 'https://www.dailyliberal.com.au/images/transform/v1/crop/frm/storypad-3A3v2prgbxqZzKYFb2WvZD6/e564391d-4e8a-40e5-85de-a869b8fcf4e4.jpg/r0_0_1920_1284_w1200_h678_fmax.jpg';
  const coldImage = 'https://cdn.pixabay.com/photo/2022/12/16/18/07/winter-7660314_640.jpg';
  const summerImage = 'https://www.iamexpat.nl/sites/default/files/styles/ogimage_thumb/public/sunny-weather_1.jpg';
  
  let weatherImage;
  let WeatherIcon;
  
  if (main.humidity > 60) {
    weatherImage = rainImage;
    WeatherIcon = CloudQueueIcon;
  } else if (main.temp >= 0 && main.temp <= 25) {
    weatherImage = coldImage;
    WeatherIcon = AcUnitIcon;
  } else {
    weatherImage = summerImage;
    WeatherIcon = WbSunnyIcon;
  }

  return (
    <Card className="weather-card">
      <CardMedia
        className="weather-image"
        image={weatherImage}
        title={weatherDescription}
      />
      <CardContent>
        <div className="weather-info">
          <Typography variant="h5" component="div" className="weather-title">
            <WeatherIcon className="weather-icon" />
            Weather in {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Description: {weatherDescription}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Temperature: {main.temp}°C
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Feels Like: {main.feels_like}°C
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Pressure: {main.pressure} hPa
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Humidity: {main.humidity}%
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Wind Speed: {wind.speed} m/s
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherInfo;
