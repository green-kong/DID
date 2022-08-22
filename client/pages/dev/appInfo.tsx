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

interface IAppDetailInfo {
  idx: number;
  name: string;
  desc: string | undefined | null;
  host: string;
  redirectUri: string;
  imgUrl: string | undefined | null;
}

const AddApp = () => {
  const [appInfo, setAppInfo] = useState<IAppDetailInfo>();
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const { idx } = router.query;
      if (typeof idx === 'string') {
        const data = await getAppInfo({ idx });
        setAppInfo(data);
      }
    })();
  }, []);

  if (!appInfo) return false;
  return (
    <div id="content_wrap">
      <ContentTitle>
        <TitleIcon imageUrl="/folder_icon.png"></TitleIcon>
        <Title>Add application</Title>
      </ContentTitle>
      <AddAppFrm action="addApp" method="post">
        <ul>
          <li>
            <label htmlFor="app_name">이름</label>
            <input type="text" value={appInfo.name} />
          </li>
          <li>
            <label htmlFor="app_desc">설명</label>
            <textarea id="app_desc">{appInfo.desc}</textarea>
          </li>
          <li>
            <label htmlFor="app_logo">로고</label>
            <UploadInputCon>
              <FileNameInput type="text" />
              <FileSearchBtn htmlFor="app_logo">파일 찾기</FileSearchBtn>
            </UploadInputCon>
            <ImgInput type="file" id="app_logo" />
          </li>
          <li>
            <label>이미지 미리보기</label>
            <ImagePreviewCon>
              {appInfo.imgUrl && (
                <Image
                  src={appInfo.imgUrl}
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

export default AddApp;
