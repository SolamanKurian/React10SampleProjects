import { useCallback, useState, useEffect, useRef } from "react";


function App() {
  let passRef=useRef(null)
  const [length,setLength]=useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false)
  const [charAllowed, setCharallowed]=useState(false)
  const [password, setPassword]=useState('')
  const copyPasswordToClipboard=()=>{
    window.navigator.clipboard.writeText(password)
    passRef.current?.select()
  }

  const generatePassword=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*()_+"

    for(let i=1; i< length;i++){
      const char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    setPassword(pass)

  },[length,numberAllowed,charAllowed])

useEffect(()=>{
  generatePassword()
},[length,numberAllowed,charAllowed])

  return (

    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 mt-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input ref={passRef} type="text" value={password} className="outline-none w-full py-1 px-3" placeholder="Password" readOnly></input>
        <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" onClick={copyPasswordToClipboard}>Copy</button>
      </div>
      <div className="flex gap-3
       shadow rounded-lg overflow-hidden mb-4">
      <div className=" flex items-center gap-x-1">
        <input type="range"min={6} max={20} value={length} className="cursor-pointer" onChange={(e)=>setLength(e.target.value)} name="" id=""></input>
     <label htmlFor="length">Length:{length}</label>
      </div>
      <div className=" flex items-center gap-x-1">
        {/* advanced method to toggle a value */}
        <input type="checkbox" defaultChecked={numberAllowed} onChange={()=>setNumberAllowed((prev)=>!prev)} name="" id=""></input>
        <label htmlFor="number">Numbers</label>
      </div>

      <div className=" flex items-center gap-x-1">
        {/* advanced method to toggle a value */}
        <input type="checkbox" defaultChecked={charAllowed} onChange={()=>setCharallowed((prev)=>!prev)} name="" id=""></input>
        <label htmlFor="charector">Charector</label>
      </div>
      </div>
    </div>

  );
}

export default App;
