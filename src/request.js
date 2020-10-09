import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NODE_ENV !== "production" ? "/api" : "/api",
});
instance.interceptors.request.use(
  (config) => {
    return Promise.resolve(config);
  },
  (error) => Promise.reject(error)
);
instance.interceptors.response.use(
  (response) => {
    return Promise.resolve(response.data);
  },
  (error) => {
    return Promise.reject(error.data);
  }
);

export const fetchMenuList = () => {
  return instance.get("/menus");
};

export const fetchFoodsList = () => {
  return instance.get("/foods");
};
export const fetchFoodsById = (id) => {
  return instance.get(`/foods/${id}`);
};
export const fetchRatingList = () => {
  return instance.get(`/ratings`);
};

export default instance;
