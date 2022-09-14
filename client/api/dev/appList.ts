import Https from '../index';

const getAppList = async (userIdx: string) => {
  const url = '/dev/appList';
  const body = { _id: userIdx };
  const response = await Https.post(url, body);

  return response.data;
};

export default getAppList;
