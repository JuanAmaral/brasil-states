interface IWeatherByPointVariables {
  lat: number;
  lon: number;
  searchDate: number;
}

interface IWeatherByPointData {
  weatherByPoint: {
    climate: {
      days: IDataDays[]
    };
  };
}
interface IDataDays {
  icon: string;
  minNightTemperature: number;
  maxDayTemperature: number;
  humidity: number;
  pressure: number;
  maxWindSpeed: number;
  minWindSpeed: number;
  prec: number;
  precProbability: number;
  []
}
