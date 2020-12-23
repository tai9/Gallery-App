import styled from "styled-components";
import { Props } from "./Navbar";

const NavBarStyled = styled.div<Props>`
  li,
  a {
    color: #000000;
    text-decoration: none;
  }

  .nav_link {
    list-style: none;
    border-right: 1px solid #767676;
  }

  .nav_link li {
    display: ${(props) =>
      props.alignment === "horizontal" ? "inline-block" : "block"};
    padding: 0 0.5rem;
  }

  .nav_link li a {
    transition: all 0.3s ease 0s;
    color: #767676;
  }

  .nav_link li a:hover {
    color: #000;

    .nav_link_item {
      border-color: #000;
    }
  }

  .nav_link_item {
    padding: 0.5rem;
    border: 1px solid #767676;
    border-radius: 4px;
  }

  .active {
    div {
      color: #000;
      border: 1px solid #000;
      border-bottom: 3px solid #000;
    }
  }

  .selected {
    color: red;
  }

  @media only screen and (min-width: 961px) {
    .nav_link {
      float: right;
    }
  }

  @media only screen and (max-width: 960px) {
    .nav_link {
      display: flex;
      justify-content: space-around;
    }
  }
`;

export default NavBarStyled;
