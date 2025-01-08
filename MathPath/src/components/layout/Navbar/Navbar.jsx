import React from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarSearch from "./NavbarSearch";
import NavbarItem from "./NavbarItem";

const Navbar = ({ currentPage, onNavigate }) => {
  return (
    <nav className="flex items-center justify-between p-4 font-sans bg-white">
      <div className="flex items-center">
        <NavbarLogo onNavigate={onNavigate} />
        <div className="ml-16">
          <NavbarSearch />
        </div>
      </div>
      <ul className="flex gap-10">
        <NavbarItem
          href="#home"
          isActive={currentPage === "home"}
          onClick={() => onNavigate("home")}>
          Strona główna
        </NavbarItem>
        <NavbarItem
          href="#topics"
          isActive={currentPage === "topics"}
          onClick={() => onNavigate("topics")}>
          Tematy
        </NavbarItem>
        <NavbarItem
          href="#help"
          isActive={currentPage === "help"}
          onClick={() => onNavigate("help")}>
          Pomoc
        </NavbarItem>
      </ul>
    </nav>
  );
};

export default Navbar;
