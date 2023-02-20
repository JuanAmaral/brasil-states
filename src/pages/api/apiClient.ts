import { ApolloClient, createHttpLink, InMemoryCache , gql} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';



const GET_WEATHER_BY_POINT = gql`
  query GetWeatherByPoint($lat: Float!, $lon: Float!) {
    weatherByPoint(request: { lat: $lat, lon: $lon }) {
      climate {
        days(limit: 1, offset: 52) {
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
const httpLink = createHttpLink({
  uri: 'https://api.meteum.ai/graphql/query',
  credentials: 'same-origin',
});


const authLink = setContext((_, { headers }) => {
  const token = process.env.METEUMAI_API_KEY;
  return {
    headers: {
      ...headers,
      'X-Meteum-API-Key': '1e71bc30-1981-4e8f-8019-b79584ebbbf8',
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  uri: process.env.METEUMAI_API_KEY,
  cache: new InMemoryCache(),
  
});

async function getWeatherByPoint(lat: number, lon: number) {
  const { data } = await client.query<IWeatherByPointData, IWeatherByPointVariables>({
    query: GET_WEATHER_BY_POINT,
    variables: { lat, lon },
  });
  return data;
}

export default getWeatherByPoint;