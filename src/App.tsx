import React, { useState } from "react";
import { GlobalStyle, Wrapper } from "./App.styles";
import { Switch, Route, useLocation } from "react-router-dom";
import routes from "./routers";
import Footer from "./components/Footer/Footer";
// import firebase from "./config/firebase";
import AppContext from "./store/AppContext";
import { AnimatePresence } from "framer-motion";
import GuestRoute from "./routers/GuestRoute";
import AuthRoute from "./routers/AuthRoute";
import AnimatedRoute from "./routers/AnimatedRoute";
import NotFound from "./pages/NotFound/NotFound";

const App: React.FC = () => {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setIsLoading(true);
  //   firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       setIsLoggedIn(true);
  //       setUser(user);
  //       setIsLoading(false);
  //     } else {
  //       setIsLoggedIn(false);
  //       setUser({});
  //       setIsLoading(false);
  //     }
  //   });
  // }, []);

  // if (isLoading) return <Loading />;

  return (
    <AppContext.Provider value={{ isLoggedIn, user }}>
      <GlobalStyle />
      <Wrapper>
        <AnimatePresence exitBeforeEnter initial={false}>
          <Switch key={location.pathname} location={location}>
            {routes.map((route, index) => {
              if (route.protected === "guest") {
                return (
                  <GuestRoute key={index} path={route.path} exact={route.exact}>
                    <route.component />
                  </GuestRoute>
                );
              }

              if (route.protected === "auth") {
                return (
                  <AuthRoute key={index} path={route.path} exact={route.exact}>
                    <route.component />
                  </AuthRoute>
                );
              }

              return (
                <AnimatedRoute
                  key={index}
                  path={route.path}
                  exact={route.exact}
                >
                  <route.component />
                </AnimatedRoute>
              );
            })}

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </AnimatePresence>
        <Footer />
      </Wrapper>
    </AppContext.Provider>
  );
};

export default App;
