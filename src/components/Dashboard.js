import React, { Component } from "react";
import {
  Typography,
  Paper,
  Button,
  Card,
  Grid,
  CardContent
} from "@material-ui/core";
import Header from "./Header";
import Footer from "./Footer";
import UserInputModal from "./UserInputModal";

const styles = {
  paper: {
    backgroundColor: "#f5f5f5",
    marginTop: 96,
    padding: 75,
    minHeight: 350
  },
  title: {
    color: "#000",
    fontFamily: "Playfair Display",
    fontWeight: "bold",
    textTransform: "uppercase"
  },
  button: {
    backgroundColor: "#26A65C",
    color: "#fff",
    margin: "10px",
    fontWeight: 700,
    fontFamily: "Source Sans Pro",
    fontSize: 14
  },
  card: {
    minWidth: 200
  },
  date: {
    marginTop: 8
  }
};

class Dashboard extends Component {
  state = {
    open: false
  };

  /*constructor(props) {
      super(props);
      this.state = {
          user:{
              id: '12135',
              name: 'User',
              posts:[
                  {

                  }
              ]
          }
      };
    } */

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { paper, date, button, card } = styles;
    console.log(this.props.location.state);
    return (
      <div>
        <Header redirect={this.props.location.state.redirect} />
        <Paper style={paper}>
          <Grid container>
            <Grid item sm={6}>
              <Typography variant="display2" align="left">
                Welcome, User
              </Typography>
            </Grid>
            <Grid item sm={6} style={{ textAlign: "right" }}>
              <Button variant="flat" style={button} onClick={this.handleOpen}>
                Add New Entry
              </Button>
            </Grid>
          </Grid>
          <br />
          <Grid container spacing="40">
            <Grid item sm={6}>
              <Card style={card}>
                <CardContent>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    pulvinar elementum lacinia. Aenean quis hendrerit mi.
                    Phasellus nulla tortor, tincidunt at nunc vel, euismod
                    vulputate libero.
                  </Typography>
                  <Typography paragraph style={date}>
                    01, January, 2018
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={6}>
              <Card>
                <CardContent>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    pulvinar elementum lacinia. Aenean quis hendrerit mi.
                    Phasellus nulla tortor, tincidunt at nunc vel, euismod
                    vulputate libero.
                  </Typography>
                  <Typography paragraph style={date}>
                    01, January, 2018
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <UserInputModal open={this.state.open} close={this.handleClose} />
        </Paper>
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
