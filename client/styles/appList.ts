import styled from 'styled-components';

const AddAppBtn = styled.button`
  width: 30%;
  height: 240px;
  background-color: #007f94;
  border-radius: 8px;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > div {
    transition: ease-in 300ms all;
  }

  & > .plus_icon {
    font-size: 70px;
  }

  & > .plus_text {
    font-size: 25px;
  }

  &:hover > .plus_icon {
    font-size: 75px;
  }

  &:hover > .plus_text {
    font-size: 27px;
  }
`;

export default AddAppBtn;
