const React = require("react");
const PropTypes = require("prop-types");

class Person extends React.Component{
  static propTypes = {
    name: PropTypes.string.isRequired,
    sex: PropTypes.string
  };

  static defaultProps = {
    sex: "男"
  };

  render() {
    let { name, age, sex } = this.props;
    return (
      <ul>
        <li>姓名:{ name }</li>
        <li>年龄:{ age + 1 }</li>
        <li>性别:{ sex }</li>
      </ul>
    )
  }
}

export default Person;