import styled from 'styled-components';

const RegistStyled = styled.div`
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

  li {
    list-style: none;
  }

  .wrap {
    display: flex;
    justify-content: space-between;
    width: 60%;
    padding-top: 50px;
    padding-left: 150px;
    margin: 0 auto;
  }

  .title {
    width: 20%;
    padding-top: 7px;

    & > li {
      height: 48px;
      color: white;
      font-size: 11px;
    }

    & > li:nth-child(1) {
      height: 85px;
    }

    & > li:nth-child(3) {
      height: 85px;
    }
  }

  .regist_frm {
    width: 90%;

    & > .overlap,
    .pwCheck {
      width: 80px;
      height: 25px;
      border: none;
      border-radius: 4px;
      margin-left: 10px;
      font-size: 12px;
      background: gray;
    }

    & > input {
      width: 50%;
      height: 28px;
      font-size: 12px;
      color: white;
      border: none;
      margin-bottom: 20px;
      padding-left: 20px;
      box-sizing: border-box;
      background: #424242;
      border-radius: 4px;
      box-shadow: 2px 2px gray;
    }

    & > input:focus {
      outline: none;
    }

    & > input::placeholder {
      color: #9e9e9e;
    }

    & > .button {
      margin-top: 30px;
      padding: 0;
      color: black;
      background: #9e9e9e;
    }

    .true {
      color: green;
      font-size: 12px;
      padding-left: 30px;
    }

    .false {
      color: red;
      font-size: 12px;
      padding-left: 30px;
    }
  }
`;

export default RegistStyled;
