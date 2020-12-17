import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import BadgeAvatars from "../common/BadgeAvatars/BadgeAvatars";
import Logo from "../common/Logo/Logo";
import SearchCustom from "../common/SearchCustom/SearchCustom";
import HeaderStyled from "./Header.styles";
import firebase from "../../config/firebase";
import Navbar from "../Navbar/Navbar";

const Header: React.FC = () => {
  const [user, setUser] = useState<firebase.User>(null!);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        setUser(user);
      }
    });
  }, []);

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
          <BadgeAvatars
            username={user && user.displayName ? user.displayName : "Mark"}
            photoURL={user ? user.photoURL : ""}
          />
        </Grid>
      </Grid>
    </HeaderStyled>
  );
};

export default Header;
