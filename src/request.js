import axios from "axios";

const instance = axios.create({
  baseURL: "/api",
});

instance.interceptors.response.use(
  (response) => {
    if (response.data.errno === 0) {
      return Promise.resolve(response.data.data);
    } else {
      return Promise.reject(response.data.error);
    }
  },
  (error) => {
    return Promise.reject(error.data);
  }
);

export default instance;
