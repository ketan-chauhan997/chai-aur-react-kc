import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter, setCounter] = useState(15)
// 15 is deafult value of counter
  // setCounter is a function which controls counter variable (basically it will update the variable anywhere in the UI)
  //let counter = 5;

  const addValue = () =>{
    console.log("Value Added", Math.random());
    // counter++;
    if(counter<20)
      setCounter(counter+1)
  }
  const removeValue = () =>{
    if(counter>0)
      setCounter(counter -1)
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}
      >Add Value{counter}</button>
      <br />
      <button
      onClick={removeValue}
      >Remove Value{counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
