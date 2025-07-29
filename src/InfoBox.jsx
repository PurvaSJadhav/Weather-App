import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL = "https://images.unsplash.com/photo-1674407866481-a39b2239f771?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_URL = "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const getWeatherIcon = () => {
    if (info.humidity > 80) return <ThunderstormIcon />;
    if (info.temp > 15) return <WbSunnyIcon />;
    return <AcUnitIcon />;
  };

  const getCardBgColor = () => {
    if (info.humidity > 80) return "#b3e5fc";   // Rainy
    if (info.temp > 15) return "#ffe082";       // Hot
    return "#e1f5fe";                           // Cold
  };

  const capitalizedWeather = info.weather.charAt(0).toUpperCase() + info.weather.slice(1);

  return (
    <div className='InfoBox'>
      <div className='cardContainer'>
        <Card
          sx={{
            maxWidth: 345,
            backgroundColor: getCardBgColor(),
            transition: "background-color 0.4s ease-in-out",
          }}
        >
          <CardMedia
            sx={{ height: 140 }}
            image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
            title="weather background"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city} {getWeatherIcon()}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
              <p>Temperature: {info.temp}&deg;C</p>
              <p>Humidity: {info.humidity}%</p>
              <p>Min Temp: {info.tempMin}&deg;C</p>
              <p>Max Temp: {info.tempMax}&deg;C</p>
              <p>
                Weather: <i>{capitalizedWeather}</i>, feels like {info.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
