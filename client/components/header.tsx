import Router from 'next/router';
import HeaderStyled from '../styles/header';

const Header = () => {
  const home = () => {
    Router.push('/');
  };

  return (
    <HeaderStyled>
      <div className="header">
        <div className="logo">
          <a href={'#'} onClick={home}>
            SJ
          </a>
        </div>
      </div>
    </HeaderStyled>
  );
};

export default Header;
