import styled from 'styled-components';

const MyProfileStyled = styled.div`
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
  top: 30px;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;

  table {
    width: 100%;
    background: red;
    & > th {
      background: burlywood;
      & > tr {
        width: 100%;
        background: blue;
      }
    }
  }

  /* .content {

    width: 300px;
    height: 100%;
    margin: 0 auto;
    background: red;

    & > .title > ul > li {
      border: 1px solid black;
    }
  } */
`;

export default MyProfileStyled;
