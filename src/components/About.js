import React, { Component } from "react";
import { Typography, Paper } from "@material-ui/core";
import Header from "./Header";
import Footer from "./Footer";

const styles = {
  paper: {
    textAlign: "center",
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
  para: {
    padding: 20,
    fontSize: 16
  }
};

class About extends Component {
  render() {
    const { paper, title, para } = styles;

    return (
      <div>
        <Header />
        <Paper style={paper}>
          <Typography variant="display3" style={title}>
            About
          </Typography>
          <Typography paragraph align="justify" style={para}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            pulvinar elementum lacinia. Aenean quis hendrerit mi. Phasellus
            nulla tortor, tincidunt at nunc vel, euismod vulputate libero.
            Aliquam vel ipsum quis odio auctor elementum ut at enim. Nullam
            feugiat lorem odio. Vestibulum malesuada orci vel velit condimentum
            facilisis. Suspendisse rutrum porttitor vulputate. Ut eget accumsan
            libero. Vivamus at aliquam purus. Aenean mi mi, dignissim vitae
            tincidunt fermentum, scelerisque efficitur metus. Donec quam lectus,
            laoreet facilisis porttitor sit amet, varius a orci. Nam eu mi sit
            amet mi rutrum porta sit amet non urna. Mauris congue nisi ut lacus
            semper, nec feugiat massa porta. In lacus ex, hendrerit ut purus ac,
            auctor imperdiet massa. Vivamus molestie dapibus arcu, sed consequat
            magna lobortis vel. Donec et lectus vel enim aliquet tristique.
          </Typography>
          <Typography paragraph align="justify" style={para}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            pulvinar elementum lacinia. Aenean quis hendrerit mi. Phasellus
            nulla tortor, tincidunt at nunc vel, euismod vulputate libero.
            Aliquam vel ipsum quis odio auctor elementum ut at enim. Nullam
            feugiat lorem odio. Vestibulum malesuada orci vel velit condimentum
            facilisis. Suspendisse rutrum porttitor vulputate. Ut eget accumsan
            libero. Vivamus at aliquam purus. Aenean mi mi, dignissim vitae
            tincidunt fermentum, scelerisque efficitur metus. Donec quam lectus,
            laoreet facilisis porttitor sit amet, varius a orci. Nam eu mi sit
            amet mi rutrum porta sit amet non urna. Mauris congue nisi ut lacus
            semper, nec feugiat massa porta. In lacus ex, hendrerit ut purus ac,
            auctor imperdiet massa. Vivamus molestie dapibus arcu, sed consequat
            magna lobortis vel. Donec et lectus vel enim aliquet tristique.
          </Typography>
          <Typography paragraph align="justify" style={para}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            pulvinar elementum lacinia. Aenean quis hendrerit mi. Phasellus
            nulla tortor, tincidunt at nunc vel, euismod vulputate libero.
            Aliquam vel ipsum quis odio auctor elementum ut at enim. Nullam
            feugiat lorem odio. Vestibulum malesuada orci vel velit condimentum
            facilisis. Suspendisse rutrum porttitor vulputate. Ut eget accumsan
            libero. Vivamus at aliquam purus. Aenean mi mi, dignissim vitae
            tincidunt fermentum, scelerisque efficitur metus. Donec quam lectus,
            laoreet facilisis porttitor sit amet, varius a orci. Nam eu mi sit
            amet mi rutrum porta sit amet non urna. Mauris congue nisi ut lacus
            semper, nec feugiat massa porta. In lacus ex, hendrerit ut purus ac,
            auctor imperdiet massa. Vivamus molestie dapibus arcu, sed consequat
            magna lobortis vel. Donec et lectus vel enim aliquet tristique.
          </Typography>
        </Paper>
        <Footer />
      </div>
    );
  }
}

export default About;
