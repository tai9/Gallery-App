import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  html{
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

  #root{
    height: 100%;
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;
