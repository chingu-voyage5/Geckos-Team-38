import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/signup' component={SignUp} />
      </Switch>
    );
  }
}

export default App;
