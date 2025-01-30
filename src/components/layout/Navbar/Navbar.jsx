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
          <NavbarSearch onNavigate={onNavigate} />
        </div>
      </div>
      <ul className="flex gap-10">
        <NavbarItem
          href="/MathPath"
          isActive={currentPage === "home"}
          onClick={(e) => {
            e.preventDefault();
            onNavigate("/");
          }}>
          Strona główna
        </NavbarItem>
        <NavbarItem
          href="/MathPath/topics"
          isActive={currentPage === "topics"}
          onClick={(e) => {
            e.preventDefault();
            onNavigate("/topics");
          }}>
          Tematy
        </NavbarItem>
        <NavbarItem
          href="/MathPath/quiz"
          isActive={currentPage === "quiz"}
          onClick={(e) => {
            e.preventDefault();
            onNavigate("/quiz");
          }}>
          Quiz
        </NavbarItem>
        <NavbarItem
          href="/MathPath/help"
          isActive={currentPage === "help"}
          onClick={(e) => {
            e.preventDefault();
            onNavigate("/help");
          }}>
          Pomoc
        </NavbarItem>
      </ul>
    </nav>
  );
};

export default Navbar;
