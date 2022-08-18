import styled from 'styled-components';

export const ModalBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalAlert = styled.div`
  width: 360px;
  height: 220px;
  background-color: #fff;
  border-radius: 8px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ModalIcon = styled.div`
  width: 44px;
  height: 44px;
  background-image: url('/alert_icon.png');
  background-size: 44px;
  margin-bottom: 30px;
`;

export const ModalDesc = styled.div`
  font-size: 35px;
  color: black;
`;

export const ModalBtnCon = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 48px;
`;

interface IModalBtn {
  border?: string;
  bgc?: string;
  color?: string;
}

export const ModalBtn = styled.button`
  width: 48%;
  font-size: 20px;
  border-radius: 4px;
  cursor: pointer;
  border: ${(props: IModalBtn) => props.border || 'rbga(0, 0, 0, 0.6)'};
  background-color: ${(props: IModalBtn) => props.bgc || 'white'};
  color: ${(props: IModalBtn) => props.color || 'rbga(0, 0, 0, 0.6)'};
`;
