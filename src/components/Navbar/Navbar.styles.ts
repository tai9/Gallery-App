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
    color: #767676;
  }

  .nav_link li a:hover {
    color: #000;
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
