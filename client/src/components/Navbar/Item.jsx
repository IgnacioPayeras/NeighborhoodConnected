import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <li className="mx-4">
      <Link className="text-gray opacity-[.48] hover:opacity-100" to={props.link}>{props.title}</Link>
    </li>
  );
};

export default Item;
