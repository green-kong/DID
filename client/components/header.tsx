import Link from 'next/link';
import Router from 'next/router';
import { useContext } from 'react';
import { useCookies } from 'react-cookie';
// eslint-disable-next-line import/no-cycle
import { Global } from '../pages/_app';
import { Logo, Nav, StyledHeader } from '../styles/header';

const Header = () => {
  const [, , removeCookie] = useCookies();

  const { isLogin, setIsLogin, setUserToken } = useContext(Global);

  const logout = () => {
    removeCookie('DID_Token');
    if (setIsLogin === undefined || setUserToken === undefined) return;
    setUserToken('');
    setIsLogin(false);
    alert('로그아웃 되었습니다.');
    Router.push('/');
  };

  return (
    <>
      <StyledHeader id="header">
        <Link href="http://localhost:3000">
          <Logo id="logo"></Logo>
        </Link>
        <Nav id="nav">
          {isLogin ? (
            <>
              <li>
                <Link href="/user/myProfile">
                  <a href="프로필보기">My profile</a>
                </Link>
              </li>
              <li>
                <span onClick={logout}>로그아웃</span>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/user/login">
                  <a href="로그인">Login</a>
                </Link>
              </li>
              <li>
                <Link href="/user/regist">
                  <a href="회원가입">Sign up</a>
                </Link>
              </li>
            </>
          )}
        </Nav>
      </StyledHeader>
    </>
  );
};

export default Header;
