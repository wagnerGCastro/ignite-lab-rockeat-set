import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_GRAPHCMS_URL,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_GRAPHCMS_ACCESS_TOKEN}`,
  },
  cache: new InMemoryCache(),
  // ssrMode: typeof window === 'undefined',
});
