import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o3j4u80bl801xre02odiwx/master',
  cache: new InMemoryCache(),
});
