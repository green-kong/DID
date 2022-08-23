import axios from 'axios';

const delApp = async (idx: string | string[]) => {
  try {
    const url = 'http://localhost:4000/dev/delApp';
    const response = await axios.post(url, { idx });
    return response.data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export default delApp;
