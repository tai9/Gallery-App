import React from "react";
import { NavLink } from "react-router-dom";
import NavBarStyled from "./Navbar.styles";

export type Props = {
  alignment: "horizontal" | "vertical";
};

const Navbar: React.FC<Props> = ({ alignment }) => {
  return (
    <NavBarStyled alignment={alignment}>
      <nav>
        <ul className="nav_link">
          <li>
            <NavLink to="/" activeClassName="active" exact>
              <div className="nav_link_item">Home</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active" exact>
              <div className="nav_link_item">About</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active" exact>
              <div className="nav_link_item">Contact</div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </NavBarStyled>
  );
};

export default Navbar;
