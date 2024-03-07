import React, { useState, useEffect } from "react";
import Badge from "../UI/Badge";
import Button from "../UI/Button.jsx";
import { createUserEvent } from "../../api/events.api.js";

const Card = (props) => {
  const [participate, setParticipate] = useState(props.participateEvent);
  const pending = props.pending;
  const bgClass = pending === true ? "bg-purple" : "bg-green";

  useEffect(() => {
    setParticipate(props.participateEvent)
  }, [props.participateEvent])
  
  function formatDateTime(datetime) {
    var originalDate = new Date(datetime);

    var monthsOfYear = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    var month = monthsOfYear[originalDate.getMonth()];
    var day = originalDate.getDate();
    var year = originalDate.getFullYear();

    var hours = originalDate.getHours();
    var minutes = originalDate.getMinutes();
    var am_pm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    var formattedDate =
      month + " " + day + ", " + year + " " + hours + ":" + minutes + am_pm;

    return formattedDate;
  }

  const handleParticipate = async (data) => {
    const response = await createUserEvent(data)
    if(response){
      setParticipate(!props.participateEvent)
    }
  }
  return (
    <div className={`${bgClass} text-white rounded-lg p-8 my-5`}>
      {pending && participate ? <Badge text={props.text} pending={pending} /> : null}
      <h2 className="font-bold my-2 text-3xl">{props.title}</h2>
      <p className="my-2">{props.description}</p>
      <div className="flex flex-col">
        
        <span className="font-bold">
          {`${formatDateTime(props.start_datetime)} - ${formatDateTime(
            props.end_datetime
          )}`}
          , {props.location}
        </span>
        {pending && !participate ? (
          <Button name="Participate" type="secondary" color="transparent" onClick={() => handleParticipate({id_user: 1, id_event: props.id})}/>
        ) : null}

      </div>
    </div>
  );
};

export default Card;
