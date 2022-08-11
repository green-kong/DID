import React, { useEffect } from 'react';
import axios from 'axios';
import Router from 'next/router';
import UserStyled from '../../styles/user';
import Header from '../../components/header';

const User = () => {
  const submitHandle = async (e: any) => {
    e.preventDefault();
    const id = e.target.id.value;
    const pw = e.target.pw.value;
    const body = { id, pw };
    await axios.post('http://localhost:4000/login', body);
  };

  const regist = () => {
    Router.push('/user/regist');
  };

  useEffect(() => {
    // console.log(window.ethereum)
    // connect()
    // 여기에 메타마스크 연결하고 연결되었을때
    // 상태변수에 있나없나를 체크하고 회원가입을할지 로그인을할지 보여주자
  }, []);

  return (
    <>
      <Header />
      <UserStyled>
        <form onSubmit={submitHandle} method="post">
          <input type="text" name="id" placeholder="아이디입력하세요" />
          <input type="password" name="pw" placeholder="비번입력하세욜" />
          <input type="submit" value="로그인" />
        </form>
        <button onClick={regist}>회원가입</button>
      </UserStyled>
    </>
  );
};

export default User;
