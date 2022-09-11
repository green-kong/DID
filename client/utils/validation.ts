import { IAppInfo } from '../types/appInfo';

interface IValidationProps {
  values: IAppInfo;
  usePoint: boolean;
}

const validation = ({
  values: { name, desc, host, redirectURI, pointRouter, pointUseRouter },
  usePoint,
}: IValidationProps): IAppInfo => {
  const errors: IAppInfo = {};

  const startREGEX = /^https?:\/\//;

  const endREGEX = /\/$/;

  if (!name) {
    errors.name = '앱 이름을 입력해주세요.';
  } else if (name.length > 20) {
    errors.name = '앱 이름은 최대 20글자 까지 가능합니다.';
  }

  if (desc && desc.length > 200) {
    errors.desc = '앱 설명은 최대 200글자 까지 가능합니다.';
  }

  if (!host) {
    errors.host = '사이트 주소를 입력해주세요.';
  } else if (!startREGEX.test(host)) {
    errors.host = '사이트 주소는 http:// 또는 https://로 작성해 주세요.';
  } else if (!endREGEX.test(host)) {
    errors.host = '사이트 주소는 / 로 끝나야 합니다.';
  }
  if (!redirectURI) {
    errors.redirectURI = 'redirect uri 를 입력해주세요.';
  } else if (!startREGEX.test(redirectURI)) {
    errors.redirectURI =
      '리다이렉트 주소는 http:// 또는 https://로 작성해 주세요.';
  }

  if (usePoint) {
    console.log(pointRouter);
    if (!pointRouter) {
      errors.pointRouter = '포인트 조회에 사용될 라우터 주소를 입력해주세요.';
    } else if (!startREGEX.test(pointRouter)) {
      errors.pointRouter =
        '라우터 주소는 http:// 또는 https://로 작성해 주세요.';
    }

    if (!pointUseRouter) {
      errors.pointUseRouter =
        '포인트 조회에 사용될 라우터 주소를 입력해주세요.';
    } else if (!startREGEX.test(pointUseRouter)) {
      errors.pointUseRouter =
        '라우터 주소는 http:// 또는 https://로 작성해 주세요.';
    }
  }

  return errors;
};

export default validation;
