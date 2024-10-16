import {useState, useEffect} from "react";
import axios from "axios";
function useCurrencyInfo(currency){

const [data,setData]=useState(null);


useEffect(() => {
    axios.get(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`).then((response)=>{
        setData(response.data.currency)
        

    }).catch(()=>{

    })
}, [currency])

return data;



}

export default useCurrencyInfo