import FormData from 'form-data';
import Https from '../index';

const updateApp = async (formData: FormData) => {
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
    },
    withCredentials: true,
  };

  const response = await Https.post('/dev/updateApp', formData, config);
  if (response.status !== 200) {
    return false;
  } else {
    return response.data;
  }
};

export default updateApp;
