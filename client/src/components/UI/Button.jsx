import React from 'react';

const Button = (props) => {
  const bgColors = {
    transparenmt: 'bg-transparent',
    purple: 'bg-purple',
    green: 'bg-green',
    red: 'bg-red',
  }
  const buttonTypes = {
    primary: `border-none text-white`,
    secondary: `border-2`,
  };

  const buttonClass = buttonTypes[props.type] || buttonTypes.normal;

  return (
    <button className={`px-4 py-2 rounded ${buttonClass} ${bgColors[props.color]} ${props.className}`} onClick={props.onClick}>{props.name}</button>
  );
};

export default Button;
