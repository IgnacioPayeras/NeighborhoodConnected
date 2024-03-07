import React, { useState } from "react";
import Item from "./Navbar/Item";
import Logo from "./Navbar/Logo";

const Navbar = () => {
  const [currentPage, setCurrentPage] = useState("Home");
  const navbarItems = [
    { name: "Home", link: "/" },
    { name: "Events", link: "events/" },
    { name: "Docs", link: "#" },
    { name: "Announcements", link: "#" },
    { name: "Reports", link: "#" },
    { name: "Profile", link: "#" },
  ];

  console.log(currentPage)
  return (
    <nav className="shadow-md flex justify-between px-10">
      <Logo />
      <ul className="flex">
        {navbarItems.map((item, index) => (
          <Item
            key={index}
            title={item.name}
            link={item.link}
            selected={currentPage === item.name}
            onClick={() => setCurrentPage(item.name)}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
