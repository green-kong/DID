import Link from 'next/link';
import { useState, useContext, useEffect, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import Router from 'next/router';
import { useCookies } from 'react-cookie';
import { Global } from '../_app';
import { ContentTitle, Title, TitleIcon } from '../../styles/title';
import LoadingModal from '../../components/loading';

import { Border, LoginBtn, LoginFrm, SignUpBtn } from '../../styles/login';

const Login = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userId, setUserId] = useState<string>('');
  const [userPw, setUserPw] = useState<string>('');
  const [, setCookie] = useCookies();

  const { isLogin, setIsLogin, setUserToken } = useContext(Global);

  const loginHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post('http://localhost:4000/user/login', {
        userId,
        userPw,
      });
      const { token, loginCheck } = response.data;

      if (loginCheck === true) {
        if (setUserToken === undefined || setIsLogin === undefined) return;
        setUserToken(token);
        setCookie('DID_Token', token);
      } else if (loginCheck === false) {
        alert('회원정보가 다릅니다.');
      }
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      console.log('로그인 에러');
    }
  };

  const inputId = (e: ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  const inputPw = (e: ChangeEvent<HTMLInputElement>) => {
    setUserPw(e.target.value);
  };

  useEffect(() => {
    if (isLogin === false) return;
    else {
      Router.push('/');
    }
  }, [isLogin]);

  return (
    <>
      <div
        style={{
          height: 'calc(100vh - 100px - 45px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
          bottom: '60px',
        }}
      >
        <ContentTitle>
          <TitleIcon imageUrl="/login_title_icon.png" />
          <Title>Login to DID</Title>
        </ContentTitle>
        <LoginFrm
          onSubmit={loginHandler}
          action="http://localhost:3000/authorizor/auth"
          method="POST"
        >
          <ul>
            <li>
              <input
                onChange={inputId}
                name="userId"
                type="text"
                placeholder="Id"
                autoComplete="off"
              />
            </li>
            <li>
              <input
                onChange={inputPw}
                name="userPw"
                type="password"
                placeholder="Password"
                autoComplete="off"
              />
            </li>
            <LoginBtn type="submit">Log in</LoginBtn>
            <Border />
            <Link href="/user/regist">
              <SignUpBtn>Sign up</SignUpBtn>
            </Link>
          </ul>
        </LoginFrm>
      </div>
      {isLoading && <LoadingModal />}
    </>
  );
};

export default Login;
