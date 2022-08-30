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

const asdf = (k: any) => {
  console.log('인덱스번호로 이동하기~', k);
};

const Connections = () => {
  const { isLogin, userData } = useContext(Global);
  const [connectionsInfo, setConnectionsInfo] = useState<IAppListData[]>([]);
  const viewConnections = () => {
    return connectionsInfo.map((v, k) => {
      return (
        <ConnectedDiv
          onClick={() => {
            asdf(k);
          }}
          key={k}
        >
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
