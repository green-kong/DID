import axios from 'axios';
import FormData from 'form-data';

const updateApp = async (formData: FormData) => {
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
    },
    withCredentials: true,
  };

  const response = await axios.post(
    'http://localhost:4000/dev/updateApp',
    formData,
    config,
  );
  if (response.status !== 200) {
    return false;
  } else {
    return response.data;
  }
};

export default updateApp;
