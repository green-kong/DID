import axios from 'axios';

export default axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'https://3.38.58.1:4000'
      : 'http://localhost:4000',
});
