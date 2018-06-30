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

const styles = {
  paper: {
    backgroundColor: "#f5f5f5",
    marginTop: 96,
    padding: 75
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
  }
};

class Dashboard extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {
  //         user:{
  //             id: '12135',
  //             name: 'User',
  //             posts:[
  //                 {

  //                 }
  //             ]
  //         }
  //     };
  //   }

  render() {
    const {
      paper,
      title,
      bootstrapFormLabel,
      bootstrapInput,
      button,
      card
    } = styles;

    return (
      <div>
        <Header />
        <Paper style={paper}>
          <Grid container>
            <Grid item sm={6}>
              <Typography variant="display2" align="left">
                Welcome, User
              </Typography>
            </Grid>
            <Grid item sm={6} style={{ textAlign: "right" }}>
              <Button variant="flat" style={button}>
                Add New Entry
              </Button>
            </Grid>
          </Grid>
          <Grid container spacing-xs-8="true">
            <Grid item sm={6}>
              <Card raised style={card}>
                <CardContent>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    pulvinar elementum lacinia. Aenean quis hendrerit mi.
                    Phasellus nulla tortor, tincidunt at nunc vel, euismod
                    vulputate libero.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={6}>
              <Card raised>
                <CardContent>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    pulvinar elementum lacinia. Aenean quis hendrerit mi.
                    Phasellus nulla tortor, tincidunt at nunc vel, euismod
                    vulputate libero.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Paper>
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
