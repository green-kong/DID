import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Router from 'next/router';
import Image from 'next/image';
import RegistStyled from '../../styles/regist';

const Regist = () => {
  // const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');
  const [inputPw2, setInputPw2] = useState('');
  const [idCheck, setIdCheck] = useState('');
  const [pwCheck, setPwCheck] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [selectEmail, setSelectEmail] = useState('@gmail.com');
  const [authNum, setAuthNum] = useState('');
  const [authNum2, setAuthNum2] = useState('');
  const [emailCheck, setEmailCheck] = useState('');

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
      userid: { value: userid },
      userpw: { value: userpw },
      name: { value: name },
      birth: { value: birth },
      email: { value: email },
      selectMail: { value: selectMail },
    } = e.target;

    const body = {
      userid,
      userpw,
      name,
      birth,
      email,
      selectMail,
    };

    await axios.post('http://localhost:4000/regist', body);
    alert('가입완료');
    Router.push('http://localhost:3000/user/myProfile');
  };

  const idOverlap = async (e: any) => {
    if (e.target.value.length === 0) setIdCheck('');
    if (e.target.value.match(/^[A-Za-z|0-9|]{4,12}$/gi) !== null) {
      const response = await axios.post('http://localhost:4000/overlap_Check', {
        inputId: e.target.value,
      });
      if (response.data.idCheck) setIdCheck('true');
      else setIdCheck('false');
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
    setInputEmail(e.target.value);
  };
  const selectMail = (e: any) => {
    setSelectEmail(e.target.value);
  };

  const sendAuthNum = async () => {
    const userEmail = inputEmail + selectEmail;
    const response = await axios.post('http://localhost:4000/sendAuthNum', {
      userEmail,
    });
    setAuthNum(response.data.authNum);
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

    if (authNum.length === 6 && authNum2.length === 6) {
      if (authNum === authNum2) {
        setEmailCheck('true');
      } else {
        setEmailCheck('false');
      }
    }
  }, [inputPw, inputPw2, authNum, authNum2]);
  return (
    <>
      <RegistStyled>
        <div className="wrap">
          <form onSubmit={submitHandle} className="regist_frm" method="post">
            <div className="frm_header">
              <div className="frm_header_img">
                <Image
                  alt="로고"
                  src="/regist_mark.png"
                  width={50}
                  height={50}
                />
              </div>
              <div className="frm_header_text">
                <span>Sign up to DID</span>
              </div>
            </div>
            <div className="title">아이디</div>
            <input
              type="text"
              className="userid"
              name="userid"
              placeholder="4자 이상 입력하세요."
              onChange={idOverlap}
              maxLength={10}
            />
            <br />
            {idCheck === '' ? (
              <span className="false">알파벳과 영어만 가능합니다.</span>
            ) : null}
            {idCheck === 'true' ? (
              <span className="true">사용가능한 id</span>
            ) : null}
            {idCheck === 'false' ? (
              <span className="false">사용 불가능한 id</span>
            ) : null}
            <br />
            <br />
            <div className="title">비밀번호</div>
            <input
              type="password"
              onChange={pwOverlap}
              name="userpw"
              placeholder="4자리 이상 입력해주세요."
              maxLength={16}
            />
            <br />
            <div className="title">비밀번호 확인</div>
            <input
              type="password"
              onChange={pwOverlap2}
              className="userpw"
              name="pwCheck"
              placeholder="4자리 이상 입력해주세요."
              maxLength={16}
            />
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
            <div className="title">이름</div>
            <input type="text" name="name" placeholder="name" />
            <br />
            <div className="title">생년월일</div>
            <input type="text" name="birth" placeholder="birth" />
            <br />
            <div className="title">이메일</div>
            <input
              onChange={emailOverlap}
              className="email"
              type="text"
              name="email"
              placeholder="email"
            />
            <select
              onChange={selectMail}
              name="selectMail"
              className="selectMail"
            >
              <option>@gmail.com</option>
              <option>@naver.com</option>
              <option>@kakao.com</option>
            </select>
            <button type="button" onClick={sendAuthNum}>
              코드전송
            </button>
            <br />
            <div className="title">이메일 인증코드</div>
            <input
              onChange={inputAuthNum}
              type="text"
              placeholder="6자리 인증번호를 입력하세요."
            />
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
