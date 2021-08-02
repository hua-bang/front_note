import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";
import Detail from './Detail';
import "./index.css";

export default class Message extends Component {
  state = {
    messageArr: [
      { id: "01", title: "消息1" },
      { id: "02", title: "消息2" },
      { id: "03", title: "消息3" }
    ]
  }

  replaceShow = (id, title) => {
    this.props.history.replace(`/home/message/detail/${id}/${title}`);
  }

  pushShow = (id, title) => {
    this.props.history.push(`/home/message/detail/${id}/${title}`);
  }

  render() {
    const { messageArr } = this.state;
    return (
      <div>
        <ul>
          {
            messageArr.map((msg) => {
              return (
                <li key={msg.id}>
                  {/* 向路由组件传参 */}
                  <Link to={`/home/message/detail/${msg.id}/${msg.title}`}>
                    {msg.title}
                  </Link>
                  <button onClick={() => { this.pushShow(msg.id, msg.title) }}>push</button>
                  <button onClick={() => { this.replaceShow(msg.id, msg.title) }}>replace</button>
                </li>
              )
            })
          }
        </ul>
        <hr />
        <Route path="/home/message/detail/:id/:title" component={Detail} />
      </div >
    )
  }
}
