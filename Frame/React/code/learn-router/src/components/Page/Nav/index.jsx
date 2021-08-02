import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import MyNavLink from '../../MyNavLink';

export default class Nav extends Component {
  render() {
    return (
      <div className="col-xs-2 col-xs-offset-2">
        <div className="list-group">
          <MyNavLink to="/about">about</MyNavLink>
          <MyNavLink to="/home">home</MyNavLink>
        </div>
      </div>
    )
  }
}
