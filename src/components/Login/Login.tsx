import { Button, Grid } from "@material-ui/core";
import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Wrapper } from "./Login.styles";
import TextField from "@material-ui/core/TextField/TextField";

export const Login = () => {
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
                    <h1>LOGIN</h1>
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
                      <span className="ml-12">Login with Facebook</span>
                    </Button>
                  </div>
                  <div className="form-separator">
                    <p>OR</p>
                  </div>
                  <form noValidate={false}>
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
                      <a href="/">
                        <p>Forgot your password?</p>
                      </a>
                    </div>
                    <div className="form-item">
                      <Button
                        variant="contained"
                        className="color-black"
                        fullWidth
                      >
                        Login
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
