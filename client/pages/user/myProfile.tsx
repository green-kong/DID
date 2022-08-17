import Image from 'next/image';
import { useEffect, useState } from 'react';
import axios from 'axios';
import MyProfileStyled from '../../styles/myProfile';
import {
  SignUpTitle,
  SignUpFrm,
  EmailContainer,
  SignUpBtn,
} from '../../styles/registStyle';

const MyProfile = () => {
  // const [profile, setProfile] = useState([]);

  // const viewProfile = async () => {
  //   const response = await axios.post(
  //     'http://localhost:4000/viewProfile',
  //     null,
  //   );
  //   setProfile(response.data.result);
  // };

  // const view = () => {
  //   return (
  //     <>
  //       {profile.map((v: any, k) => {
  //         return (
  //           <ul key={k}>
  //             <li>{v.userid}</li>
  //             <li>{v.idx}</li>
  //           </ul>
  //         );
  //       })}
  //     </>
  //   );
  // };

  // useEffect(() => {
  //   viewProfile();
  // }, []);

  // if (profile.result.length === 0) return;
  // if (profile.length === 0) return;
  // console.log(profile);
  return (
    <>
      <SignUpTitle>
        <Image src="/chain_icon.png" width={50} height={50} alt="아이콘" />
        <p>Sign up to DID</p>
      </SignUpTitle>
      <SignUpFrm action="회원가입" method="post">
        <ul>
          <li>
            <label htmlFor="userId">아이디</label>
            <input type="text" id="userId" />
          </li>
          <li>
            <label htmlFor="userPw">비밀번호</label>
            <input type="password" id="userPw" />
          </li>
          <li>
            <label htmlFor="pwCheck">비밀번호 확인</label>
            <input type="password" id="pwCheck" />
            {/* {pwCheck === '' ? (
              <span className="false">비번확인 해주세요</span>
            ) : null}
            {pwCheck === 'true' ? (
              <span className="true">비번 일치합니다.</span>
            ) : null}
            {pwCheck === 'false' ? (
              <span className="false">비번 일치하지않습니다.</span>
            ) : null}
            {pwCheck === 'wrongPw' ? (
              <span className="false">
                4~16자, 알파벳, 숫자, 특수문자(~,!,@,#,$,%,^,&amp;,*)
              </span>
            ) : null} */}
          </li>
          <li>
            <label htmlFor="userName">이름</label>
            <input type="text" id="userName" />
          </li>
          <li>
            <label htmlFor="birth">생년월일</label>
            <input type="text" id="birth" />
          </li>
          <li>
            <label htmlFor="email">이메일</label>
            <EmailContainer>
              <input type="email" id="email" />
              <select name="selectMail">
                <option>@gmail.com</option>
                <option>@naver.com</option>
                <option>@kakao.com</option>
              </select>
              <button type="button">코드전송</button>
            </EmailContainer>
          </li>
          <li>
            <label htmlFor="email_code">이메일 인증코드</label>
            <EmailContainer>
              <input className="email_code" type="text" id="email_code" />
            </EmailContainer>
          </li>
          {/* {emailCheck === '' ? (
            <span className="false">인증번호 입력해주세요.</span>
          ) : null}
          {emailCheck === 'true' ? (
            <span className="true">인증되었습니다.</span>
          ) : null}
          {emailCheck === 'false' ? (
            <span className="false">인증번호가 다릅니다.</span>
          ) : null} */}
        </ul>
        <SignUpBtn mb="10px" type="submit">
          정보수정
        </SignUpBtn>
        <SignUpBtn bgc="#D84D56" type="button">
          회원탈퇴
        </SignUpBtn>
      </SignUpFrm>
    </>
  );
};

export default MyProfile;
