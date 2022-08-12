import styled from 'styled-components';

const UserStyled = styled.div`
  * {
    margin: 0;
    padding: 0;
  }

  background: black;
  position: absolute;
  top: 30px;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .wrap {
    width: 100%;
    margin: 0 auto;
    padding-top: 150px;
    box-sizing: border-box;
  }
  .login {
    width: 30%;
    padding: 15px;
    border: 1px solid gray;
    border-radius: 10px;
    background: black;
    margin: 0 auto;
  }

  .login_frm {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;

    & > .btn {
      width: 20%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-top: 30px;

      & > .login_btn {
        border: none;
        border-radius: 10px;
        background: gray;
        height: 65%;
      }

      & > .regist_btn {
        border: none;
        border-radius: 10px;
        background: gray;
        height: 25%;
      }
    }

    & > .idpw {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      width: 80%;
      height: 150px;
      box-sizing: border-box;
      margin: 0 auto;

      & > .id {
        height: 30%;
        color: white;
      }

      & > .pw {
        height: 30%;
        color: white;
      }

      & > input {
        width: 80%;
        height: 30px;
        border: none;
        margin-bottom: 20px;
        padding-left: 10px;
        background: gray;
        border-radius: 10px;
        margin: 0 auto;
      }

      & > input:focus {
        outline: none;
      }

      & > input::placeholder {
        color: black;
      }
    }
  }
`;

export default UserStyled;
