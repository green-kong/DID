import styled from 'styled-components';

export const LoginFrm = styled.form`
  width: 360px;
  height: 252px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;
  padding: 0 12px;
  box-sizing: border-box;

  & > ul {
    width: 100%;

    & > li {
      margin-bottom: 15px;

      & > input {
        display: block;
        width: 100%;
        height: 40px;
        border-radius: 8px;
        border: 2px solid #a6a19e;
        box-sizing: border-box;
        padding: 15px;
      }

      & > input:focus {
        outline: black;
        border: 1px solid dodgerblue;
      }
    }
  }
`;

export const LoginBtn = styled.button`
  width: 100%;
  height: 40px;
  margin-bottom: 15px;
  background-color: #007f94;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 16px;
  cursor: pointer;
`;

export const Border = styled.div`
  width: 100%;
  height: 1px;
  background-color: #a6a19e;
  margin-bottom: 15px;
`;

export const SignUpBtn = styled.a`
  display: block;
  width: 100%;
  height: 40px;
  border: 1px solid #a6a19e;
  border-radius: 8px;
  color: #a6a19e;
  text-align: center;
  box-sizing: border-box;
  line-height: 40px;
  font-size: 16px;
`;

// .sign_up_btn {

// }

// .sign_up_btn:hover {
//   background-color: #007f94;
//   border: 1px solid #007f94;
//   color: white;
// }
