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
import LoadingModal from '../../components/loading';

interface IAppDetailInfo {
  idx: number;
  name: string;
  appDesc: string | undefined | null;
  host: string;
  redirectURI: string;
  imgUrl: string | undefined | null;
  APIkey: string;
  usePoint: boolean;
  pointRouter: string | null;
  pointUseRouter: string | null;
}

const AddApp = () => {
  const router = useRouter();
  const [appInfo, setAppInfo] = useState<IAppDetailInfo>();
  const [usePoint, setUsePoint] = useState<boolean>(false);
  const [appDelModal, setAppDelModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const loadingModalControll = () => {
    setIsLoading(!isLoading);
  };
  const src = appInfo?.imgUrl;
  const { imgChangeHandler, fileName, imgSrc, imgFile } = useImgUpload();
  const { values, handleChange, handleSubmit, errors, reset } = useForm(
    {},
    imgFile,
    loadingModalControll,
    usePoint,
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
        setUsePoint(!!data.usePoint);
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
      pointRouter: appInfo.pointRouter as string,
      pointUseRouter: appInfo.pointUseRouter as string,
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
                placeholder="최대 20글자까지 입력가능합니다."
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
                placeholder="최대 200글자 까지 입력가능합니다."
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
                    appInfo.imgUrl
                      ?.split('/')
                      .at(-1)
                      ?.split('-')
                      .filter((_, i) => i !== 0)
                      .join('') ||
                    ''
                  }
                />
                <FileSearchBtn htmlFor="app_logo">파일 찾기</FileSearchBtn>
              </UploadInputCon>
              <ImgInput
                type="file"
                id="app_logo"
                accept=".jpg, .jpeg, .png"
                onChange={imgChangeHandler}
              />
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
                placeholder="http or https://example.com/"
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
                placeholder="https://example.com/redirect"
              />
              {errors.redirectURI && <span>{errors.redirectURI}</span>}
            </li>
            <li>
              <label htmlFor="redirect_uri">API key</label>
              <input type="text" value={appInfo.APIkey || ''} readOnly />
            </li>
            <li>
              <label htmlFor="">포인트 사용 여부</label>
              <div className="radioWrap">
                <div className="checkboxWrap">
                  <label htmlFor="true">사용</label>
                  <input
                    type="radio"
                    id="true"
                    name="pointCheck"
                    onChange={() => {
                      setUsePoint(true);
                    }}
                    checked={usePoint === true}
                  />
                </div>
                <div className="checkboxWrap">
                  <label htmlFor="false">미사용</label>
                  <input
                    type="radio"
                    id="false"
                    name="pointCheck"
                    onChange={() => {
                      setUsePoint(false);
                    }}
                    checked={usePoint === false}
                  />
                </div>
              </div>
            </li>
            {usePoint && (
              <>
                <li>
                  <label htmlFor="pointRouter">포인트 조회 라우터</label>
                  <input
                    type="text"
                    id="pointRouter"
                    name="pointRouter"
                    placeholder="http://example.com/point"
                    value={values.pointRouter}
                    onChange={handleChange}
                  />
                  {errors.pointRouter && <span>{errors.pointRouter}</span>}
                </li>
                <li>
                  <label htmlFor="pointUseRouter">포인트 사용 라우터</label>
                  <input
                    type="text"
                    id="pointUseRouter"
                    name="pointUseRouter"
                    placeholder="http://example.com/pointUse"
                    value={values.pointUseRouter}
                    onChange={handleChange}
                  />
                  {errors.pointUseRouter && (
                    <span>{errors.pointUseRouter}</span>
                  )}
                </li>
              </>
            )}
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
      {isLoading && <LoadingModal />}
    </>
  );
};

export default AddApp;
