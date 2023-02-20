import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

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

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});