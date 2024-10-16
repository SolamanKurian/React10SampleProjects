import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Github = () => {
  const [data,setData]=useState([])
  useEffect(()=>{
    axios.get('https://github.com/SolamanKurian').then((response)=>{
      console.log(response.data);
      
    }).catch((response)=>{

    })
  },[])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github</div>
  )
}

export default Github