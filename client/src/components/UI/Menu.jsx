import React from "react";
import Item from "../Navbar/Item";

export const Menu = (props) => {
  return (
    <div className="lg:hidden">
        <button
          onClick={props.toggleMenu}
          className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
        >
          <svg
            className="h-6 w-6 fill-current text-black opacity-[.48] hover:opacity-100"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
            />
          </svg>
        </button>
        {props.showMenu && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-50"
            onClick={props.toggleMenu}
          ></div>
        )}
        {props.showMenu && (
          <div className="absolute top-16 right-10 bg-white 
          rounded-md shadow-md z-50 list-none">
            {props.navbarItems.map((item, index) => (
              <Item
                key={index}
                title={item.name}
                link={item.link}
                selected={props.currentPage === item.name}
                onClick={() => props.handleItemClick(item.name)}
              />
            ))}
          </div>
        )}
      </div>
  );
};
