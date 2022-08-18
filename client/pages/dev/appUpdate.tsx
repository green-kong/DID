import { ContentTitle, TitleIcon, Title } from '../../styles/title';
import {
  AddAppFrm,
  AppLogo,
  FileName,
  FileSearchBtn,
  ImagePreviewCon,
  UploadInputCon,
} from '../../styles/addApp';
import { SignUpBtn } from '../../styles/registStyle';

const UpdateAppInfo = () => {
  return (
    <div id="content_wrap">
      <ContentTitle>
        <TitleIcon imageUrl="/filled_folder_icon.png"></TitleIcon>
        <Title>Update app</Title>
      </ContentTitle>
      <AddAppFrm action="addApp" method="post">
        <ul>
          <li>
            <label htmlFor="app_name">이름</label>
            <input type="text" />
          </li>
          <li>
            <label htmlFor="app_desc">설명</label>
            <textarea id="app_desc"></textarea>
          </li>
          <li>
            <label htmlFor="app_logo">로고</label>
            <UploadInputCon>
              <FileName type="text" />
              <FileSearchBtn htmlFor="app_logo">파일 찾기</FileSearchBtn>
            </UploadInputCon>
            <AppLogo type="file" id="app_logo" />
          </li>
          <li>
            <label>이미지 미리보기</label>
            <ImagePreviewCon></ImagePreviewCon>
          </li>
          <li>
            <label htmlFor="host">사이트 주소</label>
            <input type="text" id="host" />
          </li>
          <li>
            <label htmlFor="redirect_uri">redirect URI</label>
            <input type="email" id="redirect_uri" />
          </li>
        </ul>
        <SignUpBtn type="submit">등록</SignUpBtn>
      </AddAppFrm>
    </div>
  );
};

export default UpdateAppInfo;
