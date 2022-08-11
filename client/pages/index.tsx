import type { NextPage } from 'next';
import Router from 'next/router';
import Main from '../styles/main';
import Header from '../components/header';

const Home: NextPage = () => {
  const user = async () => {
    Router.push('/user');
  };

  const admin = async () => {
    Router.push('/admin');
  };

  return (
    <Main>
      <Header />
      <div className="welcome">SJ검증페이지임 어서오셈</div>
      <div>우린 이런이런 서비스를 하고있음, 무튼 좋음</div>
      <div>유저인지 관리자인지 고르셈</div>
      <div className="content">
        <div className="user" onClick={user}>
          User
        </div>
        <div className="admin" onClick={admin}>
          Admin
        </div>
      </div>
    </Main>
  );
};

export default Home;
