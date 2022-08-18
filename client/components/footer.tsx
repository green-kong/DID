import styled from 'styled-components';

const FooterDiv = styled.div`
  margin: 0 auto;
  width: 1200px;
  height: 40px;
  display: flex;
  justify-content: center;
  opacity: 0.7;
  position: relative;
  bottom: 0;
`;

const FooterCon = styled.div`
  width: 250px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const FooterLogo = styled.div`
  width: 30px;
  height: 30px;
  background-image: url('/logo.png');
  background-size: 30px;
`;

const FooterText = styled.div`
  color: white;
  font-size: 12px;
`;

const Footer = () => {
  return (
    <FooterDiv>
      <FooterCon>
        <FooterLogo></FooterLogo>
        <FooterText>DECENTRALIZED IDENTIFIER</FooterText>
      </FooterCon>
    </FooterDiv>
  );
};

export default Footer;
