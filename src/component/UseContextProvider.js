

import React, { createContext, useState } from 'react'

//1-creat context
const ColorContext=createContext();

//2-creat provider
const UseContextProvider = ({children}) => {

//6- update data with state {usestate} 
//then join it with the context {ColorContext} in value
//then go to App to update the {useContext}
const [state, setstate] = useState('white')
const ChangeData=(color)=>{
    setstate(color)
}    
  return (
    <div>
    <h1>Hello from Context provider</h1>
    <ColorContext.Provider value={{state,ChangeData}}>
        {children}
    </ColorContext.Provider>
    
    </div>
  )
}


//3-export the provider to wrap all app , 
//and export the context to use any where // then go edite import in App // then go to index
export  {UseContextProvider,ColorContext }
