import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <Buttons />
    </div>
  );
}


function Buttons() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default App;
