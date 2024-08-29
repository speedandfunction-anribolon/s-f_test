import * as React from 'react';
import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import client from '../apollo-client';

const theme = createTheme();

const App = ({ Component, pageProps }: AppProps) => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </ApolloProvider>
);

export default App;
