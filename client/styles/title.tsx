import styled from 'styled-components';

interface ITitleIcon {
  imageUrl: string;
}

export const ContentTitle = styled.div`
  width: 210px;
  height: 96px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 45px;
`;

export const TitleIcon = styled.div`
  width: 50px;
  height: 50px;
  background-image: url(${(props: ITitleIcon) => props.imageUrl});
  background-size: 50px;
`;

export const Title = styled.p`
  font-size: 30px;
  color: white;
`;
