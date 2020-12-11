import { Grid } from "@material-ui/core";
import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import SearchCustom from "../common/SearchCustom/SearchCustom";
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
        <Grid item xs={1}>
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
        </Grid>
        <Grid item xs={5} className="center">
          <SearchCustom />
        </Grid>
        <Grid item xs={5}>
          <div style={{ backgroundColor: "red" }}>NAV</div>
        </Grid>
        <Grid item xs={1}>
          <div style={{ backgroundColor: "red" }}>Avt</div>
        </Grid>
      </Grid>
    </HeaderStyled>
  );
};

export default Header;
