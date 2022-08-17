import Image from 'next/image';
import HeaderStyled from '../styles/header';

const Header = () => {
  return (
    <HeaderStyled>
      <div className="header">
        <div className="logo">
          <a href={'http://localhost:3000'}>
            <Image alt="로고" src="/logo.png" width={80} height={80} />
          </a>
        </div>
        <ul className="menu">
          <li>Login</li>
          <li>Sign up</li>
        </ul>
      </div>
    </HeaderStyled>
  );
};

export default Header;
