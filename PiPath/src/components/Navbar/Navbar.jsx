import React, { useState } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarSearch from "./NavbarSearch";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("#home");

  return (
    <nav className="flex items-center justify-between p-4 font-sans">
      <div className="flex items-center">
        <NavbarLogo />
        <div className="ml-16">
          <NavbarSearch />
        </div>
      </div>
      <ul className="flex gap-10">
        <NavbarItem
          href="#home"
          isActive={activeItem === "#home"}
          onClick={() => setActiveItem("#home")}>
          Home
        </NavbarItem>
        <NavbarItem
          href="#topic"
          isActive={activeItem === "#topic"}
          onClick={() => setActiveItem("#topic")}>
          Topics
        </NavbarItem>
        <NavbarItem
          href="#help"
          isActive={activeItem === "#help"}
          onClick={() => setActiveItem("#help")}>
          Help
        </NavbarItem>
      </ul>
    </nav>
  );
};

export default Navbar;
