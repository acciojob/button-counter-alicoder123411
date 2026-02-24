
import React, { useState } from "react";
import './../styles/App.css';
const App = () => {
  const [count,setcount]=useState(0);
  function handleclick(){
    setcount(count+1);
    console.log("currently count is ",count);
  }
  return (
    <div>
      <h1>Button clicked clicked {count} times</h1>
      <button onClick={handleclick}>click me</button>
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
