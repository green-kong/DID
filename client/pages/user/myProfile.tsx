import Image from 'next/image';
import { useState } from 'react';
import axios from 'axios';
import Router from 'next/router';
import { useCookies } from 'react-cookie';
import {
  SignUpTitle,
  SignUpFrm,
  EmailContainer,
  SignUpBtn,
} from '../../styles/registStyle';
import Modal from '../../components/Modal';

interface IUserInfo {
  userId: string;
  name: string;
  birth: string;
  email: string;
}

const MyProfile = () => {
  const [pwCheckModal, setPwCheckModal] = useState<boolean>(true);
  const [rejoinModal, setRejoinModal] = useState<boolean>(false);
  const [resignModal, setResignModal] = useState<boolean>(false);
  const [userPw, setUserPw] = useState<string>('');
  const [passwordCheck, setPasswordCheck] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<IUserInfo | undefined>();

  const [cookies, setCookie, removeCookie] = useCookies();
  const userId = cookies.token;

  const closePwCheckModalCancel = () => {
    console.log('클로즈비번체크모달 캔슬');
    Router.push('/');
    setPwCheckModal(false);
  };

  const closePwCheckModalSubmit = async () => {
    const response = await axios.post('http://localhost:4000/userInfoCheck', {
      userId,
      userPw,
    });

    if (response.data.pwCheck === true) {
      setPwCheckModal(false);
      setUserInfo(response.data.userInfo);
      setPasswordCheck(true);
      // userinfo는 프론트에 뿌려줄 유저정보들이다. [ { userid: asdf, }] 등등
    } else if (response.data.pwCheck === false) {
      setPwCheckModal(true);
      // 비번틀린거 알려주자.
    }

    setPwCheckModal(false);
    console.log('클로즈비번체크모달 서밋');
  };

  const openRejoinModal = () => {
    setRejoinModal(true);
  };

  const closeRejoinModalCancel = () => {
    setRejoinModal(false);
  };

  const closeRejoinModalSubmit = async () => {
    // 또 비번확인창 나오면서 비번치고 맞으면 /user/regist로 이동

    const response = await axios.post('http://localhost:4000/userInfoCheck', {
      userId,
      userPw,
    });
    console.log(response.data.pwCheck);
    removeCookie('token');

    // if (response.data.pwCheck) {
    //   await axios.post('http://localhost:4000/userResign', userId);
    //   Router.push('/user/regist');
    //   setRejoinModal(false);
    // } else if (response.data.pwCheck) {
    //   setRejoinModal(true);
    //   // 비번 다시확인하세요 메세지 ㄱㄱ
    // }

    console.log('리조인모달 서밋');
  };

  const openResignModal = () => {
    setResignModal(true);
  };

  const closeResignModalCancel = () => {
    setResignModal(false);
  };

  const closeResignModalSubmit = async () => {
    const response = await axios.post('http://localhost:4000/userInfoCheck', {
      userId,
      userPw,
    });

    // if (response.data.pwCheck) {
    //   await axios.post('http://localhost:4000/userResign', null);
    //   Router.push('/');
    //   setRejoinModal(false);
    //   alert('회원탈퇴됐슴다');
    // } else if (response.data.pwCheck) {
    //   setRejoinModal(true);
    //   // 비번 다시확인하세요 메세지 ㄱㄱ
    // }

    console.log('회원탈퇴 완료했습니다.');
  };

  // if (userInfo.length === 0) return <></>;
  // console.log(userInfo[0]);
  return (
    <>
      <SignUpTitle>
        <Image src="/chain_icon.png" width={50} height={50} alt="아이콘" />
        <p>My Profile View</p>
      </SignUpTitle>
      <SignUpFrm action="회원가입" method="post">
        <ul>
          <li>
            <label htmlFor="userId">아이디</label>
            <input
              type="text"
              name="userId"
              value={passwordCheck ? userInfo?.userId : ''}
              readOnly
            />
          </li>
          <li>
            <label htmlFor="userName">이름</label>
            <input
              type="text"
              name="userName"
              value={passwordCheck ? userInfo?.name : ''}
              readOnly
            />
          </li>
          <li>
            <label htmlFor="birth">생년월일</label>
            <input
              type="text"
              name="birth"
              value={passwordCheck ? userInfo?.birth : ''}
              readOnly
            />
          </li>
          <li>
            <label htmlFor="email">이메일</label>
            <EmailContainer w="100%">
              <input
                type="text"
                name="email"
                value={passwordCheck ? userInfo?.email : ''}
                readOnly
              />
            </EmailContainer>
          </li>
        </ul>
        <SignUpBtn
          bgc="#007f94"
          onClick={openRejoinModal}
          mb="10px"
          type="button"
        >
          재등록
        </SignUpBtn>
        <SignUpBtn bgc="#D84D56" type="button" onClick={openResignModal}>
          회원탈퇴
        </SignUpBtn>
      </SignUpFrm>
      {pwCheckModal && (
        <Modal
          modal={{
            cancel: closePwCheckModalCancel,
            submit: closePwCheckModalSubmit,
            setUserPw,
          }}
          msg="비밀번호 입력"
        />
      )}
      {rejoinModal && (
        <Modal
          modal={{
            cancel: closeRejoinModalCancel,
            submit: closeRejoinModalSubmit,
            setUserPw,
          }}
          msg="비밀번호 입력"
        />
      )}
      {resignModal && (
        <Modal
          modal={{
            cancel: closeResignModalCancel,
            submit: closeResignModalSubmit,
            setUserPw,
          }}
          msg="비밀번호 입력"
        />
      )}
      
    </>
  );
};

export default MyProfile;
