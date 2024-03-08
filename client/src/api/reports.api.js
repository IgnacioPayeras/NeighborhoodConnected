import axios from "axios";

const reportsApi = axios.create({
  baseURL: "http://localhost:8000/reports/api/reports",
});

export const getAllReports = () => reportsApi.get("/");
export const createReport = (report) => reportsApi.post("/", report);
export const deleteReport = (id) => reportsApi.delete(`/${id}`);