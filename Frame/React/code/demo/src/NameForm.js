import React from 'react';
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    }
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(this.state.value);
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e) }>
        <label>
          名字:
          <input type="text" value={this.state.value} onChange={(e) => this.handleChange(e)} />
        </label>
        <input type="submit" value="提交" />
      </form>
    );
  }
}

export default NameForm;