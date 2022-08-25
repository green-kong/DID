import Link from 'next/link';
import { useState, useContext, useEffect, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import Router from 'next/router';
import { useCookies } from 'react-cookie';
import { Global } from '../_app';
import { ContentTitle, Title, TitleIcon } from '../../styles/title';

import { Border, LoginBtn, LoginFrm, SignUpBtn } from '../../styles/login';

const Login = () => {
  const [id, setId] = useState<string>('');
  const [pw, setPw] = useState<string>('');
  const [, setCookie] = useCookies();

  const { isLogin, setIsLogin, setUserToken } = useContext(Global);

  const loginHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:4000/user/login', {
      id,
      pw,
    });
    const { token, loginCheck } = response.data;
    if (loginCheck === true) {
      if (setUserToken === undefined || setIsLogin === undefined) return;
      setUserToken(token);
      setCookie('DID_Token', token);
      // Router.push('/user/connections');
    } else if (loginCheck === false) {
      alert('회원정보가 다릅니다.');
    }
  };

  const inputId = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const inputPw = (e: ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };

  useEffect(() => {
    if (isLogin === false) return;
    else {
      Router.push('/');
    }
  }, [isLogin]);

  return (
    <>
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
            />
          </li>
          <li>
            <input
              onChange={inputPw}
              name="userPw"
              type="password"
              placeholder="Password"
            />
          </li>
          <LoginBtn type="submit">Log in</LoginBtn>
          <Border />
          <Link href="/user/regist2">
            <SignUpBtn>Sign up</SignUpBtn>
          </Link>
        </ul>
      </LoginFrm>
    </>
  );
};

export default Login;
