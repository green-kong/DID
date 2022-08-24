import axios from 'axios';

interface getAppInfoPayload {
  idx: string;
}

const getAppInfo = async (payload: getAppInfoPayload) => {
  const url = 'http://localhost:4000/dev/appInfo';
  const response = await axios.post(url, payload);
  return response.data;
};

export default getAppInfo;
