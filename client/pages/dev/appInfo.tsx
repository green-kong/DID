import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { ContentTitle, TitleIcon, Title } from '../../styles/title';
import {
  AddAppFrm,
  ImgInput,
  FileNameInput,
  FileSearchBtn,
  ImagePreviewCon,
  UploadInputCon,
} from '../../styles/addApp';
import { SignUpBtn } from '../../styles/registStyle';
import getAppInfo from '../../api/dev/appInfo';
import { IAppInfo } from '../../types/appInfo';
import useImgUpload from '../../hooks/useImgUpload';
import useForm from '../../hooks/useForm';
import delApp from '../../api/dev/delApp';
import DelAppModal from '../../components/delAppModal';

interface IAppDetailInfo {
  idx: number;
  name: string;
  appDesc: string | undefined | null;
  host: string;
  redirectURI: string;
  imgUrl: string | undefined | null;
  APIkey: string;
}

const AddApp = () => {
  const router = useRouter();
  const [appInfo, setAppInfo] = useState<IAppDetailInfo>();
  const [appDelModal, setAppDelModal] = useState<boolean>(false);
  const src = appInfo?.imgUrl;
  const { imgChangeHandler, fileName, imgSrc, imgFile } = useImgUpload();
  const { values, handleChange, handleSubmit, errors, reset } = useForm(
    {},
    imgFile,
    'updateApp',
  );

  const closeDelModal = () => {
    setAppDelModal(false);
  };

  const delAppFromModal = async () => {
    const { idx } = router.query;
    if (!idx) return;

    const result = await delApp(idx);
    if (!result) {
      alert('잠시후에 다시 시도해주세요');
    } else {
      alert('어플리케이션이 삭제 되었습니다.');
      router.push('/dev/appList');
    }
  };

  useEffect(() => {
    (async () => {
      const { idx } = router.query;
      if (typeof idx === 'string') {
        const data = await getAppInfo({ idx });
        setAppInfo(data);
      }
    })();
  }, []);

  useEffect(() => {
    if (!appInfo) return;
    const initial: IAppInfo = {
      idx: router.query.idx as string,
      name: appInfo.name,
      desc: appInfo.appDesc as string,
      host: appInfo.host,
      redirectURI: appInfo.redirectURI,
    };
    reset(initial);
  }, [appInfo]);

  if (!appInfo) return false;
  return (
    <>
      <div id="content_wrap">
        <ContentTitle>
          <TitleIcon imageUrl="/folder_icon.png"></TitleIcon>
          <Title>App information</Title>
        </ContentTitle>
        <AddAppFrm action="addApp" method="post" onSubmit={handleSubmit}>
          <ul>
            <li>
              <label htmlFor="app_name">이름</label>
              <input
                type="text"
                value={values.name || ''}
                onChange={handleChange}
                name="name"
              />
              {errors.name && <span>{errors.name}</span>}
            </li>
            <li>
              <label htmlFor="app_desc">설명</label>
              <textarea
                id="app_desc"
                name="desc"
                onChange={handleChange}
                value={values.desc || ''}
              ></textarea>
              {errors.desc && <span>{errors.desc}</span>}
            </li>
            <li>
              <label htmlFor="app_logo">로고</label>
              <UploadInputCon>
                <FileNameInput
                  type="text"
                  readOnly
                  value={
                    fileName ||
                    (appInfo.imgUrl as string)
                      .split('/')
                      .at(-1)
                      ?.split('-')
                      .filter((_, i) => i !== 0)
                      .join('')
                  }
                />
                <FileSearchBtn htmlFor="app_logo">파일 찾기</FileSearchBtn>
              </UploadInputCon>
              <ImgInput type="file" id="app_logo" onChange={imgChangeHandler} />
            </li>
            <li>
              <label>이미지 미리보기</label>
              <ImagePreviewCon>
                {appInfo.imgUrl && (
                  <Image
                    loader={() => src || ''}
                    src={imgSrc || src || ''}
                    width={100}
                    height={100}
                    alt="앱로고"
                    objectFit="contain"
                  ></Image>
                )}
              </ImagePreviewCon>
            </li>
            <li>
              <label htmlFor="host">사이트 주소</label>
              <input
                type="text"
                name="host"
                value={values.host || ''}
                onChange={handleChange}
              />
              {errors.host && <span>{errors.host}</span>}
            </li>
            <li>
              <label htmlFor="redirect_uri">redirect URI</label>
              <input
                type="text"
                name="redirectURI"
                value={values.redirectURI || ''}
                onChange={handleChange}
              />
              {errors.redirectURI && <span>{errors.redirectURI}</span>}
            </li>
            <li>
              <label htmlFor="redirect_uri">API key</label>
              <input type="text" value={appInfo.APIkey || ''} readOnly />
            </li>
          </ul>
          <SignUpBtn type="submit" mb="10px">
            수정
          </SignUpBtn>
          <SignUpBtn
            type="button"
            bgc="#D84D56"
            onClick={() => {
              setAppDelModal(true);
            }}
          >
            삭제
          </SignUpBtn>
        </AddAppFrm>
      </div>
      {appDelModal && (
        <DelAppModal
          closeDelModal={closeDelModal}
          appName={appInfo.name}
          delAppFromModal={delAppFromModal}
        />
      )}
    </>
  );
};

export default AddApp;
