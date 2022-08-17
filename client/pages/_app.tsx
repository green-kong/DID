import type { AppProps } from 'next/app';
import AppStyled from '../styles/app';
import Header from '../components/header';
import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppStyled>
        <Header />
        <div
          className="bg_img"
          style={{
            width: '100vw',
            height: '100vh',
          }}
        ></div>
        <Component {...pageProps} />
      </AppStyled>
    </>
  );
}

export default MyApp;
