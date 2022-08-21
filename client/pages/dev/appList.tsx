import Link from 'next/link';
import { useEffect, useState } from 'react';

import { ContentTitle, TitleIcon, Title } from '../../styles/title';
import { ConnectionsWrap } from '../../styles/connections';

import AddAppBtn from '../../styles/appList';
import getAppList from '../../api/dev/appList';
import { IAppListData } from '../../types/appList';
import AppListsComponent from '../../components/appLists';

const AppList = () => {
  const [appListData, setAppListData] = useState<IAppListData[]>([]);

  useEffect(() => {
    // TODO(승짱) 로그인 기능 구현 완료되면 로그인 여부랑 유저정보 전역상태로 집어넣어야 될듯 함
    // 일단은 그냥 구현함

    (async () => {
      const appList = await getAppList(1);
      // const appList: IAppListData[] = [
      //   { _id: 1, name: 'asdf', desc: 'adfaf', imgUrl: 'aasdf' },
      //   { _id: 2, name: 'aasdfsdf', desc: 'adfafasdfads', imgUrl: 'aasdf' },
      // ];
      setAppListData(appList);
    })();
  }, []);

  return (
    <>
      <ContentTitle>
        <TitleIcon imageUrl="/shelid_icon.png"></TitleIcon>
        <Title>Applications</Title>
      </ContentTitle>

      <ConnectionsWrap>
        <AppListsComponent appListData={appListData} />
        <Link href="/dev/addApp">
          <AddAppBtn>
            <div className="plus_icon">+</div>
            <div className="plus_text">앱 연결하기</div>
          </AddAppBtn>
        </Link>
      </ConnectionsWrap>
    </>
  );
};

export default AppList;
