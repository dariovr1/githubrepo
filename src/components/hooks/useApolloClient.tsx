import { useMemo } from 'react';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const useApolloClient = () => {
  const client = useMemo(() => {
    return new ApolloClient({
      uri: process.env.GITHUB_API_ENDPOINT,
      cache: new InMemoryCache(),
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    });
  }, []);

  return client;
};

export default useApolloClient;
