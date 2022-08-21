import Image from 'next/image';
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
  return (
    <>
      {appListData.map((v) => {
        return (
          <ConnectedDiv key={v.idx}>
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
