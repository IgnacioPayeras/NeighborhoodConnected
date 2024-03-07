import axios from "axios";

const announcementsApi = axios.create({
  baseURL: "http://localhost:8000/announcements/api/announcements",
});

export const getAllAnnouncements = () => announcementsApi.get("/");