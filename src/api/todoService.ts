import api from './index';
import { CustomAxiosRequestConfig, ErrorResponseHandler } from 'types/api';

const getTodo = async (
  todoId: number,
  onError: ErrorResponseHandler,
): Promise<TodoTypes.Todo> => {
  const config: CustomAxiosRequestConfig = { onError };
  const response = await api.get<TodoTypes.Todo>(`/todos/${todoId}`, config);
  return response?.data;
};

export { getTodo };
