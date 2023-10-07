// src/types/WeatherData.ts
interface Weather {
    description: string;
    icon: string;
    main: string;
  }
  
  interface Main {
    temp: number;
    feels_like: number;
    humidity: number;
  }
  
  export interface WeatherData {
    main: Main;
    weather: Array<Weather>;
    name: string;
  }
  