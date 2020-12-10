import { Button, Grid } from "@material-ui/core";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { Wrapper } from "./SignUp.styles";
import TextField from "@material-ui/core/TextField/TextField";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import firebase from "../../config/firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

interface IFormValue {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

const logoAnimations = {
  rest: { y: 0 },
  hover: { y: -10 },
  pressed: { scale: 0.95 },
};

const SignUp: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [form, setForm] = useState<IFormValue>({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  // const history = useHistory();
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
    const displayName: string = form.firstName
      .trim()
      .concat(" ", form.lastName.trim());
    firebase
      .auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then((res) => {
        res.user?.updateProfile({
          displayName: displayName,
          photoURL:
            "https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg",
        });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
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
                  <form noValidate={false} onSubmit={handleSubmit}>
                    <div className="form-item">
                      <Grid item xs={6}>
                        <TextField
                          name="firstName"
                          label="First name"
                          variant="outlined"
                          required
                          autoFocus={true}
                          size="small"
                          fullWidth
                          onChange={handleChangeInput}
                        />
                      </Grid>

                      <Grid item xs={1}></Grid>

                      <Grid item xs={6}>
                        <TextField
                          name="lastName"
                          label="Last name"
                          variant="outlined"
                          required
                          size="small"
                          fullWidth
                          onChange={handleChangeInput}
                        />
                      </Grid>
                    </div>
                    <div className="form-item">
                      <TextField
                        name="email"
                        label="Email"
                        required
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
                        required
                        autoComplete="current-password"
                        variant="outlined"
                        fullWidth
                        onChange={handleChangeInput}
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
                        type="submit"
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
