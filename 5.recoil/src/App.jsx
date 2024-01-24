//Decent List of things to learn in recoil are
// RecoilRoot
// atom
// useRecoilState
// useRecoilvalue
// useSetRecoilState
// and selector
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { countAtom } from "./store/atoms/count";
import "./App.css";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
        <OddorEven></OddorEven>
      </RecoilRoot>
    </div>
  );
}
function OddorEven() {
  const count = useRecoilValue(countAtom);
  if (count % 2 == 0) {
    return <p>The number is even</p>;
  }
  // return <h1>The number is odd</h1>;
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
  const count = useRecoilValue(countAtom);
  return <div>{count}</div>;
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>Increase</button>
      <button onClick={() => setCount((count) => count - 1)}>Decrease</button>
    </div>
  );
}

export default App;
