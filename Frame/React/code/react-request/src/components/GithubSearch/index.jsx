import React, { Component } from 'react'
import Search from './Search';
import UserList from './UserList';


export default class GithubSearch extends Component {
  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    error: ""
  }

  saveUsers = (users) => {
    this.setState({
      users
    })
  }

  updateAppState = (state) => {
    this.setState(state)
  }

  render() {
    return (
      <div className="container">
        <Search saveUsers={this.saveUsers} updateAppState={this.updateAppState} />
        <UserList {...this.state} />
      </div>
    )
  }
}