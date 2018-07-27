import React, { Component } from "react";
import { TextField, Typography, Paper, Button } from "@material-ui/core";
import firebase from "firebase";
import Header from "./Header";
import Footer from "./Footer";

const styles = {
  paper: {
    textAlign: "center",
    backgroundColor: "#f5f5f5",
    marginTop: 96,
    paddingTop: 75,
    paddingBottom: 75
  },
  title: {
    color: "#000",
    fontFamily: "Playfair Display",
    fontWeight: "bold",
    textTransform: "uppercase"
  },
  bootstrapFormLabel: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
    fontFamily: "Source Sans Pro"
  },
  bootstrapInput: {
    borderRadius: 4,
    border: "1px solid #ced4da",
    fontSize: 20,
    marginTop: 25,
    padding: "10px 12px",
    width: "calc(100% + 50px)",
    fontFamily: "Source Sans Pro",
    "&:focus": {
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    }
  },
  button: {
    backgroundColor: "#26A65C",
    color: "#fff",
    margin: "10px",
    fontWeight: 700,
    fontFamily: "Source Sans Pro",
    fontSize: 14
  }
};

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  handleSignUp() {
    const { email, password, error } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function() {
        console.log("loggedin");
        firebase
          .auth()
          .currentUser.sendEmailVerification()
          .then(console.log("email sent").catch(console.log(error)));
      })
      .catch(function(error) {
        // Handle Errors here.
        console.log(error);
        // ...
      });
  }

  render() {
    const { paper, title, bootstrapFormLabel, bootstrapInput, button } = styles;
    console.log(this.props);

    return (
      <div>
        <Header />
        <Paper style={paper}>
          <Typography variant="display2" style={title}>
            Sign Up
          </Typography>
          <br />
          <br />
          <form autoComplete="true">
            <TextField
              label="Email"
              placeholder="Enter your email"
              type="email"
              autoFocus
              onChange={e => {
                this.setState({ email: e.target.value });
              }}
              InputProps={{
                disableUnderline: true,
                style: bootstrapInput
              }}
              InputLabelProps={{
                shrink: true,
                style: bootstrapFormLabel
              }}
            />
            <br />
            <br />
            <TextField
              label="Password"
              placeholder="********"
              type="password"
              onChange={e => {
                this.setState({ password: e.target.value });
              }}
              InputProps={{
                disableUnderline: true,
                style: bootstrapInput
              }}
              InputLabelProps={{
                shrink: true,
                style: bootstrapFormLabel
              }}
            />
            <br />
            <br />
            <Button
              variant="flat"
              style={button}
              onClick={this.handleSignUp.bind(this)}
            >
              Sign Up
            </Button>
            <Typography variant="title">OR</Typography>
            <Button variant="flat" style={button}>
              Sign Up With Google
            </Button>
          </form>
        </Paper>
        <Footer />
      </div>
    );
  }
}

export default SignUp;
