import type { NextPage } from 'next';
import Router from 'next/router';
import { IndexMenu, MenuIcon, MenuWrap } from '../styles/main';

const Home: NextPage = () => {
  const user = () => {
    // 로그인이 되어있으면 Router.push('/user/connections');
    // 안되어 있으면 Router.push('/user/login');
    Router.push('/user');
  };

  const admin = () => {
    Router.push('/admin');
  };

  return (
    <MenuWrap>
      <IndexMenu onClick={user}>
        <MenuIcon imageUrl="/user_menu_icon.png" />
        <p>개인회원</p>
      </IndexMenu>
      <IndexMenu onClick={admin}>
        <MenuIcon imageUrl="/dev_menu_icon.png" />
        <p>Developer</p>
      </IndexMenu>
    </MenuWrap>
  );
};

export default Home;
