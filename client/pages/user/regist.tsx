import React, { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import SelOpt from '../../components/selOpt';
import {
  SignUpTitle,
  SignUpFrm,
  EmailContainer,
  SignUpBtn,
} from '../../styles/registStyle';
import useRegist from '../../hooks/useRegist';
import LoadingModal from '../../components/loading';

export interface IOptions {
  key: string;
  value: string;
}

const Regist = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [authNum, setAuthNum] = useState('');
  const [selectIsOpend, SetselectIsOpend] = useState<boolean>(false);
  const [genderState, setGenderState] = useState<IOptions>({
    key: '남자',
    value: 'male',
  });
  const { values, setValue, setSubmit, errors } = useRegist(
    genderState.value,
    authNum,
  );

  const handleGenderState = (value: IOptions) => () => {
    setGenderState(value);
    SetselectIsOpend(!selectIsOpend);
  };

  const openOrCloseSelect = () => {
    SetselectIsOpend(!selectIsOpend);
  };

  const sendAuthNum = async () => {
    const { email, selectMail } = values;
    try {
      if (email?.length === 0) throw new Error('이메일너무 짧아욜');
      if (email === undefined || selectMail === undefined) return;
      const userEmail = email + selectMail;
      const response = await axios.post(
        'http://localhost:4000/user/sendAuthNum',
        {
          userEmail,
        },
      );
      const authString = response.data.authNum.join('');

      setAuthNum(authString);
      alert('이메일이 전송되었습니다.');
    } catch (e) {
      alert('이메일을 다시 확인해주세요.');
    }
  };

  return (
    <>
      <SignUpTitle>
        <Image src="/chain_icon.png" width={50} height={50} alt="아이콘" />
        <p>Sign up to DID</p>
      </SignUpTitle>
      <SignUpFrm action="회원가입" method="post" onSubmit={setSubmit}>
        <ul>
          <li>
            <label htmlFor="userId">아이디</label>
            <input
              type="text"
              name="userId"
              onChange={setValue}
              autoComplete="off"
            />
            <span style={{ color: 'red' }}>{errors.userId}</span>
          </li>
          <li>
            <label htmlFor="userPw">비밀번호</label>
            <input type="password" name="userPw" onChange={setValue} />
          </li>
          <li>
            <label htmlFor="pwCheck">비밀번호 확인</label>
            <input type="password" name="pwCheck" onChange={setValue} />
            <span style={{ color: 'red' }}>{errors.pwCheck}</span>
          </li>
          <li>
            <label htmlFor="userName">이름</label>
            <input
              type="text"
              name="userName"
              onChange={setValue}
              autoComplete="off"
            />
            <span style={{ color: 'red' }}>{errors.userName}</span>
          </li>
          <li>
            <label htmlFor="birth">생년월일</label>
            <input
              type="text"
              name="birth"
              onChange={setValue}
              autoComplete="off"
              minLength={6}
              maxLength={6}
            />
            <span style={{ color: 'red' }}>{errors.birth}</span>
          </li>
          <li>
            <label htmlFor="gender">성별</label>
            <SelOpt
              isOpend={selectIsOpend}
              openOrCloseSelect={openOrCloseSelect}
              options={[
                { key: '남자', value: 'male' },
                { key: '여자', value: 'female' },
              ]}
              setGenderState={handleGenderState}
              genderState={genderState}
            />
          </li>
          <li>
            <label htmlFor="email">이메일</label>
            <EmailContainer>
              <input
                type="text"
                name="email"
                minLength={4}
                maxLength={20}
                onChange={setValue}
                autoComplete="off"
              />
              <select name="selectMail" onChange={setValue}>
                <option>@gmail.com</option>
                <option>@naver.com</option>
                <option>@kakao.com</option>
              </select>
              <button type="button" onClick={sendAuthNum}>
                코드전송
              </button>
            </EmailContainer>
            <span style={{ color: 'red' }}>{errors.email}</span>
          </li>
          <li>
            <label htmlFor="email_code">이메일 인증코드</label>
            <EmailContainer>
              <input
                className="email_code"
                type="text"
                name="email_code"
                onChange={setValue}
                autoComplete="off"
              />
            </EmailContainer>
            <span style={{ color: 'red' }}>{errors.email_code}</span>
          </li>
        </ul>
        <SignUpBtn type="submit">회원가입</SignUpBtn>
      </SignUpFrm>
      {isLoading && <LoadingModal />}
    </>
  );
};

export default Regist;
