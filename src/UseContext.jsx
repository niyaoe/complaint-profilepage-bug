import React, { createContext, useEffect, useState } from 'react'

const newContext = createContext()

const UseContext = ({children}) => {

    const [uniqId, setuniqId] = useState({}) 

    useEffect(() => {
     var uniqId = JSON.parse(localStorage.getItem("uniqid"))
     setuniqId(uniqId)
    }, [])
    
    
  return (
    <div>
        <newContext.Provider value={uniqId}>
        {children}
        </newContext.Provider>
    </div>
  )
}

export {newContext}

export default UseContext