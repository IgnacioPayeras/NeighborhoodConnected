import React, { useState } from "react";

const Search = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(inputValue !== "");
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    props.onChangeValue(event);
  };

  return (
    <div className={`relative ${props.classNameContainer}`}>
      <input
        type="text"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        className={`shadow-lg p-6 rounded focus:outline-none ${props.className}`}
        onChange={handleInputChange}
      />
      <div>
        <img src={props.icon} alt="search" className="absolute inset-y-4 left-0 p-3 pointer-events-none"/>
      </div>
      <label
        className={`absolute left-10 top-4 transition-all duration-300 ${
          isFocused || inputValue ? "-translate-y-2 text-sm" : "translate-y-2 text-gray opacity-[.48]"
        } text-gray opacity-80 pointer-events-none`}
      >
        {props.placeholder}
      </label>
    </div>
  );
};

export default Search;
