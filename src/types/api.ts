import { AxiosRequestConfig } from 'axios';

export type ApiConfig = {
  baseURL: string;
  headers: {
    'Content-Type': string;
  };
};

export type ErrorResponseHandler = (e: ErrorResponse) => void;

export type CustomAxiosRequestConfig = AxiosRequestConfig & {
  // AxiosRequestConfig를 확장하여 onError를 추가
  onError?: ErrorResponseHandler;
};

export type ErrorResponse = {
  config: {
    onError?: ErrorResponseHandler;
  };
};
