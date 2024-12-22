import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function NavbarSearch() {
  return (
    <div className="relative flex items-center border-0">
      <FontAwesomeIcon
        icon={faSearch}
        className="absolute left-3 text-gray-500"
      />
      <input
        type="text"
        placeholder="Search..."
        className="p-2 pl-10  rounded bg-navSearchColor active:bg-navSearchColor focus:outline-none"
      />
    </div>
  );
}

export default NavbarSearch;
