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
            <div className="inline sm:flex">
                <div className="sm:h-[95vh] sm:rounded-2xl sm:w-[35%] sm:mt-4 sm:mb-4 sm:ml-4">
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
                                width: '100%',          // Apne 40% wale div mein fit hone ke liye
                                }}
                                >
                                    {aicode}
                                </SyntaxHighlighter>
                    
                </div>
                <div>
                    <button style={{background:"#8A52FF", color:"#fff", padding:"0.3rem 0.4rem 0.3rem 0.4rem",marginLeft:"0.5rem",cursor:"pointer", borderRadius:"0.3rem" }}>Build it Again</button>
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