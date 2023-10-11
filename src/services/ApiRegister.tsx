import axios from "axios";
import { getUserLocalStorage } from "../Context/AuthProvider/Util";

export const ApiRegister = axios.create({
  baseURL: "https://reqres.in/api/register",
});

ApiRegister.interceptors.request.use(
  (config) => {
    const user = getUserLocalStorage();

    config.headers.Authorization = user?.token;

    return config;
  },
  (Error) => {
    return Promise.reject(Error);
  }
);
