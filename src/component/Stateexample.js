import React, { useState } from 'react'





const Stateexample = () => {
  
  
const [count, setCount] = useState(0)
const [text, setText] = useState('')


const IncreaseHandler=()=>{
    setCount(count+1)
}
const decreaseHandler=()=>{
    setCount(count-1)
}

const inputHandler=(e)=>{
    setText(e.target.value)
    console.log(text)
}
  
    return (
    <div>
    <h1>Hello from State</h1>
    <h1>{count}</h1>
    <button onClick={IncreaseHandler}>Increase</button>
    <button onClick={decreaseHandler}>Decrease</button>
    <input type='text' value={text}   onChange={inputHandler}/>
    </div>
  )
}

export default Stateexample