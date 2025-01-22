import React from "react";
function NavbarItem({ href, children, isActive, onClick }) {
  return (
    <li className="mx-2">
      <a
        href={href}
        onClick={onClick}
        className={`font-medium text-sm hover:no-underline ${
          isActive ? "text-blueTextColor" : "text-navItemTextColor"
        }`}>
        {children}
      </a>
    </li>
  );
}

export default NavbarItem;
