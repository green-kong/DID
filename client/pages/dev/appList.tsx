import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import Router from 'next/router';

import { ContentTitle, TitleIcon, Title } from '../../styles/title';
import { ConnectionsWrap } from '../../styles/connections';

import AddAppBtn from '../../styles/appList';
import getAppList from '../../api/dev/appList';
import { IAppListData } from '../../types/appList';
import AppListsComponent from '../../components/appLists';
import { Global } from '../_app';

const AppList = () => {
  const [appListData, setAppListData] = useState<IAppListData[]>([]);
  const { userData } = useContext(Global);

  useEffect(() => {
    (async () => {
      console.log(userData);
      if (!userData) {
        alert('로그인 후 사용 가능 합니다.');
        Router.push('/user/login');
        return;
      }
      const { idx } = userData;
      if (!idx) return;
      const appList = await getAppList(idx);
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
