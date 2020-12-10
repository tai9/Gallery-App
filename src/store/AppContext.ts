import React from "react";
import firebase from "../config/firebase";

interface LoginInfor {
  isLoggedIn: boolean;
  user?: firebase.UserInfo;
}

const AppContext = React.createContext<LoginInfor>({
  isLoggedIn: false,
});

export default AppContext;
