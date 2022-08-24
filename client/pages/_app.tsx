import styled from 'styled-components';
import type { AppProps } from 'next/app';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
// eslint-disable-next-line import/no-cycle
import Header from '../components/header';
import '../styles/global.css';
import Footer from '../components/footer';

const Wrap = styled.div`
  position: relative;
  z-index: 2;
  background: linear-gradient(180deg, #071832 0%, #103c73 100%);
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
  const [cookies, , removeCookie] = useCookies();

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
        removeCookie('DID_Token');
        setUserToken('');
      }
    })();
  }, [userToken]);

  useEffect(() => {
    const { DID_Token: token } = cookies;
    if (token) {
      setUserToken(token);
    }
  }, []);

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
      </Global.Provider>
    </>
  );
};

export default MyApp;
