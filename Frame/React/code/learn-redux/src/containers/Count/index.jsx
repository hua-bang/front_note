import React from "react";
import { connect } from "react-redux";
import {
  createIncrementAction,
  createIncrementAsyncAction,
  createDecrementAction
} from "../../redux/actions/count";
// 1. 定义UI组件

class Count extends React.Component {
  state = {
    selectedNumber: 0,
    options: [
      0,
      1,
      2,
      3
    ]
  }

  changeSelectedNumber = (event) => {
    this.setState({
      selectedNumber: +event.target.value
    });
  }

  add = () => {
    this.props.add(this.state.selectedNumber);
  }

  sup = () => {
    this.props.sup(this.state.selectedNumber);
  }

  addIfOdd = () => {
    if (this.props.count % 2 === 1) {
      this.add();
    }
  }

  asyncAdd = () => {
    this.props.asyncAdd(this.state.selectedNumber, 500);
  }
  
  render() {
    return (
      <div>
        <div className="title">
          <h2>目前的Count为{this.props.count}</h2>
          <h2>下方人数组件为{ this.props.people.length }</h2>
        </div>
        <div className="content">
          <select value={this.state.selectedNumber} onChange={ this.changeSelectedNumber }>
            {
              this.state.options.map(option => (
                <option key={ option } value={ option }>{option}</option>
              ))
            }
          </select>
          <button onClick={ this.add }>+</button>
          <button onClick={ this.sup }>-</button>
          <button onClick={ this.addIfOdd }>奇数加</button>
          <button onClick={ this.asyncAdd }>异步加</button>
        </div>
      </div>
    )
  }
};

// 2. 编写mapStateToprops mapDispatchToProps

function mapStateToProps(state) {
  return {
    count: state.count,
    people: state.people
  };
}

function mapDispatchToProps(dispatch) {
  return {
    add: (data) => { dispatch(createIncrementAction(data)) },
    sup: data => dispatch(createDecrementAction(data)),
    asyncAdd: (data, time) => dispatch(createIncrementAsyncAction(data, time))
  }
}




// connect 导出
export default connect(mapStateToProps, mapDispatchToProps)(Count);