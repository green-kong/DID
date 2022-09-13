import type { NextPage } from 'next';
import Image from 'next/image';
import Router from 'next/router';
import { useEffect, useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPassport,
  faIdCard,
  faFingerprint,
  faCakeCandles,
  faVenusMars,
} from '@fortawesome/free-solid-svg-icons';
import useScroll from '../hooks/useScroll';
import {
  MainFeatureImg,
  MainFeatureNav,
  MainFeatureNavList,
  MainFeatureWrap,
  MainInform,
  MainInformContent,
  MainInformTitle,
  MainTitle,
  MainVisual,
  MainVisualIcon,
  MainVisualIconWrap,
  MainVisualText,
  MainWrap,
} from '../styles/mainPage';
import { Global } from './_app';

const imgList = [
  '/regist_img.png',
  '/login_example.png',
  '/point_exchange.png',
];

const Home: NextPage = () => {
  const { isLogin } = useContext(Global);
  const { scrollY } = useScroll();
  const [percent, setPercent] = useState<number>(0);
  const [widthPercent, setWidthPercent] = useState<number>(0);
  const [featuerNum, setFeatureNum] = useState<number>(0);

  useEffect(() => {
    if (isLogin) {
      Router.push('/main');
    }
  }, []);

  useEffect(() => {
    if (scrollY === 0) {
      setWidthPercent(0);
    }
    if (scrollY > 450) {
      setPercent(0);
      const tmp = 1 - (scrollY - 450) / 200;
      const newWidthPercent = tmp > 0.5 ? tmp : 0.5;
      setWidthPercent(newWidthPercent);
      return;
    }
    const newPercent = scrollY / 450 - 1;
    setPercent(newPercent);
  }, [scrollY]);

  const navClickHandler = (num: number) => () => {
    setFeatureNum(num);
  };

  return (
    <MainWrap>
      <MainTitle>
        소중한 개인정보.
        <br />
        안전하게 관리하세요.
        <br />
      </MainTitle>
      <MainVisual widthPercent={widthPercent}>
        <Image alt="logo_image" src="/emptyLogo.png" layout="fill"></Image>
        <MainVisualIconWrap widthPercent={widthPercent}>
          <MainVisualText widthPercent={widthPercent}>DID</MainVisualText>
          <MainVisualIcon
            w={'66%'}
            percent={percent}
            widthPercent={widthPercent}
          >
            <FontAwesomeIcon icon={faPassport} className="icon passport" />
            <FontAwesomeIcon icon={faIdCard} className="icon idCard" />
          </MainVisualIcon>
          <MainVisualIcon
            w="100%"
            percent={percent}
            widthPercent={widthPercent}
          >
            <FontAwesomeIcon
              icon={faFingerprint}
              className="icon fingerPrint"
            />
            <FontAwesomeIcon icon={faCakeCandles} className="icon birth" />
            <FontAwesomeIcon icon={faVenusMars} className="icon gender" />
          </MainVisualIcon>
        </MainVisualIconWrap>
      </MainVisual>
      <MainInform>
        <MainInformTitle>
          가장 안전하게 개인정보를 보관하는 방법
        </MainInformTitle>
        <MainInformContent>
          Helpless DID 는 탈중앙화방식으로 개인정보를 저장하고 관리하는 본인인증
          서비스 입니다.
          <br />
          기존의 중앙화방식으로 관리되던 데이터들을 Ethereum 네트워크의
          Contract에 저장합니다.
          <br />
          기존의 데이터 저장 방식은 중앙서버와 연동된 DB에서 관리 되기 때문에,
          <br />
          데이터의 위,변조와 해킹의 위협으로 부터 안전하지 못합니다.
          <br />
          반면 Helpless DID는 탈중앙 방식으로 데이터를 저장하고,
          <br />
          강력한 암호화 시스템을 사용하여 데이터의 위.변조 및 해킹의
          위협으로부터 안전합니다.
        </MainInformContent>
      </MainInform>
      <MainFeatureWrap>
        <MainFeatureNav>
          <MainFeatureNavList
            onClick={navClickHandler(0)}
            clicked={featuerNum === 0}
          >
            <p>간편한 회원가입</p>
            <div>
              탈중앙화, 분산원장, 블록체인.
              <br />
              이런 어려운 개념들을 모르셔도 괜찮습니다.
              <br />
              간편하게 등록하고 사용하세요!
            </div>
          </MainFeatureNavList>
          <MainFeatureNavList
            onClick={navClickHandler(1)}
            clicked={featuerNum === 1}
          >
            <p>쉬운 본인인증</p>
            <div>
              새로운 서비스에 가입할 때 마다 이뤄졌던,
              <br />
              번거로운 본인인증
              <br />
              이젠 Helpless DID가 새로운 패러다임을 제시합니다.
            </div>
          </MainFeatureNavList>
          <MainFeatureNavList
            onClick={navClickHandler(2)}
            clicked={featuerNum === 2}
          >
            <p>편리한 포인트 연동</p>
            <div>
              &ldquo;언젠가는 쓰겠지?&rdquo; 하고 묵혀뒀던 포인트와 마일리지!
              <br />
              지금 바로 Helpless DID와 연동하고 사용하세요!
              <br />
              다른 사이트들의 포인트를
              <br />
              자사의 서비스를 통해 사용가능합니다.
            </div>
          </MainFeatureNavList>
        </MainFeatureNav>
        <MainFeatureImg>
          <Image
            src={imgList[featuerNum]}
            alt="예시"
            layout="fill"
            objectFit="contain"
          ></Image>
        </MainFeatureImg>
      </MainFeatureWrap>
    </MainWrap>
  );
};

export default Home;
