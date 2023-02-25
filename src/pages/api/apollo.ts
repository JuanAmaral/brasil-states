import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://api.meteum.ai/graphql/query',
  credentials: 'same-origin',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      'X-Meteum-API-Key': 'ba681f70-3c9a-44db-be58-ff2ad05e42c7',
    }
  }
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  uri: process.env.METEUMAI_API_KEY,
  cache: new InMemoryCache(),
  
});
