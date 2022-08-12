import React from 'react';
import axios from 'axios';
import Router from 'next/router';
import UserStyled from '../../styles/user';
import Header from '../../components/header';

const User = () => {
  // const [id, setId] = useState('');
  // const [pw, setPw] = useState('');

  const submitHandle = async (e: any) => {
    e.preventDefault();
    const id = e.target.id.value;
    const pw = e.target.pw.value;
    const body = { id, pw };
    const response = await axios.post('http://localhost:4000/login', body);
    console.log(response.data);
  };

  const regist = () => {
    Router.push('/user/regist');
  };

  // useEffect(() => {
  // console.log(window.ethereum)
  // connect()
  // 여기에 메타마스크 연결하고 연결되었을때
  // 상태변수에 있나없나를 체크하고 회원가입을할지 로그인을할지 보여주자
  // }, []);

  return (
    <>
      <Header />
      <UserStyled>
        <div className="wrap">
          <div className="login">
            <form onSubmit={submitHandle} className="login_frm" method="post">
              <div className="idpw">
                <input
                  type="text"
                  className="id"
                  name="id"
                  placeholder="아이디입력하세요"
                  autoComplete="off"
                />
                <input
                  type="password"
                  className="pw"
                  name="pw"
                  placeholder="비번입력하세욜"
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
