import React, { Component } from 'react'
import "./css/index.css";
import UserItem from './Item';

export default class UserList extends Component {
  render() {
    const { users, isFirst, isLoading, error } = this.props;
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
