import Image from 'next/image';
import { useContext, useState } from 'react';
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
import { Global } from '../_app';
import LoadingModal from '../../components/loading';

interface IUserInfo {
  userId: string;
  name: string;
  birth: string;
  email: string;
  gender: string;
}

const MyProfile = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pwCheckModal, setPwCheckModal] = useState<boolean>(true);
  const [rejoinModal, setRejoinModal] = useState<boolean>(false);
  const [resignModal, setResignModal] = useState<boolean>(false);
  const [userPw, setUserPw] = useState<string>('');
  const [passwordCheck, setPasswordCheck] = useState<boolean>(false);
  const [pwWrongMessage, setPwWrongMessage] = useState<string>('');
  const [userInfo, setUserInfo] = useState<IUserInfo | undefined>();
  const [, , removeCookie] = useCookies();
  const { userData, setIsLogin } = useContext(Global);
  const closePwCheckModalCancel = () => {
    Router.push('/');
    setPwCheckModal(false);
  };

  const closePwCheckModalSubmit = async () => {
    setIsLoading(true);
    setPwWrongMessage('로딩중');
    try {
      const response = await axios.post(
        'http://localhost:4000/user/userInfoCheck',
        {
          userId: userData?.userId,
          userPw,
        },
      );
      if (response.data.pwCheck === true) {
        setPwCheckModal(false);
        setUserInfo(response.data.userInfo);
        setPasswordCheck(true);
        setUserPw('');
        setPwWrongMessage('');
      } else {
        setPwCheckModal(true);
        setPwWrongMessage('비번 틀려요');
      }
    } catch (e) {
      console.log(e);
    }

    setIsLoading(false);
  };

  const openRejoinModal = () => {
    setRejoinModal(true);
    setUserPw('');
  };

  const closeRejoinModalCancel = () => {
    setRejoinModal(false);
    setPwWrongMessage('');
    setUserPw('');
  };

  const closeRejoinModalSubmit = async () => {
    setIsLoading(true);
    setPwWrongMessage('로딩중');
    const response = await axios.post('http://localhost:4000/user/userResign', {
      userIdx: userData?.idx,
      userId: userData?.userId,
      userPw,
    });

    try {
      if (setIsLogin === undefined) return;
      if (response.data.pwCheck === true) {
        setRejoinModal(false);
        setUserInfo(response.data.userInfo);
        setPasswordCheck(true);
        setUserPw('');
        removeCookie('DID_Token');
        setIsLogin(false);
        setPwWrongMessage('');
        Router.push('/user/regist');
      } else if (response.data.pwCheck === false) {
        setPwWrongMessage('비번 틀려요');
        setRejoinModal(true);
      }
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };

  const openResignModal = () => {
    setResignModal(true);
    setUserPw('');
  };

  const closeResignModalCancel = () => {
    setResignModal(false);
    setPwWrongMessage('');
    setUserPw('');
  };

  const closeResignModalSubmit = async () => {
    setIsLoading(true);
    setPwWrongMessage('로딩중');
    const response = await axios.post('http://localhost:4000/user/userResign', {
      userIdx: userData?.idx,
      userId: userData?.userId,
      userPw,
    });
    try {
      if (setIsLogin === undefined) return;
      if (response.data.pwCheck) {
        setResignModal(false);
        setUserInfo(response.data.userInfo);
        setPasswordCheck(true);
        setUserPw('');
        removeCookie('DID_Token');
        setIsLogin(false);
        setPwWrongMessage('');
        Router.push('/');
      } else {
        setResignModal(true);
        setPwWrongMessage('비번 틀려요');
      }
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };

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
            <label htmlFor="birth">성별</label>
            <input
              type="text"
              name="gender"
              value={passwordCheck ? userInfo?.gender : ''}
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
          pwWrongMessage={pwWrongMessage}
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
          pwWrongMessage={pwWrongMessage}
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
          pwWrongMessage={pwWrongMessage}
        />
      )}
      {isLoading && <LoadingModal />}
    </>
  );
};

export default MyProfile;
