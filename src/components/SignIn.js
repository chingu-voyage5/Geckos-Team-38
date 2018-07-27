import React, { Component } from "react";
import { Redirect } from "react-router-dom";
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

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    error: "",
    redirect: false,
    id: ""
  };

  loginButton() {
    const { email, password } = this.state;
    //this.setState({ error : ''});
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }
  onLoginSuccess() {
    var user = firebase.auth().currentUser;
    var id = user.uid;
    this.setState({
      email: "",
      password: "",
      error: "",
      redirect: true,
      id: id
    });
    console.log(this.state.redirect, this.state.id);
  }

  onLoginFail() {
    this.setState({
      error: "Authentication Failed",
      redirect: false
    });
    console.log(this.state.error, this.state.redirect);
  }

  render() {
    const { paper, title, bootstrapFormLabel, bootstrapInput, button } = styles;

    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: `/${this.state.id}/dashboard`,
            state: { redirect: this.state.redirect }
          }}
        />
      );
    } else
      return (
        <div>
          <Header />
          <Paper style={paper}>
            <Typography variant="display2" style={title}>
              Sign In
            </Typography>
            <br />
            <br />
            <form autoComplete="true">
              <TextField
                label="Email"
                placeholder="Enter your email"
                type="email"
                onChange={e => {
                  this.setState({ email: e.target.value });
                }}
                autoFocus
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
                onClick={this.loginButton.bind(this)}
              >
                Sign In
              </Button>
              <Typography variant="title">OR</Typography>
              <Button variant="flat" style={button}>
                Sign In With Google
              </Button>
            </form>
          </Paper>
          <Footer />
        </div>
      );
  }
}

export default SignIn;
