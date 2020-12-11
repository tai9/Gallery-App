import styled from "styled-components";

const HeaderStyled = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  padding: 0 20px;
  box-shadow: 0 4px 6px -4px rgba(0, 0, 0, 0.08);

  .logo {
    width: 100px;
    height: 50px;
    margin: 10px 0;
  }

  .center {
    margin: auto 0;
  }
`;
export default HeaderStyled;
