import {
  ModalBg,
  ModalAlert,
  ModalIcon,
  ModalDesc,
  ModalBtnCon,
  ModalBtn,
} from '../styles/quitModal';

interface IQuitModal {
  closeQuitModal: () => void;
}

const QuitModal = (props: IQuitModal) => {
  return (
    <>
      <ModalBg>
        <ModalAlert>
          <div>
            <ModalIcon></ModalIcon>
            <ModalDesc>탈퇴하시겠습니까?</ModalDesc>
          </div>
          <ModalBtnCon>
            <ModalBtn onClick={props.closeQuitModal}>취소</ModalBtn>
            <ModalBtn border="none" bgc="#f44954" color="white">
              탈퇴
            </ModalBtn>
          </ModalBtnCon>
        </ModalAlert>
      </ModalBg>
    </>
  );
};

export default QuitModal;
