import styled from 'styled-components';

const Main = styled.div`
  height: 1000px;
  margin: 0;
  padding: 0;
  /* background : green; */

  & > .content {
    width: 80%;
    height: 600px;
    display: flex;
    justify-content: space-evenly;
    background: aqua;
    text-align: center;
    margin: 0 auto;
    margin-top: 40px;

    & > .user {
      display: inline-block;
      width: 45%;
      height: 100%;
      background: blue;
    }

    & > .admin {
      width: 45%;
      height: 100%;
      background: red;
    }
  }
`;

export default Main;

// const Responsive = ({ children }: any) => {
//     return <Main>{children}</Main>;
// };

// export default Responsive;
