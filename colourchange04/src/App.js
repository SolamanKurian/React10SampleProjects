import { useState } from "react";


function App() {
  let [colour,setColour]=useState('olive')
  let change=(clr)=>{
      setColour(clr)
  }
  return (
   <div className="w-full h-screen duration-200 flex justify-center items-center"style={{backgroundColor:colour}}>
    <button onClick={()=>setColour('olive')} className="bg-blue-600 p-2 m-2 w-3/12 rounded-2xl  text-white">Refresh</button>
    <div className="fix flex flex-wrap justify-center inset-x-0 px-2 bg-white w-4/12 h-20 rounded-lg">
      {/* <button onClick={()=>change('red')} className="bg-red-700 p-2 m-2 w-3/12 rounded-2xl text-white">Red</button>
      <button onClick={()=>change('yellow')} className="bg-yellow-500 p-2 m-2 w-3/12 rounded-2xl  text-white">Yellow</button>
      <button onClick={()=>change('blue')} className="bg-blue-600 p-2 m-2 w-3/12 rounded-2xl  text-white">Blue</button> */}
{/* another way -- just update the state inside jsx instead of making a function call , but remember that always the onclick shuld have a function*/}
<button onClick={()=>setColour('red')} className="bg-red-700 p-2 m-2 w-3/12 rounded-2xl text-white">Red</button>
      <button onClick={()=>setColour('yellow')} className="bg-yellow-500 p-2 m-2 w-3/12 rounded-2xl  text-white">Yellow</button>
      <button onClick={()=>setColour('blue')} className="bg-blue-600 p-2 m-2 w-3/12 rounded-2xl  text-white">Blue</button>

    </div>
   </div>
  );
}

export default App;
