interface IWeatherQuery {
  query: string;
}

interface IWeatherResponse {
  weatherByPoint: {
    now: {
      c: number;
      f: number;
      icon: string;
    };
    forecast: {
      hours: {
        edges: Array<{
          node: {
            timestamp: number;
            temperature: number;
          };
        }>;
      };
    };
  };
}

interface IStates {
  name: string;
  abbreviation: string;
  latitude: number;
  longitude: number;
}
interface IWeatherByPointVariables {
  lat: number;
  lon: number;
}

interface IWeatherByPointData {
  weatherByPoint: {
    climate: {
      days: {
        icon: string;
        minNightTemperature: number;
        maxDayTemperature: number;
        humidity: number;
        pressure: number;
        maxWindSpeed: number;
        minWindSpeed: number;
        prec: number;
        precProbability: number;
      }[];
    };
  };
}