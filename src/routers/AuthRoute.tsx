import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import AppContext from "../store/AppContext";
import AnimatedRoute from "./AnimatedRoute";

type RouteProps = {
  children?: any;
  path: string;
  exact: boolean;
};

export default function AuthRoute({ children, ...rest }: RouteProps) {
  const { isLoggedIn } = useContext(AppContext);

  if (isLoggedIn) return <AnimatedRoute {...rest}>{children}</AnimatedRoute>;

  return (
    <AnimatedRoute>
      <Redirect to="/login" />;
    </AnimatedRoute>
  );
}
