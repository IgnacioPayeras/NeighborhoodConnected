import React from "react";
import Card from "./Card.jsx";

const CardList = (props) => {
  const searchValue = props.searchValue;
  const searchFilteredArray = props.array.filter(event => {
    return event.title.toLowerCase().includes(searchValue.toLowerCase());
  })
  return (
    <div className="mt-10">
      <span className="font-semibold">{props.status}</span>
      <div className="flex flex-col lg:grid grid-cols-2 gap-3">
        {searchFilteredArray.map((event) => (
          <Card
            key={event.id}
            id={event.id}
            text={props.status === "Pending" ? "Participating" : null}
            title={event.title}
            description={event.description}
            start_datetime={event.start_datetime}
            end_datetime={event.end_datetime}
            location={event.location}
            pending={props.status === "Pending" ? true : false}
            participateEvent={
              props.participateArray.some((item) => event.id === item.id_event)
                ? true
                : false
            }
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
