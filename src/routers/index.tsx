import React from "react";
import About from "../components/About/About";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: "/",
    exact: true,
    component: () => <Home />,
    protected: null,
  },
  {
    path: "/login",
    exact: true,
    component: () => <Login />,
    protected: "guest",
  },
  {
    path: "/signup",
    exact: true,
    component: () => <SignUp />,
    protected: "guest",
  },
  {
    path: "/about",
    exact: true,
    component: () => <About title="About" />,
    protected: "guest",
  },
  {
    path: "/contact",
    exact: true,
    component: () => <About title="Contact" />,
    protected: "guest",
  },
];
