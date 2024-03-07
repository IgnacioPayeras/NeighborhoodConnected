import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  const selectedClass = props.selected ? "opacity-100" : "opacity-[.48]";
  const selectedBar = props.selected ? "border-b-2 border-purple slide-in" : "border-b-2 border-transparent";
  return (
    <li className={`mx-4 py-10 relative`}>
      <Link className={`${selectedClass} text-gray hover:opacity-100`} to={props.link} onClick={props.onClick}>
        {props.title}
      </Link>
      <div className={`absolute bottom-0 left-0 right-0 h-0.5 ${selectedBar}`}></div>
    </li>
  );
};

export default Item;
