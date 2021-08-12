import React, { Component } from 'react'
import { connect } from "react-redux";
import { createAddPersonAction } from "../../redux/actions/person";

class Person extends Component {
  state = {
    name: "",
    age: ""
  }

  changeName = (event) => {
    this.setState({
      name: event.target.value
    });
  }

  changeAge = (event) => {
    this.setState({
      age: event.target.value
    });
  }


  addPerson = () => {
    let person = {
      id: this.props.people.length + 1,
      name: this.state.name,
      age: this.state.age
    };
    this.props.add(person);
  }

  render() {
    return (
      <div>
        <h2>目前的Count为{this.props.count}</h2>
        <input type="text" value={this.state.name} placeholder="输入名字" onChange={ this.changeName } />
        <input type="text" value={this.state.age} placeholder="输入年龄" onChange={this.changeAge} />
        <button onClick={this.addPerson}>添加</button>
        <div>
          <ul>
            {
              this.props.people.map(person => {
                return (
                  <li key={person.id}>{ person.name + "---" + person.age }</li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default connect(
  state => {
    return {
      people: state.people,
      count: state.count
    }
  },
  dispatch => ({
    add: (person) => { dispatch(createAddPersonAction(person)) }
  })
)(Person);