import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const [username, setUsername]=useState('')
    const [password, setPassword]=useState('')
const {setUser}=useContext(UserContext)

const handleSubmit = (e)=>{
e.preventDefault()
setUser({username,password})
}

  return (
    <div>
        <h1>Login</h1>
        <input type='text' onChange={(e)=>setUsername(e.target.value)} placeholder='username'></input>{' '}
        <input type='password' onChange={(e)=>setPassword(e.target.value)} placeholder='password'></input>
        <button onClick={handleSubmit} >Submit</button>
    </div>
  )
}

export default Login