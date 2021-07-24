const React = require("react");

class Login extends React.Component {
  state = {
    name: "",
    password: ""
  }
  
  setFormData = (key) => {
    return (event) => {
      this.setState({
        [key]: event.target.value
      })
    };
  }

  valChange = (event) => {
    let { value, name }= event.target;
    this.setState({
      [name]: value
    });
  }

  submitForm = (event) => {
    alert(`name is ${this.state.name}, password = ${this.state.password}`);
    event.preventDefault();
  }

  render() {
    return (
      <form action="" onSubmit={ this.submitForm }>
        用户名: <input type="text" value={this.state.name} name="name" onInput={ this.setFormData("name") } />
        密码: <input type="password" value={this.state.password} name="password" onInput={this.setFormData("password")} />
        <button type="submit">submit</button>
      </form>
    )
  }
};

export default Login;