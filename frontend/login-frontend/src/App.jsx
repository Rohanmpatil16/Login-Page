import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const[username,setUsername]=useState("")
  const[password,setPassword]=useState("")
  const[message,setMessage]=useState("")

const login = async () => {

    const response = await fetch(
      `http://localhost:8080/login?username=${username}&password=${password}`,
      {
        method: "POST"
      }
    );

    const result = await response.text();
    setMessage(result);
  };
  return(
    <>
      <div style={{ "text-align": "center", "margin-top": "20px" }}>

        <h1>Login</h1>

        
        <input type="text" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)} />
        <input type="text" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

        <button onClick={login}>Login</button>

        <h2>{message}</h2>
      </div>
    </>
   )
}

export default App
