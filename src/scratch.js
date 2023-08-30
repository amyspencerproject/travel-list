import { useState } from "react";

import "./styles.css";

export default function App() {
  const [count, setCount] = useState(1);
  const [step, setStep] = useState(1);

  const handleCountMinus = () => {
    setCount((c) => c - step);
  };

  const handleCountAdd = () => {
    setCount((c) => c + step);
  };

  // const handleStepSlider = (e) => {
  //   e.prevent.default();
  //   console.log(e.target.value);
  // };

  // const handleStepMinus = () => setStep((s) => s - 1);

  // const handleStepAdd = () => setStep((s) => s + 1);

  return 
    (<div className="App">
      <div className="row">
        <button onClick={handleCountMinus}>➖</button>
        <input className="count" value={count} />
        <button onClick={handleCountAdd}>➕</button>
      </div>
      <p>
        <span>Today is Sat Aug 19 2023</span>
      </p>
    </div>
  );