import { useState } from "react";



function App() {

  let [num,setnum]=useState(15);
  const addValue=()=>{
    setnum((preCount)=>preCount+1)
    setnum((preCount)=>preCount+1)
    setnum((preCount)=>preCount+1)
    setnum((preCount)=>preCount+1)
  }
  const removeValue=()=>{
    setnum((preCount)=>preCount-1)
    setnum((preCount)=>preCount-1)
    setnum((preCount)=>preCount-1)
    setnum((preCount)=>preCount-1)
    
  }
  return (
  <>
  <h1>React counter project</h1>
  <h2>Counter value</h2>
  <button onClick={addValue}>Add value</button>{num}
  <button onClick={removeValue}>Remove value</button>
  <p>footer:{num}</p>
  </>
  );
}

export default App;
