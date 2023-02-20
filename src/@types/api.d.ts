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