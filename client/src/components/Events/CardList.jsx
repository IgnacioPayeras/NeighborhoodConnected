import React from "react";
import Card from "./Card.jsx";

const CardList = (props) => {
  return (
    <div className="mt-10">
      <span className="font-semibold">{props.status}</span>
      <div className="grid grid-cols-2 gap-3">
        {props.array.map((event) => (
          <Card
            key={event.id}
            text={props.status === "Pending" ? "Participating" : null}
            title={event.title}
            description={event.description}
            start_datetime={event.start_datetime}
            end_datetime={event.end_datetime}
            location={event.location}
            pending={props.status === "Pending" ? true : false}
            participateEvent={props.participateArray.some(item => event.id === item.id_event) ? true : false}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
