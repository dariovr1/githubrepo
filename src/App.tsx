import React, { FC } from 'react';
import logo from './logo.svg';
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from '@apollo/client';
import Repositories from './components/Repositories/Repositories';
import useApolloClient from './components/hooks/useApolloClient';

const client = useApolloClient();

// App component
const App = () => (
  <ApolloProvider client={client}>
    <Repositories />
  </ApolloProvider>
);



export default App;
