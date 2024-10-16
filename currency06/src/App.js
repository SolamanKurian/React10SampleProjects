import {useState, useEffect ,useRef} from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
function App() {
  let [from,setFrom]=useState('inr')
  let [to,setTo]=useState('usd')
  let [amount,setAmount]=useState('')
  
  let options=[]
  const currencyData= useCurrencyInfo(from)

    
    
  if(currencyData){
    options=Object.keys(currencyData)
  }
  const conversionRate=currencyData?currencyData[to]:0
  
  return (
   <>
   <div className="w-full h-screen bg-green-800 flex items-center justify-center">
    <div className="w-6/12 bg-white/30 h-52 rounded-lg">
    <div className="w-full h-1/2 flex">
    <div className="w-1/2 h-full bg-blue-400">
    <label htmlFor="options">From</label>
    <select onChange={(e)=>setFrom(e.target.value)} id="options">{options.map((option)=>(
      <option key={option}>{option}</option>
    ))}</select>{from}
    </div>
    <div className="w-1/2 h-full bg-blue-700">
    <input type="number" placeholder=" Enter Amount" onChange={(e)=>setAmount(Number(e.target.value))}></input>
    </div>
    </div>
    <div className="w-full h-1/2 flex">
    <div className="w-1/2 h-full bg-blue-300">
    <label htmlFor="options">To</label>
    <select onChange={(e)=>setTo(e.target.value)} id="options">{options.map((option)=>(
      <option key={option}>{option}</option>
    ))}</select>{to}
    </div>
    <div className="w-1/2 h-full bg-blue-800">
   <h1>{amount > 0 && conversionRate
                  ? `Converted Amount: ${amount * conversionRate}`
                  : 'Please enter a valid amount and select currencies'}</h1>
    </div>
    </div>
    
    </div>
   </div>
   </>
  );
}

export default App;
