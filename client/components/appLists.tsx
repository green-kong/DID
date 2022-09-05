import Image from 'next/image';
import Router from 'next/router';
import React, { useEffect, useState } from 'react';
import delApp from '../api/dev/delApp';
import {
  ConnectedDiv,
  ConnectionImg,
  ConnectionInfo,
} from '../styles/connections';
import { IAppListData } from '../types/appList';
import DelAppModal from './delAppModal';

interface AppListsComponentProps {
  appListData: IAppListData[];
}

const AppListsComponent = ({ appListData }: AppListsComponentProps) => {
  const [appLists, setAppLists] = useState<IAppListData[]>([]);
  const [clickedApp, setClickedApp] = useState<IAppListData>();
  const [delModal, setDelModal] = useState<boolean>(false);

  useEffect(() => {
    setAppLists(appListData);
  }, [appListData]);

  const moveToInfo = (idx: number) => (e: React.MouseEvent<HTMLDivElement>) => {
    const isDelBtn = (e.target as Element).classList.contains('disconnect_btn');
    if (isDelBtn) {
      const clickedApp = appListData.filter((v) => v.idx === idx);
      setClickedApp(clickedApp[0]);
      setDelModal(true);
      return;
    }
    Router.push(
      {
        pathname: '/dev/appInfo',
        query: { idx },
      },
      '/dev/appInfo',
    );
  };

  const closeDelModal = () => {
    setDelModal(false);
  };

  const delAppFromModal = async () => {
    if (!clickedApp) return;

    const { idx } = clickedApp;

    const result = await delApp(idx.toString());

    if (!result) {
      alert('잠시후에 다시 시도해주세요.');
    } else {
      alert('어플리케이션이 삭제 되었습니다.');
      setDelModal(false);
      const newAppLists = appLists.filter((v) => v.idx !== idx);
      setAppLists(newAppLists);
    }
  };

  return (
    <>
      {appLists.map((v) => {
        return (
          <ConnectedDiv
            onClick={moveToInfo(v.idx)}
            style={{ cursor: 'pointer' }}
            key={v.idx}
          >
            <ConnectionImg>
              <Image
                loader={() => {
                  return v.imgUrl || '/no_img.png';
                }}
                src={v.imgUrl || '/no_img.png'}
                alt="어플로고"
                width={100}
                height={100}
                objectFit="contain"
              ></Image>
            </ConnectionImg>
            <ConnectionInfo>
              <p className="connection_name">{v.name}</p>
              <p className="connection_desc">{v.appDesc}</p>
              <button className="disconnect_btn">삭제</button>
            </ConnectionInfo>
          </ConnectedDiv>
        );
      })}
      {delModal && clickedApp && (
        <DelAppModal
          closeDelModal={closeDelModal}
          appName={clickedApp.name}
          delAppFromModal={delAppFromModal}
        />
      )}
    </>
  );
};

export default AppListsComponent;
