import API from './index';
import apiTryCatch from '../utils/apiUtil';

const getTodo = async (todoId) => {
  const apiCall = () => API.get(`/todos/${todoId}`);
  const [response, error] = await apiTryCatch(apiCall);

  if (error) throw error;
  return response.data;
};
export { getTodo };
