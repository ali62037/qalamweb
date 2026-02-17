import React, { useContext, useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {apiContext} from "../contextApi/Apidata"


function Aianswer({comingFromSibling}){
    let {text} = useContext(apiContext)
    let aicode = text
    const [dataUrl, setDataUrl] = useState('');
    useEffect(() => {
        if (!aicode)   return;
        
        setDataUrl('');

        // 1. HTML code ko URL-safe banane ke liye encode karein
        const encodedHtml = encodeURIComponent(aicode);

        // 2. Data URL banayein
        const newUrl = `data:text/html;charset=utf-8,${encodedHtml}`;
        
        setDataUrl(newUrl);
        // console.log(dataUrl);
        

    }, [aicode]); 



    let[box,setBox]=useState(false)
    useEffect(()=>{
        setBox(comingFromSibling)
    },[comingFromSibling])

    return(
        <div style={{display: box ? "flex" : "none" }}>
               <div style={{display: aicode? "none" : "flex"}} className="fixed inset-0 bg-white z-50 flex items-center justify-center p-4">
  
  {/* Single responsive design for all devices */}
  <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto text-center">
    
    {/* Rocket */}
    <div className="mb-6 sm:mb-8">
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 mx-auto">
        <div className="w-full h-full bg-blue-50 rounded-2xl flex items-center justify-center
                      border-2 border-blue-200 shadow-lg">
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl animate-bounce">🚀</span>
        </div>
        <div className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full
                      animate-pulse ring-2 ring-white"></div>
      </div>
    </div>

    {/* Text */}
    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
      Creating your code
    </h1>
    <p className="text-sm sm:text-base md:text-lg text-gray-500 mb-6 sm:mb-8">
      Please wait a moment
    </p>

    {/* Loading Dots */}
    <div className="flex justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-blue-400 rounded-full animate-bounce [animation-delay:0ms]"></div>
      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-blue-400 rounded-full animate-bounce [animation-delay:200ms]"></div>
      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-blue-400 rounded-full animate-bounce [animation-delay:400ms]"></div>
    </div>

    {/* Status */}
    <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
      <div className="flex items-center gap-2 text-sm sm:text-base md:text-lg justify-center">
        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"></div>
        <span className="text-gray-700">Reading prompt...</span>
      </div>
      <div className="flex items-center gap-2 text-sm sm:text-base md:text-lg justify-center">
        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <span className="text-gray-700">Generating code...</span>
      </div>
    </div>

    {/* Tech Tags */}
    <div className="flex flex-wrap justify-center gap-2 mb-6 sm:mb-8">
      <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-100 text-gray-700 rounded-full 
                     text-xs sm:text-sm font-medium">HTML</span>
      <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-100 text-gray-700 rounded-full 
                     text-xs sm:text-sm font-medium">CSS</span>
      <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-100 text-gray-700 rounded-full 
                     text-xs sm:text-sm font-medium">JavaScript</span>
    </div>

    {/* Footer */}
    <p className="text-xs sm:text-sm text-gray-400">
      ✦ AI at work ✦
    </p>
  </div>

</div>

            <div className={`${aicode ? "inline sm:flex" : "hidden"} w-full`}>
                <div className="sm:h-[95vh] sm:rounded-2xl sm:w-[35%] sm:mt-4 sm:mb-4 sm:ml-4 h-[95vh]">
                <div className="overflow-x-auto m-4 h-[89%] sm:overflow-x-auto sm:h-[89%] sm:m-4">
                    <SyntaxHighlighter 
                        language="html" 
                        style={vscDarkPlus} 
                        // 1. Line wrapping ko enable karein
                        // showLineNumbers
                        wrapLines={true} 
                        // 2. Internal <code> tag ko target karein (Sabse zaroori!)
                        codeTagProps={{
                            style: {
                                whiteSpace: 'pre-wrap',
                                wordBreak: 'break-all', // Lambe words ko beech se tod dega
                                }
                            }}
                            // 3. Bahar ke <pre> tag ko style karein
                            customStyle={{
                                fontSize: '11px',       // Aapne kaha tha font chota karna hai
                                whiteSpace: 'pre-wrap',
                                wordBreak: 'break-all',
                                overflowX: 'hidden',    // Taki side mein scroll na aaye
                                width: '100%', 
                                height: "82.5vh"         // Apne 40% wale div mein fit hone ke liye
                                }}
                                >
                                    {aicode}
                                </SyntaxHighlighter>
                    
                </div>
                <div>
                    <button style={{backgroundColor:"#8A52FF", color:"#fff", padding:"0.3rem 0.4rem 0.3rem 0.4rem",marginLeft:"0.5rem",cursor:"pointer", borderRadius:"0.3rem" }}>Build it Again</button>
                </div>
            </div>
            <div className="sm:h-[95vh] sm:rounded-2xl sm:w-[64%] sm:mt-4 sm:mb-4 sm:ml-4">
                <iframe
                    src={dataUrl} 
                    title="AI Generated UI Preview"
                    
                    // Aap isko style kar sakte hain
                    style={{ 
                        width: '100%', 
                        height: '95vh', 
                        border: '1px solid #ccc',
                        backgroundColor: '#fff' 
                    }}
                />
            </div>
            </div>
            
            
        </div>
    )
}


export default Aianswer;
