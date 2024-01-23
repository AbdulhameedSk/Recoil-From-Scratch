//Decent List of things to learn in recoil are
// RecoilRoot
// atom
// useRecoilState
// useRecoilvalue
// useSetRecoilState
// and selector

import "./App.css";

function App() {
  return (
    <div>
      <Count />
    </div>
  );
}

function Count() {
  console.log("OH CRAP");
  return (
    <div>
      <CountRenderer /> <Buttons />
    </div>
  );
}

function CountRenderer() {
  return <div>{count}</div>;
}

function Buttons() {
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default App;
