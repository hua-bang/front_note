import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    const { login: name, avatar_url, html_url } = this.props.user;
    return (
      <div className="card">
        <a href={html_url} target="_blank" rel="noreferrer">
          <img alt="avatar" src={avatar_url} style={{ width: "100px" }} />
        </a>
        <p className="card-text">{name}</p>
      </div>
    )
  }
}
