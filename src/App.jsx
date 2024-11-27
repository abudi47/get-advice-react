import { useState } from 'react';
import {useEffect} from "react";
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  const [Advice,  setAdvice] = useState ("");

  async function Getmessage () {
    const res = await fetch ("https://api.adviceslip.com/advice")
    const data = await res.json();
    setAdvice(data.slip.advice)
    setCount((c) => c+1  );
  }

  return (
    <>
      <h1>{Advice}</h1>

      <button onClick={Getmessage}> Get Advice</button>
      <Meassage count = {count} />

      <footer>
        developed by Abudi47
      </footer>
      
    </>
  )
}
function Meassage(props) {
  return (
    <p>
      You have read <strong>{props.count}</strong>Piece of advice 
    </p>
  )
}
export default App
