import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {

  const [length, setLength] = useState(8);
  const [numberAloowed, setNumberAllowed] = useState(false);
  const [charactersAllowed, setCharactersAllowed] = useState(false);
  const [password, setPassword] = useState("");
  
  //ref hook
  const passwordRef = useRef(null);

  //useCallBack used for Optimization
  const passwordGenerator = useCallback( () =>{
    let pass = "";
    let str= "ABCDEFGHIJKLMNOPQRSTUVWZabcdefghijklmnopqrstuvwz";

    if(numberAloowed)
      str+="01234567890";
    if(charactersAllowed)
      str+="`~!@#$%^&*-_=+[]{}";
    for( let i =1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length + 1);
      console.log(char);
      pass += str.charAt(char);
    }

    setPassword(pass);

  } , [length, numberAloowed, charactersAllowed, setPassword])

  const copyPassowrdToClipBoard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,length);
    window.navigator.clipboard.writeText(password)
  }, [password])

  //UseEffect paramters are passed for Memoziation
  useEffect(()=>{
    passwordGenerator();
  }, [length, numberAloowed, charactersAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordRef}
          />
          <button
          className='text-white outline-none bg-blue-700 px-3 py-0.5 shrink-0' onClick={copyPassowrdToClipBoard}
          >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
            min={8} 
            max={100}
            className='cursor-pointer'
            onClick={(e)=>setLength(e.target.value)}
            />
            <label >Length: {length}</label>
          </div>
          <div
          className='flex items-center gap-x-1'
          >
            <input type="checkbox"
            defaultChecked={numberAloowed}
            id='numberInput'
            onChange={()=>{
              setNumberAllowed((prev)=>!prev)
            }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={charactersAllowed}
            id='characterInput'
            onChange={()=>{
              setCharactersAllowed((prev)=>!prev)
            }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
