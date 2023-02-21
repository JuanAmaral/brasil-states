import { gql } from '@apollo/client';
import { client } from './apollo';

const GET_WEATHER_BY_POINT = gql`
  query GetWeatherByPoint($lat: Float!, $lon: Float! , $searchDate: Int!) {
    weatherByPoint(request: { lat: $lat, lon: $lon }) {
      climate {
        days(limit: 1, offset: $searchDate ) {
          icon(format: SVG)
          minNightTemperature
          maxDayTemperature
          humidity
          pressure
          maxWindSpeed
          minWindSpeed
          prec
          precProbability
        }
      }
    }
  }
`;

function DateOfYearLessOneDay(){
  const dayOfYear =
  Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 1).getTime()) /
      86400000
  ) + 1;
  return Number(dayOfYear - 1);
}


async function getWeatherByPoint(lat: number, lon: number ) {
  const searchDate = DateOfYearLessOneDay();
  const {data,error} = await client.query<IWeatherByPointData, IWeatherByPointVariables>({
    query: GET_WEATHER_BY_POINT,
    variables: { lat, lon, searchDate }, 
  }) 
  return data;
  
}

export default getWeatherByPoint;