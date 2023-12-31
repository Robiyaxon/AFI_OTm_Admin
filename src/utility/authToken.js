import api from "./api";

const authToken = (token) => {
  if (token) {
    api.defaults.headers = {
      Authorization: `Token ${token}`,
    };
    localStorage.setItem("token", token);
  } else {
    localStorage.removeItem("token");
  }
};

export default authToken;
