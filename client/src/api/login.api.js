import axios from "axios";

const loginApi = axios.create({
  baseURL: "http://localhost:8000/accounts/api/login",
});

export const login = (user) => loginApi.post("/", user);