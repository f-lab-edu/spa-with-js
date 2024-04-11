import api from './index';

const getTodo = async (todoId, onError) => {
  const response = await api.get(`/todos/${todoId}`, { onError });
  return response?.data;
};

export { getTodo };
