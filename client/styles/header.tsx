import styled from 'styled-components';

const HeaderStyled = styled.div`
  * {
    margin: 0;
    padding: 0;
  }

  ul,
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 1200px;
  height: 100px;
  padding-top: 10px;
  margin: 0 auto;

  .header {
    display: flex;
    justify-content: space-between;
    padding-left: 40px;
    padding-right: 40px;

    & > .logo {
      width: 30%;
      height: 100%;
      background-image: url('/bg.png');
    }

    & > .menu {
      width: 12%;
      color: white;
      font-size: 18px;
      padding-top: 30px;
      display: flex;
      justify-content: space-between;
    }
  }
`;

export default HeaderStyled;
