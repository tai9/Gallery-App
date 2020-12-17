import React from "react";
import NavBarStyled from "./Navbar.styles";

const Navbar: React.FC = () => {
  return (
    <NavBarStyled>
      <nav>
        <ul className="nav_link">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </NavBarStyled>
  );
};

export default Navbar;
