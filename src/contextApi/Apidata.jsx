import React, { createContext, useState } from 'react'

export let apiContext = createContext()

function Apidata({children}) {
    let [value, setValue] = useState()
    let[text, setText] =useState()
    
    let Globai = {text, setText,value, setValue}
    
  return (
    <div>
        <apiContext.Provider value={Globai}>
            {children}
        </apiContext.Provider>
      
    </div>
  )
}

export default Apidata;
