// src/components/WeatherDisplay.tsx
import React from 'react';
import { WeatherData } from '../types/WeatherData';

interface Props {
  data: WeatherData;
}

const WeatherDisplay: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <h1>{data.name}</h1>
      <p>Weather description: {data.weather[0].description}</p>
      <p>Temperature: {data.main.temp} °C</p>
      <p>Humidity: {data.main.humidity} %</p>
      <p>Clouds: {data.clouds.all} %</p>
      <p>Rain: {data.rain?.["1h"] || 0} ml</p>
    </div>
  );
}

export default WeatherDisplay;
