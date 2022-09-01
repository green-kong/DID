import { IAppInfo } from '../types/appInfo';

const validation = ({ name, desc, host, redirectURI }: IAppInfo): IAppInfo => {
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
  }

  return errors;
};

export default validation;
