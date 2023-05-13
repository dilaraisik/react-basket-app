import axios from 'axios';

export default function useAxios() {
  const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_API_URL
  });

  instance.interceptors.response.use(
    function (response) {
      return response;
    },
    async function (error) {
      const status = error.response.status;

      if (status === 401 || status === 403) {
        // TODO: clear cookie and reload page logic
      }
      return Promise.reject(error);
    }
  );
  
  return {api: instance};
}