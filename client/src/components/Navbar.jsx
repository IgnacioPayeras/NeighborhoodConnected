import React from "react";
import Item from "./Navbar/Item";
import Logo from "./Navbar/Logo";

const Navbar = () => {
  const navbarItems = [
    { name: "Home", link: "/" },
    { name: "Events", link: "events/" },
    { name: "Docs", link: "#" },
    { name: "Announcements", link: "#" },
    { name: "Reports", link: "#" },
    { name: "Profile", link: "#" },
  ];

  return (
    <nav className="shadow-md flex justify-between p-10">
      <Logo />
      <ul className="flex">
        {navbarItems.map((item, index) => (
          <Item key={index} title={item.name} link={item.link}/>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
