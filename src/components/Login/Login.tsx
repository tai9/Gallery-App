import { Button, Grid } from "@material-ui/core";
import React, { ChangeEvent, useState, FormEvent } from "react";
import { Wrapper } from "./Login.styles";
import TextField from "@material-ui/core/TextField/TextField";
import firebase from "../../config/firebase";
import { Link, useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import ForgotPassword from "./ForgotPassword";
interface IFormValue {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [form, setForm] = useState<IFormValue>({ email: "", password: "" });

  // Configure FirebaseUI.
  const uiConfig = {
    signInFlow: "popup",
    signInSuccessUrl: "/",
    signInOptions: [firebase.auth.FacebookAuthProvider.PROVIDER_ID],
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.currentTarget.name]: e.currentTarget.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    await firebase
      .auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then((user) => {
        user.user?.getIdToken().then((res) => {
          localStorage.setItem("token", res.toString());
        });
        setMessage("");
        setIsLoading(false);
        history.replace("/");
      })
      .catch((error) => {
        setMessage(error.message);
        setIsLoading(false);
      });
  };

  const logoAnimations = {
    rest: { y: 0 },
    hover: { y: -10 },
    pressed: { scale: 0.95 },
  };

  return (
    <Wrapper>
      <Grid container className="h-100">
        <Grid item xs={12}>
          <div className="vertical-wrapper">
            <div className="vertical-cell">
              <div className="row">
                <div className="center-block">
                  <div className="text-center">
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
                    <h1>SIGN IN</h1>
                    <p>Hi there! 👋👋</p>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <StyledFirebaseAuth
                      uiConfig={uiConfig}
                      firebaseAuth={firebase.auth()}
                      className="btn-facebook"
                    />
                  </motion.div>

                  <div className="form-separator">
                    <p>OR</p>
                  </div>
                  <div className="error-message">
                    {message && <p>{message}! 😒😒</p>}
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="form-item">
                      <TextField
                        name="email"
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        autoFocus
                        required
                        fullWidth
                        size="small"
                        onChange={handleChangeInput}
                        type="email"
                      />
                    </div>
                    <div className="form-item">
                      <TextField
                        name="password"
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="outlined"
                        required
                        fullWidth
                        size="small"
                        onChange={handleChangeInput}
                      />
                    </div>
                    <div className="form-item flex-end">
                      <Button
                        className="text-lower"
                        size="small"
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        Forgot your password?
                      </Button>
                      <ForgotPassword
                        isOpen={isOpen}
                        handleClose={() => setIsOpen(!isOpen)}
                      />
                    </div>
                    <motion.div
                      className="form-item"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Button
                        variant="contained"
                        className="color-black"
                        fullWidth
                        type="submit"
                        disabled={isLoading}
                      >
                        Sign in
                      </Button>
                    </motion.div>
                  </form>
                  <div className="form-item flex-center">
                    <span>Don't have an account? </span>
                    <Link to="/signup">Sign Up</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Login;
