import React from "react";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import Loading from "../pages/Loading/Loading";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: "/",
    exact: true,
    component: () => <Loading />,
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
];
