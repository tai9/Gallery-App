import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
#root{width: 100%;}
html {
    height: 100%;
    width: 100%;
  }
  body {
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    height: 100%;
    font-size:14px;
  }
  * {
    font-family: 'Catamaran', sans-serif;
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;
  width: 100%;
`;
