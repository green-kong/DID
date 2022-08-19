import Link from 'next/link';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { Logo, Nav, StyledHeader } from '../styles/header';

const Header = () => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [isCookie, setIsCookie] = useState<boolean>();

  const logout = () => {
    removeCookie('DID_Token');
    alert('로그아웃 되었습니다.');
    Router.push('/');
  };

  useEffect(() => {
    if (cookies.DID_Token === undefined) {
      setIsCookie(false);
    } else setIsCookie(true);
  }, [cookies.DID_Token]);

  return (
    <>
      <StyledHeader id="header">
        <Link href="http://localhost:3000">
          <Logo id="logo"></Logo>
        </Link>
        <Nav id="nav">
          {isCookie === true ? (
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
