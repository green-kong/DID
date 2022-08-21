import axios from 'axios';

const getAppList = async (userIdx: number) => {
  const url = 'http://localhost:4000/dev/appList';
  const body = { _id: userIdx };
  const response = await axios.post(url, body);

  return response.data;
};

export default getAppList;
