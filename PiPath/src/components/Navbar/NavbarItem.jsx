import React from "react";
function NavbarItem({ href, children, isActive, onClick }) {
  return (
    <li className="mx-2">
      <a
        href={href}
        onClick={onClick}
        className={`font-medium hover:no-underline ${
          isActive ? "text-inactiveTextColor" : "text-navItemTextColor"
        }`}>
        {children}
      </a>
    </li>
  );
}

export default NavbarItem;
