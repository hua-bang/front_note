const React = require("react");

class DiffDemo extends React.Component {
  state = {
    persons: [
      {
        id: 1,
        name: "hug",
        age: 18
      },
      {
        id: 2,
        name: "hua",
        age: 18
      },
    ]
  }

  add = () => {
    const { persons } = this.state;
    let person = {
      id: persons.length + 1,
      name: "test",
      age: Math.floor(Math.random() * 100) % 30
    }
    this.setState({
      persons: [person, ...persons]
    })
  }

  render() {
    return (
      <div>
        <button onClick={ this.add }>添加</button>
        <ul>
          {this.state.persons.map((person, index) => {
            return <li key={index}>{person.name} -- { person.age}</li>
          })}
        </ul>
        <hr />
        <hr />
        <ul>
          {this.state.persons.map((person) => {
            return <li key={person.id}>{person.name} -- { person.age}</li>
          })}
        </ul>
      </div>
      
    )
  }
}

export default DiffDemo;