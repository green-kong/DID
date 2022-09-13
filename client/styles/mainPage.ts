import styled from 'styled-components';

export const MainWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const MainTitle = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  font-weight: 700;
  text-align: center;
  background: -webkit-linear-gradient(
    128deg,
    rgba(164, 69, 212, 1) 40%,
    rgba(250, 199, 161, 1) 60%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

interface IMainVisual {
  widthPercent: number;
}

export const MainVisual = styled.div`
  position: relative;
  width: ${({ widthPercent }: IMainVisual) =>
    widthPercent ? `${widthPercent * 700}px` : '700px'};
  height: ${({ widthPercent }: IMainVisual) =>
    widthPercent ? `${widthPercent * 700}px` : '700px'};
`;

export const MainVisualIconWrap = styled.div`
  width: ${({ widthPercent }: IMainVisual) =>
    widthPercent ? `${widthPercent * 280}px` : '280px'};
  height: ${({ widthPercent }: IMainVisual) =>
    widthPercent ? `${widthPercent * 280}px` : '280px'};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainVisualText = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-size: 70px;
  font-weight: 700;
  position: absolute;
  opacity: ${({ widthPercent }: IMainVisual) =>
    widthPercent ? (1 - widthPercent) * 2 : 0};
`;

interface IMainVisualIcon {
  w: string;
  percent: number;
  widthPercent: number;
}

export const MainVisualIcon = styled.div`
  width: ${(props: IMainVisualIcon) => props.w};
  height: 50%;
  display: flex;
  justify-content: space-between;
  opacity: ${({ widthPercent }: IMainVisual) =>
    widthPercent ? 1 - (1 - widthPercent) * 2 : 1};

  & > .icon {
    width: ${({ widthPercent }: IMainVisualIcon) =>
      widthPercent ? `${widthPercent * 70}px` : '70px'};
    height: auto;
  }

  & > .passport {
    transform: ${({ percent }: IMainVisualIcon) =>
      `translate(${320 * percent}px, ${520 * percent}px) 
      scale(${1 + 0.5 * percent * -1})`};
  }

  & > .idCard {
    transform: ${({ percent }: IMainVisualIcon) =>
      `translate(${200 * percent * -1}px, ${700 * percent}px) 
      rotate(${45 * percent * -1}deg) 
      scale(${1 + 0.3 * percent * -1})`};
  }

  & > .fingerPrint {
    transform: ${({ percent }: IMainVisualIcon) =>
      `translate(${450 * percent * -1}px, ${650 * percent}px) 
      rotate(${percent * 120}deg)`};
  }

  & > .birth {
    transform: ${({ percent }: IMainVisualIcon) =>
      `translate(0px, ${900 * percent}px) 
      scale(${1 - 0.3 * percent}) 
      rotate(${30 * percent}deg)`};
  }

  & > .gender {
    transform: ${({ percent }: IMainVisualIcon) =>
      `translate(${330 * percent}px, ${830 * percent}px)`};
  }
`;

export const MainInform = styled.div`
  margin-top: 100px;
  width: 800px;
`;

export const MainInformTitle = styled.p`
  width: 800px;
  font-size: 35px;
  font-weight: 700;
  background: -webkit-linear-gradient(
    128deg,
    rgba(164, 69, 212, 1) 0%,
    rgba(250, 199, 161, 1) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const MainInformContent = styled.p`
  margin-top: 15px;
  font-size: 20px;
  line-height: 35px;
`;

export const MainFeatureWrap = styled.div`
  margin-top: 50px;
  width: 1000px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  padding: 50px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MainFeatureNav = styled.ul`
  width: 48%;
  height: 400px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
`;

interface IMainFeatureNavList {
  clicked: boolean;
}

export const MainFeatureNavList = styled.li`
  font-size: 25px;
  cursor: pointer;

  & > p {
    ${(props: IMainFeatureNavList) =>
      props.clicked &&
      `background: -webkit-linear-gradient(
    128deg,
    rgba(164, 69, 212, 1) 0%,
    rgba(250, 199, 161, 1) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;`}
    font-weight: ${(props: IMainFeatureNavList) => props.clicked && 700};
    border-bottom: ${(props: IMainFeatureNavList) =>
      props.clicked ? '1px solid white' : 'none'};
    padding-bottom: 10px;
  }

  & > div {
    display: ${(props: IMainFeatureNavList) =>
      props.clicked ? 'block' : 'none'};
    font-size: 18px;
    padding-top: 10px;
  }
`;

export const MainFeatureImg = styled.div`
  width: 48%;
  height: 480px;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
`;
