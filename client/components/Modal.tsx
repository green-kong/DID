import { Dispatch, SetStateAction } from 'react';
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
  modal?: {
    cancel: () => void;
    submit: () => void;
    setUserPw?:
      | Dispatch<SetStateAction<boolean>>
      | Dispatch<SetStateAction<string>>;
  };
  msg?: string;
  link?: string;
}

const Modal = (props: IQuitModal) => {
  const inputChange = (e: any) => {
    const setUserPw = props.modal?.setUserPw as Dispatch<
      SetStateAction<boolean>
    >;
    setUserPw(e.target.value);
  };

  return (
    <>
      <ModalBg>
        <ModalAlert>
          <ModalContent>
            <ModalIcon></ModalIcon>
            <ModalDesc>{props.msg}</ModalDesc>
            <ModalInput
              onChange={inputChange}
              className="pwInput"
              type="password"
            />
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
