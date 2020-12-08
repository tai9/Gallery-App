import { motion } from "framer-motion";
import React from "react";
import { Route } from "react-router-dom";

type RouteProps = {
  children?: any;
  path?: string;
  exact?: boolean;
};

export default function AnimatedRoute({ children, ...rest }: RouteProps) {
  return (
    <Route {...rest}>
      <motion.div
        style={{ width: "100%", height: "100%" }}
        initial={{ x: 200 }}
        animate={{ x: 0 }}
        exit={{ scale: 0 }}
      >
        {children}
      </motion.div>
    </Route>
  );
}
