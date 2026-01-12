import React, { useState } from "react";
import First from "./component/First";
import Aianswer from "./component/Aianswer";
import GeminiApi from "./component/GeminiApi"

function App(){
  const[msg, setMsg]=useState("")
  console.log(msg);
  
  return(
    <div>
        <First sendToParent={setMsg}/>
        <GeminiApi/>
        <Aianswer comingFromSibling={msg}/>         
    </div>
  )
}

export default App;