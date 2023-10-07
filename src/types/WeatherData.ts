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

  interface Clouds {
    all: number;
  }

  interface Rain {
    "1h": number;
  }
  
  export interface WeatherData {
    main: Main;
    weather: Array<Weather>;
    name: string;
    clouds: Clouds;
    rain?: Rain;
  }
  