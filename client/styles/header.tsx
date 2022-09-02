import styled from 'styled-components';

export const StyledHeader = styled.div`
  width: 1200px;
  height: 100px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const Logo = styled.h1`
  width: 80px;
  height: 80px;
  background-image: url('/logo.png');
  background-size: 80px;
  cursor: pointer;
`;

export const Nav = styled.ul`
  display: flex;
  font-size: 18px;

  span {
    cursor: pointer;
  }

  & > li {
    margin-right: 22px;
  }

  & > li:last-child {
    margin-right: 0;
  }
`;
