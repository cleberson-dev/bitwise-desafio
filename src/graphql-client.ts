import { ApolloClient, InMemoryCache } from '@apollo/client';

const TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export default new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    authorization: `Bearer ${TOKEN}`
  },
  cache: new InMemoryCache()
});