import styled from 'styled-components';
import type { AppProps } from 'next/app';
import axios from 'axios';
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
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

interface IUserData {
  idx?: string;
  userId?: string;
}

interface IGlobal {
  userToken?: string;
  setUserToken?: Dispatch<SetStateAction<string>>;
  isLogin?: boolean;
  setIsLogin?: Dispatch<SetStateAction<boolean>>;
  userData?: IUserData;
}

export const Global = createContext<IGlobal>({});

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [userToken, setUserToken] = useState<string>('');
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [userData, setUserData] = useState<IUserData>({});

  const globalState = {
    userToken,
    setUserToken,
    isLogin,
    setIsLogin,
    userData,
  };

  useEffect(() => {
    if (userToken === '') return;
    (async () => {
      try {
        const response = await axios.post('http://localhost:4000/sendToken', {
          userToken,
        });
        const result = response.data;
        setIsLogin(true);
        setUserData(result);
      } catch (e) {
        console.log(e);
        setIsLogin(false);
      }
    })();
  }, [userToken]);

  return (
    <>
      <Global.Provider value={globalState}>
        <Wrap>
          <Header />
          <ContentWrap>
            <Component {...pageProps} />
          </ContentWrap>
          <Footer />
        </Wrap>
        <Background />
      </Global.Provider>
    </>
  );
};

export default MyApp;
