import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {


  let [counter, setCounter] = useState(11);
  let [message , setMessage] = useState("");

  // let counter = 25;
  const addValue = () => {
    console.log("value Added");
    // counter = counter +1;
    setCounter(counter + 1);
    setMessage("");
  }

  let removeValue = () => {
    if(counter <= 0){
      setMessage("bs kr shoreya");
      return;
    }
    console.log("value Removed", counter);
    setCounter(counter - 1);
  }

  return (
    <>
    <h1>Counter(made by Usman)</h1>
    <h2>counter value: {counter}</h2>

    {message && <p style= {{color: "red"}}>{message}</p>}

    <button onClick={addValue}>add value {counter}</button>
    <br/>
    <button onClick = {removeValue}>remove value {counter}</button>
     
    </>
  )
}

export default App
