import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NODE_ENV !== "production" ? "/api" : "./data",
});
instance.interceptors.request.use(
  (config) => {
    if (process.env.NODE_ENV === "production") {
      
      config.url += ".json";
       
    }

    return Promise.resolve(config);
  },
  (error) => Promise.reject(error)
);
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
