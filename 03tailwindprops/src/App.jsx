import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    userName:"Ketan",
    age:27
  }
  let myArr=[1,2,3]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded mb-4'>Tailwind CSS</h1>
      {/* // Example how to send props values */}
      <Card userName='chai aur code' someObj={myArr} />
    </>
  )
}

export default App
