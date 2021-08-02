import React, { Component } from 'react'

const DetailData = [
  { id: "01", content: "hello, world" },
  { id: "02", content: "hello, JavaScript" },
  { id: "03", content: "hello, ByteDance" },
]

export default class Detail extends Component {
  render() {
    const { id, title } = this.props.match.params;
    const findResult = DetailData.find(data => data.id === id);

    return (
      <ul>
        <li>ID: {findResult.id}</li>
        <li>TITLE: {title}</li>
        <li>CONTENT: {findResult.content} </li>
      </ul>
    )
  }
}
