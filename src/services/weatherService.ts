// src/services/weatherService.ts
import axios from 'axios';
import { WeatherData } from '../types/WeatherData';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'd4fabb0a6cade8a9ca1ac37e3444b6f0';

export const fetchWeatherData = async (city: string): Promise<WeatherData> => {
  const response = await axios.get(BASE_URL, {
    params: {
      q: city,
      appid: API_KEY,
      units: 'metric' // or 'imperial' for Fahrenheit
    }
  });
  return response.data;
}
