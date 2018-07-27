import React, { Component } from "react";
import { Switch, Route, Router } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import About from "./components/About";
import Dashboard from "./components/Dashboard";

export const history = createHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signup" render={() => <SignUp something="foo" />} />
            <Route path="/signin" component={SignIn} />
            <Route path="/about" component={About} />
            <Route path="/:id/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
