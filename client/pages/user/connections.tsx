import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import Router from 'next/router';
import axios from 'axios';
import { Global } from '../_app';
import { ContentTitle, TitleIcon, Title } from '../../styles/title';
import {
  ConnectionsWrap,
  ConnectedDiv,
  ConnectionImg,
  ConnectionInfo,
} from '../../styles/connections';

import { IAppListData } from '../../types/appList';

const Connections = () => {
  const { isLogin, userData } = useContext(Global);
  const [connectionsInfo, setConnectionsInfo] = useState<IAppListData[]>([]);

  const controlApp = (v: IAppListData, k: number) => async (e: any) => {
    try {
      if (e.target.classList[0] === 'disconnect_btn') {
        const disconnectResponse = await axios.post(
          'http://localhost:4000/user/disconnected',
          {
            userData,
            k,
            v,
          },
        );
        if (disconnectResponse.data.delete) {
          const connectedResponse = await axios.post(
            'http://localhost:4000/user/connectionsInfo',
            userData,
          );
          if (connectedResponse.data.check) {
            setConnectionsInfo(connectedResponse.data.connectionInfo);
          } else {
            console.log('connectionsInfo 못가져옴');
          }
        } else {
          alert('삭제 안됨');
        }
        return;
      }
    } catch (e) {
      console.log(e);
      console.log('failed disconnect app');
    }

    window.open(`http://${v.host}`);
  };

  const viewConnections = () => {
    return connectionsInfo.map((v, k) => {
      return (
        <ConnectedDiv onClick={controlApp(v, k)} key={k}>
          <ConnectionImg>
            <Image
              loader={() => {
                return v.imgUrl
                  ? `http://localhost:4000/${v.imgUrl}`
                  : '/no_img.png';
              }}
              src={
                v.imgUrl ? `http://localhost:4000/${v.imgUrl}` : '/no_img.png'
              }
              alt="어플로고"
              width={100}
              height={100}
              objectFit="contain"
            ></Image>
          </ConnectionImg>
          <ConnectionInfo>
            <p className="connection_name">{v.name}</p>
            <p className="connection_desc">
              {v.appDesc !== 'undefined'
                ? v.appDesc
                : 'no description about this app'}
            </p>
            <button className="disconnect_btn">연결끊기</button>
          </ConnectionInfo>
        </ConnectedDiv>
      );
    });
  };

  useEffect(() => {
    if (isLogin === false) {
      alert('로그인하고 이용하세요.');
      Router.push('/user/login');
    } else {
      (async () => {
        const response = await axios.post(
          'http://localhost:4000/user/connectionsInfo',
          userData,
        );
        setConnectionsInfo(response.data.connectionInfo);
      })();
      Router.push('/user/connections');
    }
  }, [isLogin]);

  return (
    <>
      <ContentTitle>
        <TitleIcon imageUrl="/key_icon.png" />
        <Title>Connections</Title>
      </ContentTitle>

      <ConnectionsWrap>{viewConnections()}</ConnectionsWrap>
    </>
  );
};
export default Connections;
