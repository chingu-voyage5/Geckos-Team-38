import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { fetchUser } from "./actions";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import requireAuth from "./auth/requireAuth";
import { connect } from "react-redux";

class App extends Component {
  componentWillMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/about" component={About} />
          <Route path="/app" component={requireAuth(Dashboard)} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  { fetchUser }
)(App);
