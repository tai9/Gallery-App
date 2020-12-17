import styled from "styled-components";

const NavBarStyled = styled.div`
  li,
  a {
    color: #000000;
    text-decoration: none;
  }

  .nav_link {
    list-style: none;
  }

  .nav_link li {
    display: inline-block;
    padding: 0px 20px;
  }

  .nav_link li a {
    transition: all 0.3s ease 0s;
  }

  .nav_link li a:hover {
    color: #969393;
  }
`;

export default NavBarStyled;
