import React from "react";
import Authed from "./authed";
import Public from "./public";

const Routes: React.FC = () => {
  const loggedIn = false;
  //  const loggedIn = localStorage.getItem('token');
  //   const user = JSON.parse(localStorage.getItem('user'));
  return loggedIn ? <Authed /> : <Public />;
};

export default Routes;
