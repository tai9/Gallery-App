import React from "react";
import { Link } from "react-router-dom";
import NavBarStyled from "./Navbar.styles";

const Navbar: React.FC = () => {
  return (
    <NavBarStyled>
      <nav>
        <ul className="nav_link">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </NavBarStyled>
  );
};

export default Navbar;
