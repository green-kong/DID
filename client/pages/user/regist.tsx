import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Router from 'next/router';
import SelOpt from '../../components/selOpt';
import {
  SignUpTitle,
  SignUpFrm,
  EmailContainer,
  SignUpBtn,
} from '../../styles/registStyle';

interface IOptions {
  key: string;
  value: string;
}

const Regist = () => {
  const [inputPw, setInputPw] = useState('');
  const [inputPw2, setInputPw2] = useState('');
  const [idCheck, setIdCheck] = useState('');
  const [pwCheck, setPwCheck] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [selectEmail, setSelectEmail] = useState('@gmail.com');
  const [authNum, setAuthNum] = useState('');
  const [authNum2, setAuthNum2] = useState('');
  const [emailCheck, setEmailCheck] = useState('');
  const [sendEmail, setSendEmail] = useState('false');
  const [mailLength, setMailLength] = useState(false);
  const [selectIsOpend, SetselectIsOpend] = useState<boolean>(false);
  const [genderState, setGenderState] = useState<IOptions>({
    key: '남자',
    value: 'male',
  });

  const handleGenderState = (value: IOptions) => () => {
    setGenderState(value);
    SetselectIsOpend(!selectIsOpend);
  };

  const openOrCloseSelect = () => {
    SetselectIsOpend(!selectIsOpend);
  };

  const submitHandle = async (e: any) => {
    e.preventDefault();
    if (idCheck !== 'true') {
      alert('아이디를 확인해주세요.');
      return;
    }

    if (pwCheck !== 'true') {
      alert('비밀번호확인 해주세요');
      return;
    }

    if (emailCheck !== 'true') {
      alert('이메일 인증을 해주세요.');
      return;
    }
    const {
      userId: { value: userId },
      userPw: { value: userPw },
      userName: { value: name },
      birth: { value: birth },
      email: { value: userEmail },
      selectMail: { value: selectMail },
    } = e.target;

    const body = {
      userId,
      userPw,
      name,
      birth,
      userEmail,
      selectMail,
      gender: genderState.value,
    };
    try {
      const response = await axios.post(
        'http://localhost:4000/user/regist',
        body,
      );
      if (response.data.regist === false) throw new Error();
      alert('가입완료');
      Router.push('/user/login');
    } catch (e) {
      console.log(e);
      alert('가입 에러남');
    }
  };

  const idOverlap = async (e: any) => {
    if (e.target.value.length === 0) setIdCheck('');
    if (e.target.value.match(/^[A-Za-z|0-9|]{4,12}$/gi) !== null) {
      try {
        const response = await axios.post(
          'http://localhost:4000/user/idOverlap_Check',
          {
            inputId: e.target.value,
          },
        );
        if (response.data.idCheck) setIdCheck('true');
        else setIdCheck('false');
      } catch (e) {
        console.log(e);
        setIdCheck('false');
      }
    } else {
      setIdCheck('false');
    }
    if (e.target.value.length === 0) setIdCheck('');
  };

  const pwOverlap = (e: any) => {
    e.preventDefault();

    setPwCheck('');
    setInputPw(e.target.value);
  };

  const pwOverlap2 = (e: any) => {
    e.preventDefault();
    setPwCheck('');
    setInputPw2(e.target.value);
  };

  const emailOverlap = (e: any) => {
    if (e.target.value.length === 0) {
      setMailLength(false);
    } else {
      setMailLength(true);
      setInputEmail(e.target.value);
    }
  };

  const selectMail = (e: any) => {
    setSelectEmail(e.target.value);
  };

  const sendAuthNum = async () => {
    if (!mailLength) return;
    setSendEmail('lodding');
    try {
      const userEmail = inputEmail + selectEmail;
      const response = await axios.post(
        'http://localhost:4000/user/sendAuthNum',
        {
          userEmail,
        },
      );
      const authString = response.data.authNum.join('');

      setAuthNum(authString);
      setSendEmail('true');
      alert('이메일이 전송되었습니다.');
    } catch (e) {
      console.log(e);
    }
  };

  const inputAuthNum = (e: any) => {
    setAuthNum2(e.target.value);
    setEmailCheck('false');
  };

  useEffect(() => {
    const pwCheck1 = inputPw.match(/^[A-Za-z|0-9|~!@#$%^&*]{4,16}$/gi)?.length;
    const pwCheck2 = inputPw2.match(/^[A-Za-z|0-9|~!@#$%^&*]{4,16}$/gi)?.length;

    if (
      inputPw === inputPw2 &&
      (pwCheck1 !== undefined || pwCheck2 !== undefined)
    ) {
      setPwCheck('true');
    }

    if (
      inputPw !== inputPw2 &&
      (pwCheck1 !== undefined || pwCheck2 !== undefined)
    ) {
      setPwCheck('false');
    }

    if (pwCheck1 === undefined || pwCheck2 === undefined) {
      setPwCheck('wrongPw');
    }

    if (authNum.length >= 6 && authNum2.length >= 6) {
      if (authNum === authNum2) {
        setEmailCheck('true');
      } else {
        setEmailCheck('false');
      }
    }
  }, [inputPw, inputPw2, authNum, authNum2]);

  return (
    <>
      <SignUpTitle>
        <Image src="/chain_icon.png" width={50} height={50} alt="아이콘" />
        <p>Sign up to DID</p>
      </SignUpTitle>
      <SignUpFrm action="회원가입" method="post" onSubmit={submitHandle}>
        <ul>
          <li>
            <label htmlFor="userId">아이디</label>
            <input
              type="text"
              name="userId"
              onChange={idOverlap}
              autoComplete="off"
            />
            {idCheck === '' ? (
              <span className="false">알파벳과 영어만 가능합니다.</span>
            ) : null}
            {idCheck === 'true' ? (
              <span className="true">사용가능한 id</span>
            ) : null}
            {idCheck === 'false' ? (
              <span className="false">사용 불가능한 id</span>
            ) : null}
          </li>
          <li>
            <label htmlFor="userPw">비밀번호</label>
            <input type="password" name="userPw" onChange={pwOverlap} />
          </li>
          <li>
            <label htmlFor="pwCheck">비밀번호 확인</label>
            <input type="password" name="pwCheck" onChange={pwOverlap2} />
            {pwCheck === '' ? (
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
            ) : null}
          </li>
          <li>
            <label htmlFor="userName">이름</label>
            <input type="text" name="userName" autoComplete="off" />
          </li>
          <li>
            <label htmlFor="birth">생년월일</label>
            <input type="text" name="birth" autoComplete="off" />
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
                onChange={emailOverlap}
                autoComplete="off"
              />
              <select name="selectMail" onChange={selectMail}>
                <option>@gmail.com</option>
                <option>@naver.com</option>
                <option>@kakao.com</option>
              </select>
              <button type="button" onClick={sendAuthNum}>
                코드전송
              </button>
            </EmailContainer>
          </li>
          <li>
            {sendEmail === 'true' ? (
              <span className="true">인증코드 전송되었습니다.</span>
            ) : null}
            {sendEmail === 'false' ? (
              <span className="false">코드전송 해주세요.</span>
            ) : null}
            {sendEmail === 'lodding' ? (
              <span className="false">메일 전송하는 중</span>
            ) : null}
          </li>
          <li>
            <label htmlFor="email_code">이메일 인증코드</label>
            <EmailContainer>
              <input
                className="email_code"
                type="text"
                name="email_code"
                onChange={inputAuthNum}
                autoComplete="off"
              />
            </EmailContainer>
          </li>
          {emailCheck === '' ? (
            <span className="false">인증번호 입력해주세요.</span>
          ) : null}
          {emailCheck === 'true' ? (
            <span className="true">인증되었습니다.</span>
          ) : null}
          {emailCheck === 'false' ? (
            <span className="false">인증번호가 다릅니다.</span>
          ) : null}
        </ul>
        <SignUpBtn type="submit">회원가입</SignUpBtn>
      </SignUpFrm>
    </>
  );
};

export default Regist;
