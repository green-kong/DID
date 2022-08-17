import Link from 'next/link';
import styled from 'styled-components';

const StyledHeader = styled.div`
  width: 1200px;
  height: 100px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

const Logo = styled.h1`
  width: 80px;
  height: 80px;
  background-image: url('/logo.png');
  background-size: 80px;
`;

const Nav = styled.ul`
  display: flex;
  font-size: 18px;

  & > li {
    margin-right: 22px;
  }

  & > li:last-child {
    margin-right: 0;
  }
`;

const Header = () => {
  return (
    <>
      <StyledHeader id="header">
        <Link href="http://localhost:3000">
          <Logo id="logo"></Logo>
        </Link>

        <Nav id="nav">
          <li>
            <a href="로그인">Login</a>
          </li>
          <li>
            <a href="회원가입">Sign up</a>
          </li>
        </Nav>
      </StyledHeader>
    </>
  );
};

export default Header;
