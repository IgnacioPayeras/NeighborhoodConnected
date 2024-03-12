import React, { useState } from "react";
import Item from "./Navbar/Item";
import Logo from "./Navbar/Logo";
import { Menu } from "./UI/Menu";

const Navbar = () => {
  const [currentPage, setCurrentPage] = useState("Home");
  const [showMenu, setShowMenu] = useState(false); // Estado para controlar la visualización del menú en pantallas pequeñas
  const navbarItems = [
    { name: "Events", link: "events/" },
    { name: "Documents", link: "documents/" },
    { name: "Announcements", link: "announcements/" },
    { name: "Reports", link: "reports/" },
  ];

  // Función para alternar la visualización del menú en pantallas pequeñas
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Función para manejar el clic en un elemento del menú
  const handleItemClick = (name) => {
    setCurrentPage(name);
    setShowMenu(false); // Ocultar el menú después de hacer clic en un elemento
  };

  return (
    <nav className="shadow-md flex justify-between px-10">
      <Logo />
      {/* Renderizado del menú hamburguesa */}
      <Menu navbarItems={navbarItems} toggleMenu={toggleMenu} showMenu={showMenu} handleItemClick={handleItemClick} currentPage={currentPage}/>
      {/* Renderizado del menú completo en pantallas grandes */}
      <ul className="hidden lg:flex">
        {navbarItems.map((item, index) => (
          <Item
            key={index}
            title={item.name}
            link={item.link}
            selected={currentPage === item.name}
            onClick={() => handleItemClick(item.name)}
          />
        ))}
      </ul>
      {/* Fin del menú completo en pantallas grandes */}
    </nav>
  );
};

export default Navbar;
