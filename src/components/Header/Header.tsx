import { Grid } from "@material-ui/core";
import React from "react";
import Logo from "../common/Logo/Logo";
import SearchCustom from "../common/SearchCustom/SearchCustom";
import HeaderStyled from "./Header.styles";

const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <Grid container spacing={3}>
        <Grid item xs={1}>
          <Logo />
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
