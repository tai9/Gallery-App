import styled from "styled-components";

const HeaderStyled = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  padding: 0 20px;
  box-shadow: 0 4px 6px -4px rgba(0, 0, 0, 0.08);
  min-width: 360px;
  background: white;
  z-index: 999;

  .MuiGrid-container {
    justify-content: space-between;
  }

  a {
    text-decoration: none;
  }

  .btn-login .MuiButton-root {
    font-size: inherit;
    border: 1px solid #767676;
    color: #767676;
    padding: 3px 16px;
    text-transform: none;
  }

  .logo {
    width: 100px;
    height: 50px;
    margin: 10px 0;
  }

  .center {
    margin: auto 0;
  }

  .fit-content {
    min-width: fit-content;
  }
`;
export default HeaderStyled;
