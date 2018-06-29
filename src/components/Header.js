import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import grey from "@material-ui/core/colors/grey";
import { Link } from "react-router-dom";
const primary = grey[50];
const styles = {
  flex: {
    flex: 1,
    fontFamily: "Playfair Display",
    fontWeight: "bold",
    fontSize: 24
  },
  button: {
    margin: "10px",
    fontWeight: 700,
    fontFamily: "Source Sans Pro",
    fontSize: 14
  },
  signIn: {
    backgroundColor: "#70B55C",
    color: primary,
    margin: "10px",
    fontWeight: 700,
    fontFamily: "Source Sans Pro",
    fontSize: 14
  },
  signUp: {
    backgroundColor: "#26A65C",
    color: primary,
    margin: "10px",
    fontWeight: 700,
    fontFamily: "Source Sans Pro",
    fontSize: 14
  }
};

class Header extends Component {
  render() {
    const { flex, button, signIn, signUp } = styles;
    return (
      <AppBar color={primary} style={{ height: 96 }}>
        <Toolbar style={{ paddingTop: 15 }}>
          <Typography variant="title" color="inherit" style={flex} align="left">
            POSITIVO
          </Typography>
          <Button variant="text" style={button} component={Link} to="/">
            Home
          </Button>
          <Button variant="text" style={button} component={Link} to="/about">
            About
          </Button>
          <Button variant="flat" style={signIn} component={Link} to="/signin">
            Sign in
          </Button>
          <Button variant="flat" style={signUp} component={Link} to="/signup">
            Sign up
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
