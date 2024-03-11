import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  const selectedClass = props.selected ? "opacity-100" : "opacity-[.48]";
  return (
    <li className={`mx-4 py-10 relative`}>
      <Link className={`${selectedClass} text-gray hover:opacity-100`} to={props.link} onClick={props.onClick}>
        {props.title}
      </Link>
    </li>
  );
};

export default Item;
