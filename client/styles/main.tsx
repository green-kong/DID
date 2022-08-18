import styled from 'styled-components';

interface IMenuIcon {
  imageUrl: string;
}

export const MenuWrap = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 100px - 40px);
  justify-content: space-between;
  align-items: center;
`;

export const IndexMenu = styled.div`
  width: 580px;
  height: 400px;
  background-color: #093250;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 8px 4px 20px 2px rgba(0, 0, 0, 0.3);
  font-size: 30px;
  color: white;
  transition: all 140ms ease-in;
  cursor: pointer;

  :hover {
    background-color: #007f94;
  }
`;

export const MenuIcon = styled.div`
  width: 170px;
  height: 170px;
  background-size: 170px;
  margin-bottom: 10px;
  background-image: url(${(props: IMenuIcon) => props.imageUrl});

  .user_menu_icon {
    background-image: url('/user_menu_icon.png');
  }

  .dev_menu_icon {
    background-image: url('/dev_menu_icon.png');
  }
`;
