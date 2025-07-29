import React, { useState } from 'react';
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import './WeatherApp.css';

export default function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState({
        city: "Demo",
        feelsLike: 100,
        humidity: 50,
        temp: 50,
        tempMax: 50,
        tempMin: 50,
        weather: "Demo"
    });

    let updateInfo = (result) => {
        setWeatherInfo(result);
    };

    return (
        <div className="weather-container">
            <h1 className="weather-heading">🌤️ Weather Wizard</h1>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    );
}
