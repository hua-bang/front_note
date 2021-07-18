import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      timer: null
    }
  }

  componentDidMount() {
    this.setClock();
  }

  componentWillUnmount() {
    this.clearClock();
  }

  setClock() {
    this.timerID = setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 1000);
  }

  clearClock() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <h1>hello, world</h1>
        <FormattedDate date={ this.state.date }></FormattedDate>
      </div>
    );
  }
}

function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

export default Clock;