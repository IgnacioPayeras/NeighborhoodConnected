import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  const bgColors = {
    transparenmt: "bg-transparent",
    purple: "bg-purple",
    green: "bg-green",
    red: "bg-red",
  };
  const buttonTypes = {
    primary: `border-none text-white`,
    secondary: `border-2 border-white`,
  };

  const buttonClass = buttonTypes[props.type] || buttonTypes.normal;

  const buttonComponent = props.link ? (
    <Link to={props.link}>
      <button
        className={`px-4 py-2 rounded ${buttonClass} ${bgColors[props.color]} ${
          props.className
        }`}
        onClick={props.onClick}
      >
        {props.name}
      </button>
    </Link>
  ) : (
    <button
      className={`px-4 py-2 rounded ${buttonClass} ${bgColors[props.color]} ${
        props.className
      }`}
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );

  return buttonComponent;
};

export default Button;
