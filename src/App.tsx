// src/App.tsx
import React, { useState } from 'react';
import { fetchWeatherData } from './services/weatherService';
import WeatherDisplay from './components/WeatherDisplay';
import { WeatherData } from './types/WeatherData';
import './components/WeatherDisplay.css';

const App: React.FC = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const handleSubmit = async () => {
    const data = await fetchWeatherData(city);
    setWeatherData(data);
  };

  return (
      <div className="app-container">
        <div className="search-container">
            <input value={city} placeholder='Search for a city' onChange={(e) => setCity(e.target.value)} />
            <button onClick={handleSubmit}>Get Weather</button>
        </div>
        <div>
            {weatherData && (
                <div className='weather-output'>
                    <WeatherDisplay data={weatherData} />
                </div>
            )}
        </div>
      </div>
);
}

export default App;
