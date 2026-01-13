import React, { createContext, useEffect, useState } from 'react'

const newContext = createContext()

const UseContext = ({children}) => {

    const [userData, setuserData] = useState({}) 

    useEffect(() => {
     var udata = JSON.parse(localStorage.getItem("userdata"))
     setuserData(udata)
    }, [])
    
    
  return (
    <div>
        <newContext.Provider value={{userData}}  >
        {children}
        </newContext.Provider>
    </div>
  )
}

export {newContext}

export default UseContext