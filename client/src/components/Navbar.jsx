import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Item from "./Navbar/Item";
import Logo from "./Navbar/Logo";
import { Menu } from "./UI/Menu";
import Button from "./UI/Button";
import { useUser } from "../context/UserContext";

const Navbar = () => {
  const [currentPage, setCurrentPage] = useState("Home");
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleItemClick = (name, onClick) => {
    setCurrentPage(name);
    setShowMenu(false);
    if (onClick) onClick();
  };

  const handleLogOut = () => {
    updateUser(null);
    <Navigate to="/login" />;
  };

  const navbarItems = [
    { name: "Events", link: "events/", onClick: null  },
    { name: "Documents", link: "documents/", onClick: null  },
    { name: "Announcements", link: "announcements/", onClick: null  },
    { name: "Reports", link: "reports/", onClick: null  },
    { name: "Log out", link:"login/", onClick: handleLogOut },
  ];
  return (
    <nav className="shadow-md flex justify-between px-10">
      <Logo />
      <Menu
        navbarItems={navbarItems}
        toggleMenu={toggleMenu}
        showMenu={showMenu}
        handleItemClick={handleItemClick}
        currentPage={currentPage}
      />
      <ul className="hidden lg:flex">
        {navbarItems.map((item, index) => (
          <Item
            key={index}
            title={item.name}
            link={item.link}
            selected={currentPage === item.name}
            onClick={() => handleItemClick(item.name, item.onClick)} // Pasamos la función onClick al manejar el clic
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
