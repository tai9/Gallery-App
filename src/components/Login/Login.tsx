import { Button, Grid } from "@material-ui/core";
import React, { ChangeEvent, useState, FormEvent } from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Wrapper } from "./Login.styles";
import TextField from "@material-ui/core/TextField/TextField";
import firebase from "../../config/firebase";
import { useHistory } from "react-router-dom";

interface IFormValue {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [form, setForm] = useState<IFormValue>({ email: "", password: "" });
  const history = useHistory();

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
        setIsError(false);
        setIsLoading(false);
        history.replace("/");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setIsError(true);
        setIsLoading(false);
      });
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
                    <a href="/">
                      <img className="" src="images/logo.png" alt="logo" />
                    </a>
                    <h1>LOGIN</h1>
                    <p>Hi there! 👋👋</p>
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
                  {isError && <p>Email or password is invalid!</p>}
                  <form onSubmit={handleSubmit}>
                    <div className="form-item">
                      <TextField
                        name="email"
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        fullWidth
                        size="small"
                        onChange={handleChangeInput}
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
                        fullWidth
                        size="small"
                        onChange={handleChangeInput}
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
                        type="submit"
                        disabled={isLoading}
                      >
                        Login
                      </Button>
                    </div>
                  </form>
                  <div className="form-item text-center">
                    <span>Don't have an account? </span>
                    <a href="/signup">Sign Up</a>
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
