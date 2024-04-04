import API from './index';
import apiTryCatch from '../utils/apiUtil';

const getTodo = async (todoId) => {
  const apiCall = () => API.get(`/todos/${todoId}`);
  const [response, error] = await apiTryCatch(apiCall);

  return [response?.data, error];
};
export { getTodo };
