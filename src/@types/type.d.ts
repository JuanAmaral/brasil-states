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
