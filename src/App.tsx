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
    <div>
      <input value={city} onChange={(e) => setCity(e.target.value)} />
      <button onClick={handleSubmit}>Get Weather</button>
      {weatherData && <WeatherDisplay data={weatherData} />}
    </div>
  );
}

export default App;
