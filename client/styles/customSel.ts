import styled from 'styled-components';

export const SelectWrap = styled.div`
  width: 100%;
  position: relative;
`;

export const StyledSelect = styled.div`
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  border: 2px solid #a6a19e;
  border-radius: 5px;
  font-size: 16px;
  padding-left: 7px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  z-index: 2;
`;

export const SelectArrow = styled.div`
  width: 30px;
  height: 50px;
  border-left: 3px solid #a6a19e;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Arrow = styled.div`
  width: 0px;
  height: 0px;
  border-top: 12px solid #a6a19e;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
`;

interface OptionWrapProps {
  isOpend: boolean;
}

export const OptionWrap = styled.div`
  width: 100%;
  height: 80px;
  transition: 300ms all ease-in;
  opacity: ${(props: OptionWrapProps) => (props.isOpend ? 0 : 1)};
  position: absolute;
  top: ${(props: OptionWrapProps) => (props.isOpend ? '0px' : '50px')};
  z-index: 1;
`;

export const StyledOption = styled.div`
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  border: 2px solid #a6a19e;
  border-radius: 5px;
  font-size: 16px;
  padding: 7px;
  background-color: #fff;
  color: black;
  display: flex;
  align-items: center;
`;
