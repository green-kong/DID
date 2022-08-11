import React, { useState } from 'react';
import axios from 'axios';
import Router from 'next/router';
import Header from '../../components/header';
import RegistStyled from '../../styles/regist';

const Regist = () => {
  // const [overlap, setOverlap] = useState(false);
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');
  const [inputPw2, setInputPw2] = useState('');
  const [idCheck, setIdCheck] = useState('');
  const [pwCheck, setPwCheck] = useState('');

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

    const {
      userid: { value: userid },
      userpw: { value: userpw },
      name: { value: name },
      birth: { value: birth },
      gender: { value: gender },
      email: { value: email },
    } = e.target;

    const body = {
      userid,
      userpw,
      name,
      birth,
      gender,
      email,
    };
    await axios.post('http://localhost:4000/regist', body);

    Router.push('http://localhost:3000/user/myProfile');
  };

  const idOverlap = (e: any) => {
    setInputId(e.target.value);
    setIdCheck('');
  };

  const idOverlapCheck = async (e: any) => {
    e.preventDefault();
    if (inputId.match(/^[A-Za-z|0-9|]{1,10}$/gi)?.length === undefined) {
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
    if (inputPw === inputPw2) setPwCheck('true');
    else {
      setPwCheck('false');
    }
  };
  return (
    <>
      <Header />
      <RegistStyled>
        <form onSubmit={submitHandle} className="regist_frm" method="post">
          <div>ID</div>
          <input
            type="text"
            className="userid"
            name="userid"
            placeholder="id"
            onChange={idOverlap}
          />
          <button onClick={idOverlapCheck} className="overlap">
            ID중복체크
          </button>
          <br />
          {idCheck === '' ? <span>id 중복체크를 해주세요</span> : null}
          {idCheck === 'true' ? <span>사용가능한 id</span> : null}
          {idCheck === 'false' ? <span>사용 불가능한 id</span> : null}
          {idCheck === 'wrongId' ? (
            <span>알파벳, 숫자로 1~10자만 가능합니다.</span>
          ) : null}

          <div>비밀번호</div>
          <input
            type="password"
            onChange={pwOverlap}
            name="userpw"
            placeholder="pw"
          />
          <div>비밀번호 확인</div>
          <input
            type="password"
            onChange={pwOverlap2}
            className="userpw"
            name="pwCheck"
            placeholder="비번확인"
          />

          <button onClick={pwOverlapCheck} className="pwCheck">
            비번확인
          </button>
          <br />
          {pwCheck === '' ? <span>비번확인 해주세요</span> : null}
          {pwCheck === 'true' ? <span>비번 일치합니다.</span> : null}
          {pwCheck === 'false' ? <span>비번 일치하지않습니다.</span> : null}

          <div>이름</div>
          <input type="text" name="name" placeholder="name" />
          <div>생년월일</div>
          <input type="text" name="birth" placeholder="birth" />
          <div>성별</div>
          <input type="text" name="gender" placeholder="gender" />
          <div>email</div>
          <input type="text" name="email" placeholder="email" />
          <input type="submit" value="회원가입" />
        </form>
      </RegistStyled>
    </>
  );
};

export default Regist;
