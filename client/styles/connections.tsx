import styled from 'styled-components';

export const ConnectionsWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 5%;
`;

export const ConnectedDiv = styled.div`
  width: 30%;
  height: 240px;
  background-color: #fff;
  margin-bottom: 40px;
  border-radius: 8px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
`;

export const ConnectionImg = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ConnectionInfo = styled.div`
  padding: 40px 0;
  width: 50%;

  & > .connection_name {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 16px;
    color: black;
  }

  & > .connection_desc {
    color: #c2bdba;
    font-size: 12px;
    margin-bottom: 30px;
  }

  & > .disconnect_btn {
    width: 80px;
    height: 30px;
    background-color: #f44954;
    border: none;
    border-radius: 4px;
    color: white;
  }
`;
