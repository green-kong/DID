import styled from 'styled-components';

const Main = styled.div`
  * {
    margin: 0;
    padding: 0;
  }

  position: absolute;
  width: 100%;
  height: 100%;
  margin-top: 50px;
  top: 0;
  z-index: 2;

  & > .content {
    width: 80%;
    display: flex;
    justify-content: space-evenly;
    background: aqua;
    text-align: center;
    margin: 0 auto;
    margin-top: 40px;

    & > .user {
      display: inline-block;
      width: 45%;
      height: 400px;
      background: blue;
    }

    & > .admin {
      width: 45%;
      height: 400px;
      background: red;
    }
  }
`;

export default Main;

// const Responsive = ({ children }: any) => {
//     return <Main>{children}</Main>;
// };

// export default Responsive;
