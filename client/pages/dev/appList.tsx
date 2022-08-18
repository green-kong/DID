import Image from 'next/image';

import { ContentTitle, TitleIcon, Title } from '../../styles/title';
import {
  ConnectionsWrap,
  ConnectedDiv,
  ConnectionImg,
  ConnectionInfo,
} from '../../styles/connections';

import AddAppBtn from '../../styles/appList';

const appList = () => {
  return (
    <>
      <ContentTitle>
        <TitleIcon imageUrl="/shelid_icon.png"></TitleIcon>
        <Title>Applications</Title>
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

        <AddAppBtn>
          <div className="plus_icon">+</div>
          <div className="plus_text">앱 연결하기</div>
        </AddAppBtn>
      </ConnectionsWrap>
    </>
  );
};

export default appList;
