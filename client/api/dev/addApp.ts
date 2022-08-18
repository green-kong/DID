import axios from 'axios';
import FormData from 'form-data';

const addAppRequest = async (formData: FormData) => {
  const response = await axios.post(
    'http://localhost:4000/dev/addApp',
    formData,
  );
  console.log(response);
};

export default addAppRequest;
