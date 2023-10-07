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
      <p>{data.weather[0].description}</p>
      <p>Temperature: {data.main.temp}°C</p>
    </div>
  );
}

export default WeatherDisplay;
