import styled from 'styled-components';

const BgDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url('/bg.png');
  position: absolute;
  top: 0;
  z-index: 1;
`;

const Background = () => {
  return <BgDiv></BgDiv>;
};

export default Background;
