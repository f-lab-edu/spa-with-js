import axios from 'axios';
import apiConfig from './config';
import { ErrorResponse } from 'types/api';

const api = axios.create(apiConfig);

// 응답 인터셉터로 에러 처리
api.interceptors.response.use(
  (response) => response,
  (error: ErrorResponse) => {
    if (error.config.onError) {
      // 에러 핸들러가 있으면 호출
      error.config.onError(error);
    } else {
      console.error(error);
      return Promise.reject(error);
    }
  },
);

export default api;
