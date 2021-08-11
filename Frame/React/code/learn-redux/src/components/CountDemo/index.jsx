import React, { Component } from 'react'
import store from "../../redux/store";
import {
  createDecrementAction,
  createIncrementAction,
  createIncrementAsyncAction,
  createDecrementAsyncAction
} from "../../redux/count_action"


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
    if (type === "increment") {
      store.dispatch(createIncrementAction(val));
    } else {
      store.dispatch(createDecrementAction(val));
    }
  }

  addCountIfOdd = () => {
    if (store.getState() % 2 === 1) {
      this.changeCountBySelectedNumber("increment");
    }
  }

  asyncAdd = () => {
    store.dispatch(createIncrementAsyncAction(this.state.selectedNumber, 1000));
  }

  asyncSup = () => {
    store.dispatch(createDecrementAsyncAction(this.state.selectedNumber));
  }

  // componentDidMount() {
  //   store.subscribe(() => {
  //     this.setState({});
  //   })
  // }

  changeCountBySelectedNumber(type) {
    this.changeCount(type, this.state.selectedNumber);
  }

  add() { }

  render() {
    return (
      <div>
        <div className="header">
          <h1>当前求和为{store.getState()}</h1>
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
            <button onClick={() => { this.changeCountBySelectedNumber("increment")}}>+</button>
            <button onClick={() => { this.changeCountBySelectedNumber("decrement")}}>-</button>
            <button onClick={ this.addCountIfOdd }>奇数加</button>
            <button onClick={this.asyncAdd}>异步加</button>
            <button onClick={ this.asyncSup }>异步减</button>
          </div>
        </div>
      </div>
    )
  }
}
