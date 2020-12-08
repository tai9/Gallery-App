import React from "react";
import { GlobalStyle } from "./App.styles";
import { BrowserRouter as Router } from "react-router-dom";
import Routers from "./routers";
import Footer from "./components/Footer/Footer";
const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routers />
      </Router>
      <Footer />
    </>
  );
};

export default App;
