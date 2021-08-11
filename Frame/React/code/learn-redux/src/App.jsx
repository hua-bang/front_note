import { Button } from 'antd';
import Count from './containers/Count';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <Count store={ store } />
    </div>
  );
}

export default App;
