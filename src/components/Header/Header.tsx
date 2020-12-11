import { Grid } from "@material-ui/core";
import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import HeaderStyled from "./Header.styles";

const logoAnimations = {
  rest: { y: 0 },
  hover: { y: -10 },
  pressed: { scale: 0.95 },
};

const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Link to="/">
            <motion.img
              className=""
              src="images/logo.png"
              alt="logo"
              variants={logoAnimations}
              initial="rest"
              whileHover="hover"
              whileTap="pressed"
            />
          </Link>
        </Grid>
      </Grid>
    </HeaderStyled>
  );
};

export default Header;
