import React, { Component } from 'react'
import { getUser } from "../../../api/github"

export default class Search extends Component {

  state = {
    keyword: ""
  }

  searchKeyword = () => {
    const context = this;
    const keyword = this.state.keyword;
    context.props.updateAppState({
      isFirst: false,
      isLoading: true
    })
    getUser(keyword).then(res => {
      context.props.saveUsers(res.data.items);
      context.props.updateAppState({
        isLoading: false
      })
    }).catch(error => {
      context.props.updateAppState({
        isLoading: false,
        error: error.message
      })
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
