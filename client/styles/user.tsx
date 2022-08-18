import styled from 'styled-components';

const UserStyled = styled.div`
  * {
    margin: 0;
    padding: 0;
  }

  /* background: black; */
  position: absolute;
  top: 0;
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
    width: 80%;
    margin: 0 auto;
    box-sizing: border-box;

    & > .idpw {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      width: 80%;
      height: 120px;
      box-sizing: border-box;
      margin: 0 auto;

      & > input {
        width: 80%;
        height: 30px;
        font-size: 12px;
        color: white;
        border: none;
        margin-bottom: 20px;
        padding-left: 10px;
        background: #424242;
        border-radius: 4px;
        margin: 0 auto;
      }

      & > input:focus {
        outline: none;
      }

      & > input::placeholder {
        color: #9e9e9e;
      }

      & > .id,
      .pw {
        height: 32px;
        font-size: 12px;
        color: white;
      }
    }

    & > .btn {
      width: 25%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-top: 20px;

      & > .login_btn {
        border: none;
        font-size: 12px;
        border-radius: 4px;
        background: gray;
        height: 55%;
      }

      & > .regist_btn {
        border: none;
        font-size: 12px;
        border-radius: 4px;
        background: gray;
        height: 25%;
      }
    }
  }
`;

export default UserStyled;
