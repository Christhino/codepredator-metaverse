import Head from 'next/head';
import '../styles/globals.css';
import { I18nProvider } from '../shared/translate';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Metaversus</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </Head>
    <I18nProvider>
      <Component {...pageProps} />
    </I18nProvider>
  </>
);

export default MyApp;
