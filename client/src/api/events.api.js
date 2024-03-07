import axios from "axios";

const eventsApi = axios.create({
  baseURL: "http://localhost:8000/events/api/events",
});

const userEventsApi = axios.create({
  baseURL: "http://localhost:8000/events/api/user_events",
});

// Events
export const getAllEvents = () => eventsApi.get("/");
export const createEvent = (event) => eventsApi.post("/", event)

// User events
export const getAllUserEvents = (id_user = null) => {
  let url = "/";
  if (id_user) {
    url += `?id_user=${id_user}`;
  }
  return userEventsApi.get(url);
};
