import axios from "axios";
import store from "../redux/store";
import { LOGOUT } from "../redux/actions/types";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://oliytalim.pythonanywhere.com/',
  headers: {
    "Content-Type": "application/json",
    Authorization: `Token ` + (localStorage.getItem("token") || '0eaaa80f89fcc13afdedc2cea7e67ca289254404	'),
  },
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401) {
      store.dispatch({ type: LOGOUT });
    }
    return Promise.reject(err);
  }
);

export default api;
