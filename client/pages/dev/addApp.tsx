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

const AddApp = () => {
  const initialValues: IAppInfo = {};

  const { imgChangeHandler, fileName, imgSrc, imgFile } = useImgUpload();
  const { values, handleChange, handleSubmit, errors } = useForm(
    initialValues,
    imgFile,
  );

  return (
    <div id="content_wrap">
      <ContentTitle>
        <TitleIcon imageUrl="/folder_icon.png"></TitleIcon>
        <Title>Add application</Title>
      </ContentTitle>
      <AddAppFrm action="addApp" method="post" onSubmit={handleSubmit}>
        <ul>
          <li>
            <label htmlFor="app_name">이름</label>
            <input type="text" name="name" onChange={handleChange} />
            {errors.name && <span>{errors.name}</span>}
          </li>
          <li>
            <label htmlFor="app_desc">설명</label>
            <textarea
              id="app_desc"
              name="desc"
              onChange={handleChange}
            ></textarea>
            {errors.desc && <span>{errors.desc}</span>}
          </li>
          <li>
            <label htmlFor="app_logo">로고</label>
            <UploadInputCon>
              <FileNameInput type="text" readOnly value={fileName} />
              <FileSearchBtn htmlFor="app_logo">파일 찾기</FileSearchBtn>
            </UploadInputCon>
            <ImgInput type="file" id="app_logo" onChange={imgChangeHandler} />
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
            <input type="text" name="host" onChange={handleChange} />
            {errors.host && <span>{errors.host}</span>}
          </li>
          <li>
            <label htmlFor="redirect_uri">redirect URI</label>
            <input type="text" name="redirectURI" onChange={handleChange} />
            {errors.redirectURI && <span>{errors.redirectURI}</span>}
          </li>
        </ul>
        <SignUpBtn type="submit">등록</SignUpBtn>
      </AddAppFrm>
    </div>
  );
};

export default AddApp;
