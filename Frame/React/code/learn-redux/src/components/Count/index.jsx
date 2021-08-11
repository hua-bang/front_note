import React, { Component } from 'react'


export default class Count extends Component {
  state = {
    count: 0,
    selectedNumber: 0,
    optionArr: [
      0,
      1,
      2,
      3
    ]
  }

  changeSelectNumber = (event) => {
    const val = Number(event.target.value);
    this.setState({
      selectedNumber: val
    });
  }

  changeCount(type, val) {
    
  }

  addCountIfOdd = () => {
    this.props.addIfOdd(this.state.selectedNumber);
  }

  asyncAdd = () => {
    this.props.asyncAdd(this.state.selectedNumber, 2000);
  }

  asyncSup = () => {
    this.props.asyncSup(this.state.selectedNumber);
  }

  // componentDidMount() {
  //   store.subscribe(() => {
  //     this.setState({});
  //   })
  // }

  add = () => {
    this.props.add(this.state.selectedNumber);
  }

  sup = () => {
    this.props.sup(this.state.selectedNumber);
  }



  render() {
    return (
      <div>
        <div className="header">
          <h1>当前求和为{this.props.count}</h1>
        </div>
        <div className="content">
          <div id="select-area">
            <select value={this.state.selectedNumber} onChange={this.changeSelectNumber}>
              {this.state.optionArr.map(option => {
                return (
                  <option key={ option } value={option} >{ option }</option>
                )
              }) }
            </select>
          </div>
          <div id="button-area">
            <button onClick={ this.add }>+</button>
            <button onClick={ this.sup }>-</button>
            <button onClick={ this.addCountIfOdd }>奇数加</button>
            <button onClick={this.asyncAdd}>异步加</button>
            <button onClick={ this.asyncSup }>异步减</button>
          </div>
        </div>
      </div>
    )
  }
}
