import styled from 'styled-components';

const RegistStyled = styled.div`
  * {
    margin: 0;
    padding: 0;
  }

  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  top: 120px;
  z-index: 2;

  li {
    list-style: none;
  }

  .wrap {
    width: 100%;
    margin: 0 auto;
  }

  .regist_frm {
    width: 330px;
    box-sizing: border-box;
    margin: 0 auto;

    .frm_header {
      margin-bottom: 40px;

      & > .frm_header_img {
        text-align: center;
      }

      & > .frm_header_text {
        text-align: center;
        color: white;
        font-size: 30px;
        font-weight: 600;
      }
    }

    /* .select {
      background: red;
    } */

    .title {
      color: white;
      font-size: 13px;
      margin-bottom: 3px;
    }

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
      width: 100%;
      height: 50px;
      box-sizing: border-box;
      border: 2px solid #a6a19e;
      border-radius: 5px;
      font-size: 16px;
      padding: 7px;
      margin-bottom: 15px;
    }

    & > .email {
      width: 40%;
    }

    & > input:focus {
      outline: none;
    }

    & > input::placeholder {
      color: #9e9e9e;
    }

    & > .button {
      margin-top: 10px;
      width: 100%;
      height: 45px;
      border-radius: 5px;
      border: none;
      text-align: center;
      background-color: #007f94;
      color: white;
      margin-bottom: 30px;
      cursor: pointer;
      font-size: 17px;
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
