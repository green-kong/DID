import type { NextPage } from 'next';
import Router from 'next/router';
import { IndexMenu, MenuIcon, MenuWrap } from '../styles/main';

const Main: NextPage = () => {
  const user = () => {
    Router.push('/user/connections');
  };

  const admin = () => {
    Router.push('/dev/appList');
  };

  return (
    <>
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
    </>
  );
};

export default Main;
