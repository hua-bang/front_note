import { useState } from 'react';
import { Alert } from 'hiller-design';

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Alert>
        {count}
      </Alert>
      <Alert kind="warning" />
      <button onClick={() => { setCount(prev => prev + 1); }}>add</button>
    </>
  );
}

export default App;