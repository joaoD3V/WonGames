import { useApollo } from 'utils/apollo';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';
import { CartProvider } from 'hooks/useCart';
import { AppProps } from 'next/app';
import Head from 'next/head';

import { GlobalStyles } from 'styles/global';
import theme from 'styles/theme';

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApoloState);

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CartProvider>
          <Head>
            <title>Won Games</title>
            <link rel="shortcut icon" href="/img/icon-512.png" />
            <link rel="apple-touch-icon" href="/img/icon-512.png" />
            <link rel="manifest" href="/manifest.json" />
            <meta
              name="description"
              content="The best Game Stores in the world!"
            />
          </Head>
          <GlobalStyles />
          <Component {...pageProps} />
        </CartProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}
export default App;
