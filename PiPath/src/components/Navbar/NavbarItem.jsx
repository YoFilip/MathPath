import React from "react";

function NavbarItem({ href, children, isActive, onClick }) {
  return (
    <li className="mx-2">
      <a
        href={href}
        onClick={onClick}
        className={`text-text font-medium ${
          isActive ? "text-activeNavItem" : ""
        } hover:no-underline`}>
        {children}
      </a>
    </li>
  );
}

export default NavbarItem;
