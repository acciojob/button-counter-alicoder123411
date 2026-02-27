
import React, { useState } from "react";
import './../styles/App.css';
const App = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    console.log("currently count is ", count);
  }

  return (
    <div>
      <p>Button clicked {count} times</p>
      <button onClick={handleClick}>click me</button>
    </div>
  )
}

export default App
