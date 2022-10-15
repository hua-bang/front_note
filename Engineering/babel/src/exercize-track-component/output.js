import _Tracker from "@material/tracker";

function App() {
  return (
    <div>
      <div {..._Tracker.addTracker('a123.b4322.c234.d224')}>
        123
      </div>
    </div>
  );
}

export default App;