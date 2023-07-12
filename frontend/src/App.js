import React from "react";

function App() {
  
  fetch('http://localhost:5000/')
  .then((res)=>res.json())
  .then((data)=>console.log(data));

  return (
    <div>
      <h1>햅삐HaPPPPy</h1>
    </div>
  );
}

export default App;