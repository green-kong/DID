import Link from 'next/link';
import { useState } from 'react';
import { Logo, Nav, StyledHeader } from '../styles/header';
import QuitModal from './Modal';

const Header = () => {
  // const [modal, setModal] = useState<boolean>(false);

  // const openModal = () => {
  //   setModal(true);
  // };

  // const closeModal = () => {
  //   setModal(false);
  // };

  return (
    <>
      <StyledHeader id="header">
        <Link href="http://localhost:3000">
          <Logo id="logo"></Logo>
        </Link>
        <Nav id="nav">
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
          {/* <li onClick={openModal}>My profile</li> */}
          <li>
            <Link href="/user/myProfile">
              <a href="프로필보기">My profile</a>
            </Link>
          </li>
        </Nav>
        {/* {modal && (
          <QuitModal msg="정보열람을 위해 비번을 ㄲ" closeModal={closeModal} />
        )} */}
      </StyledHeader>
    </>
  );
};

export default Header;
