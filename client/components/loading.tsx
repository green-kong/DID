import LoadingIcon from '../styles/loading';
import { ModalBg, ModalAlert, ModalDesc, ModalContent } from '../styles/Modal';

const LoadingModal = () => {
  return (
    <ModalBg>
      <ModalAlert>
        <ModalContent>
          <LoadingIcon />
          <ModalDesc>로딩중</ModalDesc>
        </ModalContent>
      </ModalAlert>
    </ModalBg>
  );
};

export default LoadingModal;
