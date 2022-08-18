import { useState } from 'react';

interface IUseImgUploadReturn {
  imgChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fileName: string;
  imgSrc: string;
  imgFile: File | undefined;
}

const useImgUpload = (): IUseImgUploadReturn => {
  const [fileName, setFileName] = useState<string>('');
  const [imgSrc, setImgSrc] = useState<string>('');
  const [imgFile, setImgFile] = useState<File>();

  const imgChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    const reader = new FileReader();

    reader.onload = () => {
      const base64 = reader.result;
      if (base64) {
        setImgSrc(base64.toString());
      }
    };
    if (files) {
      reader.readAsDataURL(files[0]);
      setImgFile(files[0]);
      setFileName(files[0].name);
    }
  };

  return { imgChangeHandler, fileName, imgSrc, imgFile };
};

export default useImgUpload;
