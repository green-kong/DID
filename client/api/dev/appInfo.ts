import Https from '../index';

interface getAppInfoPayload {
  idx: string;
}

const getAppInfo = async (payload: getAppInfoPayload) => {
  const url = '/dev/appInfo';
  const response = await Https.post(url, payload);
  return response.data;
};

export default getAppInfo;
