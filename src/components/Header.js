import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import grey from "@material-ui/core/colors/grey";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { fetchUser, signOut } from "../actions";
import { connect } from "react-redux";
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
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    console.log(this.props);
  }

  handleSignOut() {
    const { signIn, signUp } = styles;
    if (this.props.auth) {
      return (
        <Button variant="flat" style={signIn} onClick={this.props.signOut}>
          Sign Out
        </Button>
      );
    } else {
      return (
        <div>
          <Button variant="flat" style={signIn} component={Link} to="/signin">
            Sign in
          </Button>
          <Button variant="flat" style={signUp} component={Link} to="/signup">
            Sign up
          </Button>
        </div>
      );
    }
  }
  render() {
    const { flex, button } = styles;
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
          {this.handleSignOut()}
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(
  mapStateToProps,
  { fetchUser, signOut }
)(Header);
