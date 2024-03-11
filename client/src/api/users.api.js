import axios from "axios";

const userApi = axios.create({
  baseURL: "http://localhost:8000/users/api/users",
});

export const getUser = (id_user = null) => {
  let url = "/";
  if (id_user) {
    url += `?id=${id_user}`;
  }
  return userApi.get(url);
};
