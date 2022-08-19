import { IAppInfo } from '../types/appInfo';

const validation = ({ name, desc, host, redirectURI }: IAppInfo): IAppInfo => {
  const errors: IAppInfo = {};

  if (!name) {
    errors.name = '앱 이름을 입력해주세요.';
  } else if (name.length > 10) {
    errors.name = '앱 이름은 최대 10글자 까지 가능합니다.';
  }

  if (desc && desc.length > 100) {
    errors.desc = '앱 설명은 최대 100글자 까지 가능합니다.';
  }

  if (!host) {
    errors.host = '사이트 주소를 입력해주세요.';
  }

  if (!redirectURI) {
    errors.redirectURI = 'redirect uri 를 입력해주세요.';
  }
  return errors;
};

export default validation;
