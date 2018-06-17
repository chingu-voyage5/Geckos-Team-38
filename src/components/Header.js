import React, { Component } from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import grey from '@material-ui/core/colors/grey';
import green from '@material-ui/core/colors/green';

const primary = grey[50];
const styles = {
    flex: {
      flex: 1,
    },
    button: {
        margin: "10px",
        fontWeight: 600
    },
    signIn: {
        backgroundColor: green[400],
        color: primary,
        margin: "10px",
        fontWeight: 600
    },
    signUp: {
        backgroundColor: green[700],
        color: primary,
        margin: "10px",
        fontWeight: 600
    }
  };

class Header extends Component {
    render() {
        return (
            <AppBar color={primary}>
                <Toolbar>
                    <Typography variant="title" color="inherit" style={styles.flex} align="left">
                        POSITIVO
                    </Typography>
                    <Button variant="text" style={styles.button}>Home</Button>
                    <Button variant="text" style={styles.button}>About</Button>
                    <Button variant="flat" style={styles.signIn}>Sign in</Button>
                    <Button variant="flat" style={styles.signUp}>Sign up</Button>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Header;