import React from "react";
import { GlobalStyle, Wrapper } from "./App.styles";
import { Login } from "./components/Login/Login";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Login />
      </Wrapper>
    </>
  );
};

export default App;
