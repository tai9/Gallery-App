import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const logoAnimations = {
  rest: { y: 0 },
  hover: { y: -10 },
  pressed: { scale: 0.95 },
};

const Logo = () => {
  return (
    <Link to="/">
      <motion.img
        className="logo"
        src="images/logo.png"
        alt="logo"
        variants={logoAnimations}
        initial="rest"
        whileHover="hover"
        whileTap="pressed"
      />
    </Link>
  );
};

export default Logo;
