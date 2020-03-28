import React, { useState } from "react";

import "./global.css";
import Login from "./pages/Login";

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => setCounter(counter + 1);

  return (
    <>
      <Login title="Be The Hero">{counter}</Login>
      <button onClick={incrementCounter}>Add</button>
    </>
  );
}

export default App;
