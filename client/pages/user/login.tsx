import Link from 'next/link';

import { ContentTitle, Title, TitleIcon } from '../../styles/title';

import { Border, LoginBtn, LoginFrm, SignUpBtn } from '../../styles/login';

const Login = () => {
  return (
    <>
      <ContentTitle>
        <TitleIcon imageUrl="/login_title_icon.png" />
        <Title>Login to DID</Title>
      </ContentTitle>
      <LoginFrm action="http://localhost:3000/authorizor/auth" method="POST">
        <ul>
          <li>
            <input name="userId" type="text" placeholder="Id" />
          </li>
          <li>
            <input name="userPw" type="password" placeholder="Password" />
          </li>
          <LoginBtn type="submit">Log in</LoginBtn>
          <Border />
          <Link href="/user/regist2">
            <SignUpBtn>Sign up</SignUpBtn>
          </Link>
        </ul>
      </LoginFrm>
    </>
  );
};

export default Login;
