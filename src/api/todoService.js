import API from './index';

const getTodo = async (todoId) => {
  try {
    const response = await API.get(`/todos/${todoId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export { getTodo };
