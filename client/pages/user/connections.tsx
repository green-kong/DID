import Image from 'next/image';

import { ContentTitle, TitleIcon, Title } from '../../styles/title';
import {
  ConnectionsWrap,
  ConnectedDiv,
  ConnectionImg,
  ConnectionInfo,
} from '../../styles/connections';

const Connections = () => {
  return (
    <>
      <ContentTitle>
        <TitleIcon imageUrl="/key_icon.png" />
        <Title>Connections</Title>
      </ContentTitle>

      <ConnectionsWrap>
        <ConnectedDiv>
          <ConnectionImg>
            <Image
              src="/carrot_market.png"
              alt="어플로고"
              width={100}
              height={100}
              objectFit="contain"
            ></Image>
          </ConnectionImg>
          <ConnectionInfo>
            <p className="connection_name">당근마켓</p>
            <p className="connection_desc">
              수수료 없는, 개인간의 중고 직거래 어플
            </p>
            <button className="disconnect_btn">연결끊기</button>
          </ConnectionInfo>
        </ConnectedDiv>
        <ConnectedDiv>
          <ConnectionImg>
            <Image
              src="/carrot_market.png"
              alt="어플로고"
              width={100}
              height={100}
              objectFit="contain"
            ></Image>
          </ConnectionImg>
          <ConnectionInfo>
            <p className="connection_name">당근마켓</p>
            <p className="connection_desc">
              수수료 없는, 개인간의 중고 직거래 어플
            </p>
            <button className="disconnect_btn">연결끊기</button>
          </ConnectionInfo>
        </ConnectedDiv>
        <ConnectedDiv>
          <ConnectionImg>
            <Image
              src="/carrot_market.png"
              alt="어플로고"
              width={100}
              height={100}
              objectFit="contain"
            ></Image>
          </ConnectionImg>
          <ConnectionInfo>
            <p className="connection_name">당근마켓</p>
            <p className="connection_desc">
              수수료 없는, 개인간의 중고 직거래 어플
            </p>
            <button className="disconnect_btn">연결끊기</button>
          </ConnectionInfo>
        </ConnectedDiv>
        <ConnectedDiv>
          <ConnectionImg>
            <Image
              src="/carrot_market.png"
              alt="어플로고"
              width={100}
              height={100}
              objectFit="contain"
            ></Image>
          </ConnectionImg>
          <ConnectionInfo>
            <p className="connection_name">당근마켓</p>
            <p className="connection_desc">
              수수료 없는, 개인간의 중고 직거래 어플
            </p>
            <button className="disconnect_btn">연결끊기</button>
          </ConnectionInfo>
        </ConnectedDiv>
        <ConnectedDiv>
          <ConnectionImg>
            <Image
              src="/carrot_market.png"
              alt="어플로고"
              width={100}
              height={100}
              objectFit="contain"
            ></Image>
          </ConnectionImg>
          <ConnectionInfo>
            <p className="connection_name">당근마켓</p>
            <p className="connection_desc">
              수수료 없는, 개인간의 중고 직거래 어플
            </p>
            <button className="disconnect_btn">연결끊기</button>
          </ConnectionInfo>
        </ConnectedDiv>
      </ConnectionsWrap>
    </>
  );
};
export default Connections;
