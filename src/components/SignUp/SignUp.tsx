import { Button, Grid } from "@material-ui/core";
import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Wrapper } from "./SignUp.styles";
import TextField from "@material-ui/core/TextField/TextField";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const logoAnimations = {
  rest: { y: 0 },
  hover: { y: -10 },
  pressed: { scale: 0.95 },
};

const SignUp: React.FC = () => {
  return (
    <Wrapper>
      <Grid container className="h-100">
        <Grid item xs={12}>
          <div className="vertical-wrapper">
            <div className="vertical-cell">
              <div className="row">
                <div className="center-block">
                  <div className="text-center">
                    <a href="/">
                      <motion.img
                        className=""
                        src="images/logo.png"
                        alt="logo"
                        variants={logoAnimations}
                        initial="rest"
                        whileHover="hover"
                        whileTap="pressed"
                      />
                    </a>
                    <h1>SIGN UP</h1>
                    <span>Already have an account? </span>
                    <Link to="/login">Login</Link>
                  </div>
                  <motion.div
                    className="form-group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button
                      className="btn-facebook txt-transform"
                      variant="contained"
                      color="primary"
                      href="/"
                      fullWidth
                      disableRipple
                    >
                      <FacebookIcon />
                      <span className="ml-12">Sign up with Facebook</span>
                    </Button>
                  </motion.div>
                  <div className="form-separator">
                    <p>OR</p>
                  </div>
                  <form noValidate={false}>
                    <div className="form-item">
                      <Grid item xs={6}>
                        <TextField
                          label="First name"
                          variant="outlined"
                          size="small"
                          fullWidth
                        />
                      </Grid>

                      <Grid item xs={1}></Grid>

                      <Grid item xs={6}>
                        <TextField
                          label="Last name"
                          variant="outlined"
                          size="small"
                          fullWidth
                        />
                      </Grid>
                    </div>
                    <div className="form-item">
                      <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        size="small"
                      />
                    </div>
                    <div className="form-item">
                      <TextField
                        label="Username"
                        variant="outlined"
                        fullWidth
                        size="small"
                      />
                    </div>
                    <div className="form-item">
                      <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="outlined"
                        fullWidth
                        size="small"
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
                      >
                        Sign Up
                      </Button>
                    </motion.div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default SignUp;
