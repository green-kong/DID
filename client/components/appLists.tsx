import Image from 'next/image';
import Router from 'next/router';
import React from 'react';
import {
  ConnectedDiv,
  ConnectionImg,
  ConnectionInfo,
} from '../styles/connections';
import { IAppListData } from '../types/appList';

interface AppListsComponentProps {
  appListData: IAppListData[];
}

const AppListsComponent = ({ appListData }: AppListsComponentProps) => {
  const test = (idx: number) => (e: React.MouseEvent<HTMLDivElement>) => {
    const isDelBtn = (e.target as Element).classList.contains('disconnect_btn');
    if (isDelBtn) return;
    Router.push(
      {
        pathname: '/dev/appInfo',
        query: { idx },
      },
      '/dev/appInfo',
    );
  };

  return (
    <>
      {appListData.map((v) => {
        return (
          <ConnectedDiv
            onClick={test(v.idx)}
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
    </>
  );
};

export default AppListsComponent;
