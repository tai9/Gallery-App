import React, { ChangeEvent, useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import Icon from "@material-ui/core/Icon";
import firebase from "../../config/firebase";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
}

const MESSAGE_SHOW =
  "Enter the email address associated with your account and we’ll send you a link to reset your password.";

const ForgotPassword: React.FC<Props> = ({ isOpen, handleClose }) => {
  const [message, setMessage] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [sent, setSent] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      setMessage(MESSAGE_SHOW);
    }
  }, [isOpen]);

  const handleSend = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        setSent(true);
        setMessage("Please check your email! 😉");
        setTimeout(() => {
          handleClose();
        }, 3000);
      })
      .catch((error) => {
        setSent(false);
        setMessage(error.message);
      });
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <form onSubmit={handleSend}>
          <DialogTitle id="form-dialog-title">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                lineHeight: 1.5,
              }}
            >
              <LockOpenIcon />
              <span>Forgot your password?</span>
            </div>
          </DialogTitle>
          <DialogContent>
            <DialogContentText
              style={{ marginBottom: 24, textAlign: "center" }}
            >
              {message}
            </DialogContentText>
            <div className="form-item">
              <TextField
                name="email"
                id="outlined-basic"
                label="Email"
                variant="outlined"
                color="secondary"
                autoFocus
                required
                fullWidth
                size="small"
                type="email"
                onChange={handleChangeInput}
                disabled={sent}
              />
            </div>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose}
              color="default"
              variant="outlined"
              size="small"
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="default"
              style={{ color: "#fff", backgroundColor: "#000" }}
              endIcon={<Icon>send</Icon>}
              size="small"
              type="submit"
            >
              Send
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default ForgotPassword;
