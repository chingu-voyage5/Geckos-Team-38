import React, { Component } from "react";
import * as actions from "../actions";
import { connect } from "react-redux";
import _ from "lodash";
import { Typography, Paper, Button, Grid } from "@material-ui/core";
import Header from "./Header";
import Footer from "./Footer";
import UserInputModal from "./UserInputModal";
import Posts from "./Posts";

const styles = {
  paper: {
    backgroundColor: "#f5f5f5",
    marginTop: 96,
    padding: 75,
    minHeight: 350
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

class Dashboard extends Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  renderPosts() {
    const { data } = this.props;
    const posts = _.map(data, (value, key) => {
      return <Posts key={key} todoId={key} todo={value} />;
    });
    if (!_.isEmpty(posts)) {
      return posts;
    }
  }

  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    const { paper, button } = styles;

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
              <Button variant="flat" style={button} onClick={this.handleOpen}>
                Add New Entry
              </Button>
            </Grid>
          </Grid>
          <Grid container>{this.renderPosts()}</Grid>
          <br />
          <UserInputModal open={this.state.open} close={this.handleClose} />
        </Paper>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = ({ data }) => {
  return {
    data
  };
};

export default connect(
  mapStateToProps,
  actions
)(Dashboard);
