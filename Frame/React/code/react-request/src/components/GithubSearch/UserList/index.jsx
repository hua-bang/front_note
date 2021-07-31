import React, { Component } from 'react'
import "./css/index.css";
import UserItem from './Item';
import PubSub from "pubsub-js";

export default class UserList extends Component {
  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    error: ""
  }

  componentDidMount() {
    PubSub.subscribe("ChangeListState", (msg, data) => {
      this.setState(data)
    })
  }

  render() {
    const { users, isFirst, isLoading, error } = this.state;
    return (
      <div>
        <div className="row">
          {
            isFirst ?
              <h2>输入关键词搜索</h2> :
              isLoading ? <h2>loading</h2> :
                error ? <h2>{error}</h2> :
                  users.map(user => {
                    return <UserItem user={user} key={user.id} />
                  })
          }
        </div>
      </div>
    )
  }
}
