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
      
    </>
   )
}

export default App
