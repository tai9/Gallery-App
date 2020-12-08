import { Button, Grid } from "@material-ui/core";
import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Wrapper } from "./SignUp.styles";
import TextField from "@material-ui/core/TextField/TextField";

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
                      <img className="" src="images/logo.png" alt="logo" />
                    </a>
                    <h1>SIGN UP</h1>
                    <span>Already have an account? </span>
                    <a href="/login">Login</a>
                  </div>
                  <div className="form-group">
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
                  </div>
                  <div className="form-separator">
                    <p>OR</p>
                  </div>
                  <form noValidate={false}>
                    <div className="form-item">
                      <Grid xs={6}>
                        <TextField
                          id="outlined-basic"
                          label="First name"
                          variant="outlined"
                          size="small"
                          fullWidth
                        />
                      </Grid>

                      <Grid xs={1}></Grid>

                      <Grid xs={6}>
                        <TextField
                          id="outlined-basic"
                          label="Last name"
                          variant="outlined"
                          size="small"
                          fullWidth
                        />
                      </Grid>
                    </div>
                    <div className="form-item">
                      <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        fullWidth
                        size="small"
                      />
                    </div>
                    <div className="form-item">
                      <TextField
                        id="outlined-basic"
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

                    <div className="form-item">
                      <Button
                        variant="contained"
                        className="color-black"
                        fullWidth
                      >
                        Sign Up
                      </Button>
                    </div>
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
