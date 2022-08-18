import styled from 'styled-components';

export const AddAppFrm = styled.form`
  width: 330px;
  margin: 0 auto;

  & > ul > li {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;

    & > label {
      color: white;
      margin-bottom: 3px;
      font-size: 13px;
    }

    & > input {
      width: 100%;
      height: 50px;
      box-sizing: border-box;
      border: 2px solid #a6a19e;
      border-radius: 5px;
      font-size: 16px;
      padding: 7px;
      background-color: white;
    }

    & > input:focus {
      border: 2px solid dodgerblue;
      outline: none;
    }

    & > textarea {
      width: 100%;
      height: 100px;
      box-sizing: border-box;
      border: 2px solid #a6a19e;
      border-radius: 5px;
      font-size: 16px;
      padding: 7px;
      resize: none;
    }

    & > textarea:focus {
      border: 2px solid dodgerblue;
      outline: none;
    }
  }
`;

export const UploadInputCon = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const FileName = styled.input`
  width: 82%;
  height: 50px;
  box-sizing: border-box;
  border: 2px solid #a6a19e;
  border-radius: 5px;
  font-size: 16px;
  padding: 7px;
`;

export const FileSearchBtn = styled.label`
  border-radius: 5px;
  background-color: #007f94;
  border: none;
  box-sizing: border-box;
  color: white;
  font-size: 12px;
  width: 15%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AppLogo = styled.input`
  display: none;
`;

export const ImagePreviewCon = styled.div`
  width: 100%;
  height: 120px;
  box-sizing: border-box;
  border: 2px solid #a6a19e;
  border-radius: 5px;
  font-size: 16px;
  padding: 7px;
  background-color: white;
`;
