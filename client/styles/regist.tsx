import styled from 'styled-components';

const RegistStyled = styled.div`
  margin: 0;
  padding: 0;
  background: tomato;

  & > .regist_frm {
    width: 70%;
    height: 1000px;
    padding-top: 40px;
    margin: 0 auto;

    & > input {
      width: 100%;
      height: 40px;
      margin-bottom: 10px;
    }

    & > .userid,
    .userpw {
      width: 80%;
    }

    /* & > input:nth-child(7) {
      width: 80%;
    } */

    /* & > .overlap {
      width: 10%;
    } */
  }
`;

export default RegistStyled;
