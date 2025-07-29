import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            
            if (jsonResponse.cod !== 200) {
            throw new Error(jsonResponse.message);
            }

            return {
            city: jsonResponse.name,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
            };
        } catch (err) {
            console.error("API fetch error:", err);
            throw err;
        }
    };

    let handleChange = (event) => {
        setCity(event.target.value);
    };
    
    let handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setError(false);
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setCity("");
        } catch (err) {
            setError(true);
        }
    };

  return (
    <div className='SearchBox'>
        <form onSubmit={handleSubmit}>
        <TextField id="city" label="City Name" variant="outlined" value={city} required onChange={handleChange}/>
        <Button variant="contained" type='submit'>Search</Button>
        {error && <p style={{color: "red"}}>No such place Exist!</p>}
        </form>
    </div>
  )
}