import React, { Component } from 'react'
import { getUser } from "../../../api/github"
import PubSub from 'pubsub-js';
export default class Search extends Component {

  state = {
    keyword: ""
  }

  searchKeyword = () => {
    const keyword = this.state.keyword;
    PubSub.publish("ChangeListState", {
      isFirst: false,
      isLoading: true
    });

    getUser(keyword).then(res => {
      PubSub.publish("ChangeListState", {
        users: res.data.items,
        isLoading: false
      });
    }).catch(error => {
      PubSub.publish("ChangeListState", {
        isLoading: false,
        error: error.message
      });
    })
  }

  setSearchKeyword = (event) => {
    const { target: { value: keyword } } = event;
    this.setState({
      keyword
    })
  }

  render() {
    return (
      <div>
        <section className="jumbotron">
          <h3 className="jumbotron-heading">Search Github Users</h3>
          <div>
            <input type="text" value={this.state.keyword} placeholder="enter the name you search" onInput={this.setSearchKeyword} />&nbsp;
            <button onClick={this.searchKeyword}>Search</button>
          </div>
        </section>
      </div>
    )
  }
}
