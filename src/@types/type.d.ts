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