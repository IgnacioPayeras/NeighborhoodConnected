import React, { useState, useEffect } from "react";
import CardList from "../components/Events/CardList";
import Search from "../components/UI/Search";
import Button from "../components/UI/Button";
import searchIcon from "../assets/search.svg";

import { getAllEvents, getAllUserEvents } from "../api/events.api";

export const Events = () => {
  const [pendingEvents, setPendingEvents] = useState([]);
  const [completedEvents, setCompletedEvents] = useState([]);
  const [participateEvents, setParticipateEvents] = useState([]);
  const [searchValue, setSearchValue] = useState("");

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
      <div className="flex items-center mt-2">
        <Search
          icon={searchIcon}
          classNameContainer="w-11/12 mr-2"
          className="w-full pl-10"
          placeholder="Search"
          onChangeValue={(event) => {
            setSearchValue(event.target.value);
          }}
        />
        <Button
          name="+ Create"
          type="primary"
          color="purple"
          className="w-fit h-fit"
        />
      </div>
      <CardList
        searchValue={searchValue}
        array={pendingEvents}
        participateArray={participateEvents}
        status="Pending"
      />
      <CardList
        searchValue={searchValue}
        array={completedEvents}
        participateArray={participateEvents}
        status="Completed"
      />
    </div>
  );
};
