import React, { useContext, useRef } from 'react'
import { ColorContext } from './UseContextProvider'

const UseReffExample = () => {
  //8-call {useContext} to use the function {ChangeData}
  // then ChangeData(valueInput.current.value) in focusMe
  
  const {state,ChangeData} = useContext(ColorContext)

    const valueInput = useRef(null)
    const focusMe=()=>{
        valueInput.current.focus()
        console.log(valueInput.current.value)
        ChangeData(valueInput.current.value)

    }

  return (
    <div>
    
    <h1>Hello from Reff</h1>
    <input type='text' ref={valueInput} / >
    <button onClick={focusMe}>click</button>
    </div>
  )
}

export default UseReffExample