import { ChangeEvent, useState } from 'react';
import {
  ModalBg,
  ModalAlert,
  ModalIcon,
  ModalDesc,
  ModalBtnCon,
  ModalBtn,
  ModalInput,
} from '../styles/quitModal';
import LoadingModal from './loading';

interface IDelAppModal {
  closeDelModal: () => void;
  appName: string | undefined;
  delAppFromModal: () => void;
}

const DelAppModal = (props: IDelAppModal) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [appName, setAppName] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAppName(e.target.value);
  };

  const handleDelBtn = () => {
    setIsLoading(true);
    if (appName === props.appName) {
      props.delAppFromModal();
    } else {
      setError('앱 이름이 일치하지 않습니다.');
    }
    setIsLoading(false);
  };

  return (
    <>
      <ModalBg>
        <ModalAlert>
          <div>
            <ModalIcon></ModalIcon>
            <ModalDesc>삭제하시겠습니까?</ModalDesc>
            <ModalInput
              placeholder="앱 이름을 입력해주세요."
              onChange={handleChange}
            />
            <span style={{ color: 'red' }}>{error || ''}</span>
          </div>
          <ModalBtnCon>
            <ModalBtn onClick={props.closeDelModal}>취소</ModalBtn>
            <ModalBtn
              border="none"
              bgc="#f44954"
              color="white"
              onClick={handleDelBtn}
            >
              탈퇴
            </ModalBtn>
          </ModalBtnCon>
        </ModalAlert>
      </ModalBg>
      {isLoading && <LoadingModal />}
    </>
  );
};

export default DelAppModal;
