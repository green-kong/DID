import React from 'react';
import axios from 'axios';
import Router from 'next/router';
import UserStyled from '../../styles/user';

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

  return (
    <>
      <UserStyled>
        <div className="wrap">
          <div className="login">
            <form onSubmit={submitHandle} className="login_frm" method="post">
              <div className="idpw">
                <input
                  type="text"
                  className="id"
                  name="id"
                  placeholder="아이디를 입력하세요."
                  autoComplete="off"
                />
                <input
                  type="password"
                  className="pw"
                  name="pw"
                  placeholder="비밀번호 입력하세요."
                  autoComplete="off"
                />
              </div>
              <div className="btn">
                <input type="submit" className="login_btn" value="로그인" />
                <button className="regist_btn" onClick={regist}>
                  회원가입
                </button>
              </div>
            </form>
          </div>
        </div>
      </UserStyled>
    </>
  );
};

export default User;
