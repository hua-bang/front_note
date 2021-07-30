import MyButton from "./components/MyButton";
import GithubSearch from "./components/GithubSearch";
const React = require("react");

class App extends React.Component {
  render() {
    return (
      <div>
        <GithubSearch />
      </div>
    )  
  }
}

export default App;