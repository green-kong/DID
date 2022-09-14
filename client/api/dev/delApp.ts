import Https from '../index';

const delApp = async (idx: string | string[]) => {
  try {
    const url = '/dev/delApp';
    const response = await Https.post(url, { idx });
    return response.data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export default delApp;
