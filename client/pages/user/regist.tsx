import React, { useState } from 'react';
import axios from 'axios';
import Router from 'next/router';
import Header from '../../components/header';
import RegistStyled from '../../styles/regist';

const Regist = () => {
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');
  const [inputPw2, setInputPw2] = useState('');
  const [idCheck, setIdCheck] = useState('');
  const [pwCheck, setPwCheck] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [selectEmail, setSelectEmail] = useState('gmail.com');
  const [authNum, setAuthNum] = useState('');
  const [authNum2, setAuthNum2] = useState('');
  const [emailCheck, setEmailCheck] = useState('false');

  const submitHandle = async (e: any) => {
    e.preventDefault();
    if (idCheck !== 'true') {
      alert('아이디 중복체크 하세요');
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
      userid: { value: userid },
      userpw: { value: userpw },
      name: { value: name },
      birth: { value: birth },
      gender: { value: gender },
      email: { value: email },
      selectMail: { value: selectMail },
    } = e.target;

    const body = {
      userid,
      userpw,
      name,
      birth,
      gender,
      email,
      selectMail,
    };

    await axios.post('http://localhost:4000/regist', body);
    alert('가입완료');
    // Router.push('http://localhost:3000/user/myProfile');
  };

  const idOverlap = (e: any) => {
    setInputId(e.target.value);
    setIdCheck('');
  };

  const idOverlapCheck = async (e: any) => {
    e.preventDefault();
    if (inputId.match(/^[A-Za-z|0-9|]{4,12}$/gi)?.length === undefined) {
      setIdCheck('wrongId');
      return;
    }

    const response = await axios.post('http://localhost:4000/overlap_Check', {
      inputId,
    });
    if (response.data.idCheck) {
      setIdCheck('true');
    } else {
      setIdCheck('false');
    }
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

  const pwOverlapCheck = (e: any) => {
    e.preventDefault();

    if (
      inputPw.match(/^[A-Za-z|0-9|]{4,16}$/gi)?.length === undefined ||
      inputPw2.match(/^[A-Za-z|0-9|]{4,16}$/gi)?.length === undefined
    ) {
      setPwCheck('wrongPw');
      return;
    }

    if (inputPw === inputPw2) setPwCheck('true');
    else {
      setPwCheck('false');
    }
  };

  const emailOverlap = (e: any) => {
    setInputEmail(e.target.value);
  };
  const selectMail = (e: any) => {
    setSelectEmail(e.target.value);
  };

  const sendAuthNum = async () => {
    const userEmail = inputEmail + '@' + selectEmail;
    const response = await axios.post('http://localhost:4000/sendAuthNum', {
      userEmail,
    });
    setAuthNum(response.data.authNum);
  };

  const inputAuthNum = (e: any) => {
    setAuthNum2(e.target.value);
    setEmailCheck('false');
  };

  const authEmail = async () => {
    if (authNum2 === '') {
      setEmailCheck('false');
      return;
    }
    if (authNum === authNum2) setEmailCheck('true');
    else setEmailCheck('false');
  };

  return (
    <>
      <Header />
      <RegistStyled>
        <div className="wrap">
          <ul className="title">
            <li>ID</li>
            <li>비밀번호</li>
            <li>비밀번호확인</li>
            <li>이름</li>
            <li>생년월일</li>
            <li>성별</li>
            <li>이메일</li>
            <li>인증번호</li>
          </ul>
          <form onSubmit={submitHandle} className="regist_frm" method="post">
            <input
              type="text"
              className="userid"
              name="userid"
              placeholder="4자 이상 입력하세요."
              onChange={idOverlap}
              maxLength={10}
            />
            <button type="button" onClick={idOverlapCheck} className="overlap">
              ID중복체크
            </button>
            <br />
            {idCheck === '' ? (
              <span className="false">id 중복체크를 해주세요</span>
            ) : null}
            {idCheck === 'true' ? (
              <span className="true">사용가능한 id</span>
            ) : null}
            {idCheck === 'false' ? (
              <span className="false">사용 불가능한 id</span>
            ) : null}
            {idCheck === 'wrongId' ? (
              <span className="false">알파벳, 숫자로 4~10자만 가능합니다.</span>
            ) : null}
            <br />
            <br />
            <input
              type="password"
              onChange={pwOverlap}
              name="userpw"
              placeholder="4자리 이상 입력해주세요."
              maxLength={16}
            />
            <br />
            <input
              type="password"
              onChange={pwOverlap2}
              className="userpw"
              name="pwCheck"
              placeholder="4자리 이상 입력해주세요."
              maxLength={16}
            />
            <button type="button" onClick={pwOverlapCheck} className="pwCheck">
              비번확인
            </button>
            <br />
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
            <br />
            <br />
            <input type="text" name="name" placeholder="name" />
            <br />
            <input type="text" name="birth" placeholder="birth" />
            <br />
            <input type="text" name="gender" placeholder="gender" />
            <br />
            <input
              onChange={emailOverlap}
              type="text"
              name="email"
              placeholder="email"
            />
            <span>@</span>
            <select
              onChange={selectMail}
              name="selectMail"
              className="selectMail"
            >
              <option>gmail.com</option>
              <option>naver.com</option>
              <option>kakao.com</option>
            </select>
            <button type="button" onClick={sendAuthNum}>
              인증번호받기
            </button>
            <br />
            <input
              onChange={inputAuthNum}
              type="text"
              placeholder="6자리 인증번호를 입력하세요."
            />
            <button type="button" onClick={authEmail}>
              인증하기
            </button>
            <br />
            {emailCheck === '' ? (
              <span className="false">인증번호 입력해주세요.</span>
            ) : null}
            {emailCheck === 'true' ? (
              <span className="true">인증되었습니다.</span>
            ) : null}
            {emailCheck === 'false' ? (
              <span className="false">인증번호가 다릅니다.</span>
            ) : null}
            <br />
            <input type="submit" className="button" value="회원가입" />
          </form>
        </div>
      </RegistStyled>
    </>
  );
};

export default Regist;
