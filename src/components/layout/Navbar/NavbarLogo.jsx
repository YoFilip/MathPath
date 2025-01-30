import React from "react";

function NavbarLogo({ onNavigate }) {
  return (
    <a
      href="/"
      onClick={(e) => {
        e.preventDefault();
        onNavigate("/");
      }}
      className="text-xl font-bold text-logoTextColor">
      MathPath
    </a>
  );
}

export default NavbarLogo;
