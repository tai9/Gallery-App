import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import AppContext from "../store/AppContext";
import AnimatedRoute from "./AnimatedRoute";

type RouteProps = {
  children?: any;
  path: string;
  exact: boolean;
};

export default function GuestRoute({ children, ...rest }: RouteProps) {
  return <AnimatedRoute {...rest}>{children}</AnimatedRoute>;
}
