import Image from 'next/image';
import { useState } from 'react';
import { ContentTitle, TitleIcon, Title } from '../../styles/title';
import {
  AddAppFrm,
  FileSearchBtn,
  FileNameInput,
  ImagePreviewCon,
  ImgInput,
  UploadInputCon,
} from '../../styles/addApp';
import { SignUpBtn } from '../../styles/registStyle';
import { IAppInfo } from '../../types/appInfo';
import useForm from '../../hooks/useForm';
import useImgUpload from '../../hooks/useImgUpload';
import LoadingModal from '../../components/loading';

const AddApp = () => {
  const initialValues: IAppInfo = {};

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const LoadingModalControll = () => {
    setIsLoading(!isLoading);
  };

  const [usePoint, setUsePoint] = useState<boolean>(false);
  const { imgChangeHandler, fileName, imgSrc, imgFile } = useImgUpload();
  const { handleChange, handleSubmit, errors } = useForm(
    initialValues,
    imgFile,
    LoadingModalControll,
    usePoint,
  );

  return (
    <>
      <div id="content_wrap">
        <ContentTitle>
          <TitleIcon imageUrl="/folder_icon.png"></TitleIcon>
          <Title>Add application</Title>
        </ContentTitle>
        <AddAppFrm action="addApp" method="post" onSubmit={handleSubmit}>
          <ul>
            <li>
              <label htmlFor="app_name">이름</label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
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
                  value={fileName || 'jpg, jpeg, png 만 업로드 가능합니다.'}
                />
                <FileSearchBtn htmlFor="app_logo">파일 찾기</FileSearchBtn>
              </UploadInputCon>
              <ImgInput
                type="file"
                accept=".jpg, .jpeg, .png"
                id="app_logo"
                onChange={imgChangeHandler}
              />
            </li>
            <li>
              <label>이미지 미리보기</label>
              <ImagePreviewCon>
                {imgSrc && (
                  <Image
                    src={imgSrc}
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
                onChange={handleChange}
                placeholder="https://example.com/redirect"
              />
              {errors.redirectURI && <span>{errors.redirectURI}</span>}
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
                    onChange={handleChange}
                  />
                  {errors.pointUseRouter && (
                    <span>{errors.pointUseRouter}</span>
                  )}
                </li>
              </>
            )}
          </ul>
          <SignUpBtn type="submit">등록</SignUpBtn>
        </AddAppFrm>
      </div>
      {isLoading && <LoadingModal />}
    </>
  );
};

export default AddApp;
