import React, { Component } from 'react'
import Search from './Search';
import UserList from './UserList';


export default class GithubSearch extends Component {

  // saveUsers = (users) => {
  //   this.setState({
  //     users
  //   })
  // }

  // updateAppState = (state) => {
  //   this.setState(state)
  // }

  render() {
    return (
      <div className="container">
        <Search />
        <UserList />
      </div>
    )
  }
}