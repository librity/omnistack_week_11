import React, { useState } from "react";

import Header from "./Header";

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => setCounter(counter + 1);

  return (
    <>
      <Header title="Be The Hero">{counter}</Header>
      <button onClick={incrementCounter}>Add</button>
    </>
  );
}

export default App;
