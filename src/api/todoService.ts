import api from './index';
import { TodoItem } from 'types/todoTypes';
import { CustomAxiosRequestConfig, OnErrorHandler } from 'types/apiTypes';

const getTodo = async (
  todoId: number,
  onError: OnErrorHandler,
): Promise<TodoItem> => {
  const config: CustomAxiosRequestConfig = { onError };
  const response = await api.get<TodoItem>(`/todos/${todoId}`, config);
  return response?.data;
};

export { getTodo };
