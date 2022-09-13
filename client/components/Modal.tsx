import { Dispatch, SetStateAction, ChangeEvent } from 'react';
import {
  ModalBg,
  ModalAlert,
  ModalIcon,
  ModalDesc,
  ModalBtnCon,
  ModalBtn,
  ModalInput,
  ModalContent,
  ModalDiv,
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
  pwWrongMessage?: string;
}

const Modal = (props: IQuitModal) => {
  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const setUserPw = props.modal?.setUserPw as Dispatch<
      SetStateAction<string>
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
            <ModalDiv>{props.pwWrongMessage}</ModalDiv>
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
