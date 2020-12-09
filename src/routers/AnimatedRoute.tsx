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
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </Route>
  );
}
