import React, { useState, useEffect } from "react";
import { GlobalStyle, Wrapper } from "./App.styles";
import { Switch, Route, useLocation, Link } from "react-router-dom";
import routes from "./routers";
import Footer from "./components/Footer/Footer";
import firebase from "./config/firebase";
import AppContext from "./store/AppContext";
import { AnimatePresence } from "framer-motion";
import GuestRoute from "./routers/GuestRoute";
import AuthRoute from "./routers/AuthRoute";
import AnimatedRoute from "./routers/AnimatedRoute";
import NotFound from "./pages/NotFound/NotFound";
import Loading from "./pages/Loading/Loading";

const App: React.FC = () => {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<firebase.UserInfo>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        console.log(user);

        setUser(user as firebase.UserInfo);
        setIsLoggedIn(!!user);
        setIsLoading(false);
      });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  // const handleLogout = () => {
  //   firebase.auth().signOut();
  //   setIsLoggedIn(false);
  // };

  if (isLoading) return <Loading />;

  return (
    <AppContext.Provider value={{ isLoggedIn, user }}>
      <GlobalStyle />
      <Link to="/login" onClick={() => firebase.auth().signOut()}>
        LOGOUT
      </Link>
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
