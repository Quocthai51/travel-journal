import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthEurope } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className="Header">
        <FontAwesomeIcon className="icon-earth" icon={ faEarthEurope } />
      <h1>my travel journal.</h1>
    </header>
  );
}

export default Header;