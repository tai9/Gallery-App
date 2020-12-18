import React from "react";
import HomeStyled from "./Home.styles";
import Gallery from "../Gallery/Gallery";

const Home: React.FC = () => {
  return (
    <HomeStyled>
      <Gallery />
    </HomeStyled>
  );
};

export default Home;
