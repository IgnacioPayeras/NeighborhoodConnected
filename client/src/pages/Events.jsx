import React, { useState, useEffect } from "react";
import CardList from "../components/Events/CardList";

import { getAllEvents, getAllUserEvents } from "../api/events.api";

export const Events = () => {
  const [pendingEvents, setPendingEvents] = useState([]);
  const [completedEvents, setCompletedEvents] = useState([]);
  const [participateEvents, setParticipateEvents] = useState([]);
  useEffect(() => {
    async function loadEvents() {
      const response = await getAllEvents();
      const data = response.data;
      const currentDate = new Date();
      const pendingEventsArray = [];
      const completedEventsArray = [];
      data.forEach((item) => {
        const endDateEvent = new Date(item.end_datetime);
        currentDate > endDateEvent
          ? completedEventsArray.push(item)
          : pendingEventsArray.push(item);
      });
      setPendingEvents(pendingEventsArray);
      setCompletedEvents(completedEventsArray);
    }

    async function loadParticipateEvents() {
      const response = await getAllUserEvents(1);
      const data = response.data;
      setParticipateEvents(data);
    }

    loadEvents();
    loadParticipateEvents();
  }, []);

  return (
    <div className="px-10 mt-10">
      <h1>Events</h1>
      <h3>
        All events are displayed here, ordered by date and time. You can view
        events that have ended.
      </h3>
      <CardList array={pendingEvents} participateArray={participateEvents} status="Pending" />
      <CardList array={completedEvents} participateArray={participateEvents} status="Completed" />
    </div>
  );
};
