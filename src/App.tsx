import React, { FC } from 'react';
import logo from './logo.svg';
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from '@apollo/client';
import Repositories from './components/Repositories/Repositories';
import useApolloClient from './components/hooks/useApolloClient';
import { ThemeProvider } from '@mui/material';
import { theme } from './components/settings';
import {MUIHeader} from "./components/UI";

// App component
const App = () => {
  const client = useApolloClient();

  return (
    <ApolloProvider client={client}>
       <ThemeProvider theme={theme}>
          <MUIHeader />
          <Repositories />
       </ThemeProvider>
  </ApolloProvider>
  )
}



export default App;
