import React from "react";

type Props = {
  title: string;
};

const About: React.FC<Props> = ({ title }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1>{title}</h1>
    </div>
  );
};

export default About;
