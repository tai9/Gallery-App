import React from "react";
import { Wrapper } from "./Loading.styles";

const Loading = () => {
  return (
    <Wrapper>
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Wrapper>
  );
};

export default Loading;
