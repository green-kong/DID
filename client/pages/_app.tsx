import styled from 'styled-components';
import type { AppProps } from 'next/app';
import Header from '../components/header';
import '../styles/global.css';
import Footer from '../components/footer';
import Background from '../components/background';

const Wrap = styled.div`
  position: relative;
  z-index: 2;
`;

const ContentWrap = styled.div`
  width: 1200px;
  min-height: calc(100vh - 100px - 40px);
  color: white;
  margin: 0 auto;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Wrap>
        <Header />
        <ContentWrap>
          <Component {...pageProps} />
        </ContentWrap>
        <Footer />
      </Wrap>
      <Background />
    </>
  );
}

export default MyApp;
