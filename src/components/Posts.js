import React, { Component } from "react";
import { Typography, Card, Grid, CardContent } from "@material-ui/core";

const styles = {
  card: {
    minWidth: 200
  },
  date: {
    marginTop: 8
  }
};

class Posts extends Component {
  render() {
    const { card, date } = styles;
    return (
      <Grid item sm={6}>
        <Card style={card}>
          <CardContent>
            <Typography>{this.props.todo.content}</Typography>
            <Typography paragraph style={date}>
              {this.props.todo.date}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  }
}

export default Posts;
