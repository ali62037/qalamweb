import React, { useContext, useState } from 'react'
import {apiContext} from "../contextApi/Apidata"






function First({sendToParent}) {
  let [toggel, setToggel] = useState(true)
  let [hide, setHide]= useState(true)
  let [promp, setPromp] = useState("")
  let {setValue} = useContext(apiContext)
  
  function hides(){
    setHide(!hide)
    sendToParent(hide)
    setValue(promp)
    
    
  }
  function day() {
    setToggel(!toggel)
  }

  function inputPromt(e){
    setPromp(e.target.value)
  }

 
  

  return (
      <div style={{display: hide ? "flex" : "none",}}
      className={`h-screen m-0 flex flex-col justify-center items-center gap-10 ${
        toggel ? "bg-[#f4f1fb] text-[#2b1f3b]" : "bg-[#0B1120] text-[#E2E8F0]"
      }`}
    >
      {/* Top Right Icons */}
      <div className="absolute top-8 right-8">
        <h1
          onClick={day}
          className={`text-[8vw] sm:text-5xl md:text-3xl lg:text-3xl cursor-pointer ${
            toggel ? "hidden" : "block"
          }`}
        >
          ☀️
        </h1>

        <h1
          onClick={day}
          className={`text-[8vw] sm:text-5xl md:text-3xl lg:text-3xl cursor-pointer ${
            !toggel ? "hidden" : "block"
          }`}
        >
          🌙
        </h1>
      </div>
     
      {/* Center H1 */}
      <h1 className="text-[7vw] sm:text-5xl md:text-6xl lg:text-7xl text-center"><span className='text-[#8A52FF]'>Qalam</span>Web AI</h1>
      <h1 className="text-[7vw] sm:text-5xl md:text-6xl lg:text-7xl text-center">
        Describe your <span className=' italic'>dream</span> website..
      </h1>

      {/* Input + Button */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 w-full px-4">
           
        <input
          className="tracking-wide placeholder:text-[15px] sm:placeholder:text-base md:placeholder:text-lg lg:placeholder:text-xl xl:placeholder:text-2xl text pt-2.5 pb-2.5 border border-[#ccc] w-full lg:w-[550px] md:w-[550px] placeholder:p-1 "
          type="text"
          placeholder="Type your idea, watch it turn into a website… 🌙"
          
          onChange={inputPromt}
        />
        <button onClick={hides} className="w-full sm:w-auto bg-[#8A52FF] hover:bg-[#8A52FF] text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ml-1 cursor-pointer">Build It!</button>
      </div>
      <div>
        <p className="text-center text-sm sm:text-base mt-8 text-gray-500 dark:text-gray-300">
  ⚡ Powered by <span className="font-bold bg-clip-text text-transparent bg-[#8A52FF]">AI</span> & <span className="font-bold bg-clip-text text-transparent bg-[#8A52FF]">Shere</span> ✨
</p>

      </div>
    </div>    
  )
}

export default First;
