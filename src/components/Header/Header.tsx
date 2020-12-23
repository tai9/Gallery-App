import { Button, Grid } from "@material-ui/core";
import React, { useContext } from "react";
import Logo from "../common/Logo/Logo";
import SearchCustom from "../common/SearchCustom/SearchCustom";
import HeaderStyled from "./Header.styles";
import Navbar from "../Navbar/Navbar";
import ProfileMenu from "../common/ProfileMenu/ProfileMenu";
import AppContext from "../../store/AppContext";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const { isLoggedIn } = useContext(AppContext);

  return (
    <HeaderStyled>
      <Grid container>
        <Grid item xs="auto" className="center fit-content">
          <Logo />
        </Grid>
        <Grid item xs={8} sm={4} md={5} lg={5} className="center">
          <SearchCustom />
        </Grid>
        <Grid item xs={9} sm={4} md={4} lg={5} className="center">
          <Navbar />
        </Grid>
        <Grid item xs="auto" className="center">
          {isLoggedIn ? (
            <ProfileMenu />
          ) : (
            <Link to="/login" className="btn-login">
              <Button>Login</Button>
            </Link>
          )}
        </Grid>
      </Grid>
    </HeaderStyled>
  );
};

export default Header;
