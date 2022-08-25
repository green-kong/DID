import axios from 'axios';

const getAppList = async (userIdx: string) => {
  const url = 'http://localhost:4000/dev/appList';
  const body = { _id: userIdx };
  const response = await axios.post(url, body);

  return response.data;
};

export default getAppList;
