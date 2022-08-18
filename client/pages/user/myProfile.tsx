import Image from 'next/image';
import { useState } from 'react';
import axios from 'axios';
import {
  SignUpTitle,
  SignUpFrm,
  EmailContainer,
  SignUpBtn,
} from '../../styles/registStyle';
import Modal from '../../components/Modal';

const MyProfile = () => {
  const [pwCheckModal, setPwCheckModal] = useState(true);
  // const [profile, setProfile] = useState([]);
  const [rejoinModal, setRejoinModal] = useState<boolean>(false);
  const [resignModal, setResignModal] = useState(false);
  const [userInfo, setUserInfo] = useState('');

  const closePwCheckModalCancel = () => {
    // 캔슬하면 홈으로 이동
    setPwCheckModal(false);
    console.log('클로즈비번체크모달 캔슬');
  };

  const closePwCheckModalSubmit = () => {
    //백에서 비번받아가고 쿠키에서 아이디값받고
    //그 두개 합쳐서 해쉬만든다음 컨트랙트상태변수에서 찾아서 있으면
    //user/myProfile로 이동함.
    console.log('클로즈비번체크모달 서밋');
    setPwCheckModal(false);
  };

  const openRejoinModal = () => {
    setRejoinModal(true);
  };

  const closeRejoinModalCancel = () => {
    setRejoinModal(false);
  };

  const closeRejoinModalSubmit = () => {
    // 또 비번확인창 나오면서 비번치고 맞으면 /user/regist로 이동
    console.log('리조인모달 서밋');
    setRejoinModal(false);
  };

  const openResignModal = () => {
    setResignModal(true);
  };

  const closeResignModalCancel = () => {
    setResignModal(false);
  };

  const closeResignModalSubmit = () => {
    // 비번창 나오고 확인되면 alert('회원탈퇴됐슴다') 띄우고 메인으로
    console.log('회원탈퇴 완료했습니다.');
  };

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
            <input type="text" name="userId" />
          </li>
          <li>
            <label htmlFor="userName">이름</label>
            <input type="text" name="userName" />
          </li>
          <li>
            <label htmlFor="birth">생년월일</label>
            <input type="text" name="birth" />
          </li>
          <li>
            <label htmlFor="email">이메일</label>
            <EmailContainer w="100%">
              <input type="text" name="email" />
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
          }}
          msg="비밀번호 입력"
        />
      )}
      {rejoinModal && (
        <Modal
          modal={{
            cancel: closeRejoinModalCancel,
            submit: closeRejoinModalSubmit,
          }}
          msg="비밀번호 입력"
        />
      )}
      {resignModal && (
        <Modal
          modal={{
            cancel: closeResignModalCancel,
            submit: closeResignModalSubmit,
          }}
          msg="비밀번호 입력"
        />
      )}
    </>
  );
};

export default MyProfile;
