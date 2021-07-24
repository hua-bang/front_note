const React = require("react");

class Clock extends React.Component {
  state = {
    time: new Date().toTimeString(),
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        time: new Date().toTimeString()
      })
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <h2>hello</h2>
        <input type="text" />
        现在是 {this.state.time}
      </div>
    )
  }
}

export default Clock;