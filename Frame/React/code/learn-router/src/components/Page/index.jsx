import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Home from './Home';
import About from './About';
import Nav from './Nav';
import Header from './Header';

export default class Page extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="row">
          <Nav></Nav>
          <div className="col-xs-6">
            <Switch>
              <Route path="/about" component={About} />
              <Route path="/home" component={Home} />
              <Redirect to="/about" />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}
