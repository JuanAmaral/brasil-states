import { ApolloClient, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { createHttpLink } from '@apollo/client/link/http';

const httpLink = createHttpLink({
  uri: 'https://api.meteum.ai/graphql/query',
  credentials: 'same-origin',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      'X-Meteum-API-Key': 'demo_meteum_ai_api_key_ed32b1e79bf89',
    }
  }
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  uri: process.env.METEUMAI_API_KEY,
  cache: new InMemoryCache(),
  
});
