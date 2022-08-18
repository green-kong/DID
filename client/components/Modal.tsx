import {
  ModalBg,
  ModalAlert,
  ModalIcon,
  ModalDesc,
  ModalBtnCon,
  ModalBtn,
  ModalInput,
  ModalContent,
} from '../styles/Modal';

interface IQuitModal {
  // closeModal?: () => void;
  modal?: { cancel: () => void; submit: () => void };
  msg?: string;
  link?: string;
}

const Modal = (props: IQuitModal) => {
  return (
    <>
      <ModalBg>
        <ModalAlert>
          <ModalContent>
            <ModalIcon></ModalIcon>
            <ModalDesc>{props.msg}</ModalDesc>
            <ModalInput className="pwInput" type="password" />
          </ModalContent>
          <ModalBtnCon>
            <ModalBtn onClick={props.modal?.cancel}>취소</ModalBtn>
            <ModalBtn
              onClick={props.modal?.submit}
              border="none"
              bgc="#f44954"
              color="white"
            >
              확인
            </ModalBtn>
          </ModalBtnCon>
        </ModalAlert>
      </ModalBg>
    </>
  );
};

export default Modal;
