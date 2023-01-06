import React from 'react'
import { useEffect,useState } from 'react'
const UseEffectExample = () => {

   
    const [count, setCount] = useState(0)
    const IncreaseHandler=()=>{
        setCount(count+1)
    }
    useEffect(() => {
        console.log('hello from useeffect')
        }, [count ])


  return (
    <div>
    <h1>Hello from Effect</h1>
    <button onClick={IncreaseHandler}>Increase</button>
    <label>{count}</label>
    </div>
  )
}

export default UseEffectExample