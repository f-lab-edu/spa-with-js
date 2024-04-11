/**
 * api 를 호출하는 함수를 넘겨받아 response와 error를 반환하는 try catch 공통화 함수
 * @param apiCall
 * @returns {Promise<*[]>}
 */
const apiTryCatch = async (apiCall) => {
  try {
    const response = await apiCall();
    return [response, null];
  } catch (error) {
    console.error(error);
    return [null, error];
  }
};

export default apiTryCatch;
