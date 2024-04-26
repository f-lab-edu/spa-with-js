import { ApiConfig } from 'types/apiTypes';

const apiConfig: ApiConfig = {
  baseURL: 'https://jsonplaceholder.typicode.com', // 샘플 todo 오픈 api
  headers: {
    'Content-Type': 'application/json',
  },
};

export default apiConfig;
